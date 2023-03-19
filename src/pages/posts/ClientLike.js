import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { ref, set, get, onValue, remove } from "firebase/database";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLike } from "../../redux/slices/clientSlice";
import { setDelete } from "../../redux/slices/postsSlice";
import { useNavigate } from "react-router-dom";

function ClientLike() {
  const { like } = useSelector((state) => state.client);
  const { recipes, usefuls } = useSelector((state) => state.posts);
  const navigate = useNavigate();

  const [likePosts, setLikePosts] = useState([]);
  const [deleted, setDelete] = useState(false);

  //база даних
  const db = getDatabase();
  const auth = getAuth();
  const dispatch = useDispatch();

  // отримуємо
  const userIdLocal = JSON.parse(localStorage.getItem("idLocal"));



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
    console.log(userIdLocal);
    onValue(
      ref(db, "/users/" + userIdLocal),
      (snapshot) => {
        snapshot
        .val()
        .like
        .filter(Boolean)
        .map(item => dispatch(setLike(item)));
      }
    );
  }, [db, dispatch, navigate, userIdLocal, deleted]);

// записуємо пости
useEffect(() => {
  if (like !== undefined) {
    const arr = recipes.filter(recipe => like.includes(recipe.id + recipe.category))
    const arr2 = usefuls.filter(useful => like.includes(useful.id + useful.category))
    setLikePosts([...arr, ...arr2]);
  }
}, [like, recipes, usefuls, deleted, userIdLocal]);
 

 


const result = likePosts//.filter(subArr => subArr.some(Boolean));
console.log('like', like);
//console.log('deleted', deleted);
console.log('deleted', deleted);


  return (
    <div>
      ClienLike
      <ul className="list-posts">
        {result.length !== undefined &&
          result.map((post, index) =>
           <li className="card-post" key={index}>
          <h2 className="like-name">{post.name}</h2>
          <div className="card-post_img">
            <img src={post.img} alt={post.name}></img>
          </div>
          <div className="like-description">{post.description}</div>
          <button
            onClick={() => onDeleteLikePost(post.id + post.category)}
          >
            delete
          </button>
        </li>
            
            
          )}
      </ul>
    </div>
  );
}

export default ClientLike;
