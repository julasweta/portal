import { getAuth } from "firebase/auth";
import { getDatabase, ref, update, onValue, get, set } from "firebase/database";
import React from "react";
import { useSelector } from "react-redux";

function SinglePost() {
  const db = getDatabase();
  const auth = getAuth();

  const { activeSubCategories, activeCategories } = useSelector(
    (state) => state.categories
  );
  const { recipes, usefuls } = useSelector((state) => state.posts);




const activeId = JSON.parse(
  localStorage.getItem("activeId")
);
const activeCategory= JSON.parse(
  localStorage.getItem("activeCategory")
);
const activeSubCategory = JSON.parse(
  localStorage.getItem("activeSubCategory")
);

const activeArr = ()=> {
  return activeCategory === 'recipes'? recipes : usefuls
 } 

  const post = 
    activeArr().filter((post) => post.category === activeSubCategory)
    .filter((item) => item.id === activeId)


  //const userId = auth.currentUser.uid;
  // отримуємо
  const userIdLocal = JSON.parse(localStorage.getItem("idLocal"));

  //записуємо лайки в загальну базу даних користувача
  const writeUserData = (userId, id) => {
    const userRef = ref(db, "users/" + userId);

    // Отримати поточну версію масиву like з бази даних
    get(userRef).then((snapshot) => {
      const userData = snapshot.val();
     // console.log(userData.like);
      if (userData.like === undefined || null) {
        console.log("ne zapusyjy");
        set(userRef, {
          like: [id],
        });
      } else {
        console.log("zapusyjy");
        const currentLikes = userData.like.filter((item) => item !== "") || [];

        // Перевірити, чи вже є елемент з id в масиві
        const hasId = currentLikes.some((item) => item === id);

        console.log("currentLikes:", currentLikes);
        if (!hasId) {
          alert("Додано в улюблені");
          // update the like array with the new id
          set(userRef, {
            ...userData,
            like: [...currentLikes, id],
          });
        } else {
          alert(`вже є в списку "Улюблені"`);
        }
      }
    });
  };

  return (
    <div>
      <h4>{post[0].name}</h4>
      <img src={post[0].img} alt={post[0].name} width="500" />
      <div>{post[0].description}</div>

      {activeCategory === "useful" && (
        <table>
          <thead>
            <tr>
              <th>Назва</th>
              <th>Енергія (ккал.)</th>
              <th>Білки (г)</th>
              <th>Вуглеводи (г)</th>
              <th>Жири (г)</th>
              <th>Волокна (г)</th>
            </tr>
          </thead>
          <tbody>
            {post[0].info.map((product, index) => (
              <tr key={index}>
                <td>{product.Назва}</td>
                <td>{product["Енергія (ккал.)"]}</td>
                <td>{product["Білки (г)"]}</td>
                <td>{product["Вуглеводи (г)"]}</td>
                <td>{product["Жири (г)"]}</td>
                <td>{product["Волокна (г)"]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <button
        onClick={() => writeUserData(userIdLocal, (post[0].id + post[0].category+''))}
        className="custom-btn btn"
      >
       Add Like
      </button>
    </div>
  );
}

export default SinglePost;
