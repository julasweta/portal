import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { ref, set, onValue } from "firebase/database";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLike } from "../../redux/slices/clientSlice";
import { useNavigate } from "react-router-dom";

function ClientLike() {
  const { like } = useSelector((state) => state.client);
  const { recipes } = useSelector((state) => state.posts);
  const navigate = useNavigate();

  //база даних
  const db = getDatabase();
  const auth = getAuth();
  const dispatch = useDispatch();
  const [likePosts, setLikePosts] = useState([]);

  const userId = auth.currentUser ? auth.currentUser.uid : null;
   // отримуємо
   const userIdLocal = JSON.parse(
    localStorage.getItem("userIdLocal")
  );

  useEffect(() => {
    //перевіряємо чи залогінився користувач
    if (!userIdLocal) {
      navigate("/login");
    }
    //Зчитуємо дані з бази даних
    onValue(
      ref(db, "/users/" + userIdLocal),
      (snapshot) => {
      snapshot.val().like.filter((id) => id !== "").map((item) =>   dispatch(setLike(item)));
        
      },
      {
        onlyOnce: true,
      }
    );
  }, [userIdLocal]);

  // записуємо пости
  useEffect(() => {
 
      if (like[0] !== undefined) {
        console.log(recipes)
       
        const arr = like[0].filter((id) => id !== "").map((item) =>
          recipes.filter((post) => post.id === item)
        );
        setLikePosts(arr);
      }
  
  
  }, [like,recipes]);
  console.log(likePosts);



  return (
    <div>
      ClienLike
      <ul className="list-posts">
        {likePosts.length > 0 &&
          likePosts.map((post) => (
            post[0] !== undefined &&
            <li className="card-post" key={post[0].id}>
              <h2 className="like-name">{post[0].name}</h2>
              <div className="card-post_img">
                <img src={post[0].img} alt={post[0].name}></img>
              </div>
              <div className="like-description">{post[0].description}</div>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default ClientLike;
