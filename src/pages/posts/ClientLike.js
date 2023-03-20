import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { ref, set, get, onValue, remove } from "firebase/database";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setActiveName } from "../../redux/slices/categoriesSlice";
import Button from "../../components/Button";

function ClientLike() {
  const { like } = useSelector((state) => state.client);
  const { recipes, usefuls } = useSelector((state) => state.posts);
  const navigate = useNavigate();

  const [likePosts, setLikePosts] = useState([]);
  const [deleted, setDelete] = useState(false);
  const [currentLike, setCurrentLike] = useState([]);

  //база даних
  const db = getDatabase();
  const auth = getAuth();

  // отримуємо
  const userIdLocal = JSON.parse(localStorage.getItem("idLocal"));

  const onActiveName = (id, category, subCategory) => {
    localStorage.setItem(
      "activeId",
      JSON.stringify(id)
    );
    localStorage.setItem(
      "activeCategory",
      JSON.stringify(category)
    );
    localStorage.setItem(
      "activeSubCategory",
      JSON.stringify(subCategory)
    );
  };
  
  
  
  const changeCategory = (id, category) => {
    const checkRecipes = recipes.filter(item => (item.category + item.id) === (category+id));
    const checkUsefuls = usefuls.filter(item => (item.category + item.id) === (category+id));
  if(checkRecipes.length > 0){
    return 'recipes'
  }
  if(checkUsefuls.length > 0){
    return 'useful'
  }
  }



  //видаляємо з бази даних like
  const onDeleteLikePost = (value) => {
    setDelete(!deleted)
    const postRef = ref(db, `users/${userIdLocal}/like`);
    get(postRef)
      .then((snapshot) => {
        snapshot.forEach((childSnapshot) => {
          const childKey = childSnapshot.key;
          const childData = childSnapshot.val();
          if (childData === value) {
            const childRef = ref(db, `users/${userIdLocal}/like/${childKey}`);
            remove(childRef)
              .then(() => {
                console.log(`Deleted item with value ${value}`);
                setDelete(!deleted)
              })
              .catch((error) => {
                console.error(`Error deleting item: ${error}`);
              });
          }
        });
      })
      .catch((error) => {
        console.error(`Error getting data: ${error}`);
      });
  };

  useEffect(() => {
    //перевіряємо чи залогінився користувач
    if (!userIdLocal) {
      navigate("/login");
    }

    // витягуємо лайки з бази данних
    onValue(ref(db, "/users/" + userIdLocal), (snapshot) => {
      setCurrentLike(snapshot.val().like.filter(Boolean));
    });
  }, [db, navigate, userIdLocal, deleted]);

// записуємо пости
useEffect(() => {
  if (currentLike !== undefined) {
    const arr = recipes.filter((recipe) =>
      currentLike.includes(recipe.id + recipe.category)
    );
   
    const arr2 = usefuls.filter((useful) =>
      currentLike.includes(useful.id + useful.category)
    );

    setLikePosts([...arr, ...arr2]);
  }
}, [currentLike, recipes, usefuls]);
 


const result = likePosts//.filter(subArr => subArr.some(Boolean));



  return (
    <div>
      <ul className="list-posts">
        {result.length !== undefined &&
          result.map((post, index) =>
           <li className="card-post" key={index}>
           <div className="card-name">
                  <h4>{post.name}</h4>
                </div>
          <div className="card-body">
            
            <p >{post.description}</p>
            <div className="card-post_img">
              <img src={post.img} alt={post.name}></img>
            </div>
            <button className="btn btn-like"
              onClick={() => onDeleteLikePost(post.id + post.category)}
            >
               &#x2764;
            </button>
            <Link
                   
                   onClick={() => onActiveName(post.id, changeCategory(post.id, post.category), post.category)}
                   to={`/${changeCategory(post.id, post.category)}/${post.category}/${post.id}`}
                 > <Button name=  'Детальніше'> </Button>
                 
                 </Link>
          </div>
        </li>
            
            
          )}
      </ul>
    </div>
  );
}

export default ClientLike;
