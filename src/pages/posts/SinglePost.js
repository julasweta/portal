import { getAuth } from "firebase/auth";
import { getDatabase, ref, update, onValue, get, set } from "firebase/database";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/Button";
import { setLike } from "../../redux/slices/clientSlice";

function SinglePost() {
  const dispatch = useDispatch();
  const db = getDatabase();
  const auth = getAuth();

  const { activeSubCategories, activeName, activePost } = useSelector(
    (state) => state.categories
  );
  const { recipes } = useSelector((state) => state.posts);
  const { like } = useSelector((state) => state.client);


  const post = recipes
    .filter((post) => post.category === activeSubCategories)
    .filter((item) => item.id === activeName);


  const userId = auth.currentUser.uid;

    //записуємо лайки в загальну базу даних користувача
    const writeUserData = (userId, id) => {
      const userRef = ref(db, "users/" + userId);
  
      // Отримати поточну версію масиву like з бази даних
      get(userRef).then((snapshot) => {
        const userData = snapshot.val();
        if (userData === null) {
          console.log('ne zapusyjy');
          set(userRef, {
            like: [id],
          });
        } else {
           const currentLikes = userData.like.filter((id) => id !== "") || [];
  
          // Перевірити, чи вже є елемент з id в масиві
          const hasId = currentLikes.some((item) => item === id);
  
          console.log('currentLikes:', currentLikes);
          if (!hasId) {
            console.log('id not found, adding like');
            // update the like array with the new id
            set(userRef, {
              ...userData,
              like: [...currentLikes, id],
            });
          } else {
            console.log('already liked');
          }
          
        }
      });
    };
  
    
    
  
  
  
  

  return (
    <div>
      <h4>{post[0].name}</h4>
      <img src={post[0].img} alt="" />
      <div>{post[0].id}</div>
      <button
        onClick={() => writeUserData(userId, post[0].id)}
        className="custom-btn btn"
      >
        Like
      </button>
    </div>
  );
}

export default SinglePost;
