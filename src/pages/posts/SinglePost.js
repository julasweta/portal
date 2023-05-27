import { getAuth } from "firebase/auth";
import { getDatabase, ref, get, set } from "firebase/database";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function SinglePost() {
  const db = getDatabase();
  const auth = getAuth();
  const dispatch = useDispatch();

  const { recipes, usefuls } = useSelector((state) => state.posts);
  const [table, setTable] = useState([]);
  const [hide, setHide] = useState(null);

  const activeId = JSON.parse(localStorage.getItem("activeId"));
  const activeCategory = JSON.parse(localStorage.getItem("activeCategory"));
  const activeSubCategory = JSON.parse(
    localStorage.getItem("activeSubCategory")
  );

  //отримуємо таблицю калорійності
  useEffect(() => {
    const arr = usefuls.filter((item) => item.id === 1);
    if (usefuls.length > 0) {
      setTable(arr[0].info);
    }
  }, [usefuls, dispatch]);

  //отримуємо калорії для кожного інгрідієнта
  const caloriesForProduct = (product) => {
    //const name = product.split(" - ")[0];console.log(name);
    const res = table.filter((item) => item["Назва"].toLowerCase() === product.toLowerCase());
    return res;
  };

  // дані з браузерного рядка
  const params = useParams();
  const category = Object.keys(params)[1];
  const subcategory = Object.keys(params)[2];
  const recipeId = params.hasOwnProperty("*") ? params["*"] : undefined;

console.log(recipeId);

  // який активний масив даних
  const activeArr = () => {
    if (activeCategory) {
      return activeCategory === "recipes" ? recipes : usefuls;
    } else {
      return category === "recipes" ? recipes : usefuls;
    }
  };

  //який пост на сторінці
  const post = activeArr()
    .filter((post) => post.category === (activeSubCategory || subcategory))
    .filter((item) => item.id === (activeId || recipeId));

  // отримуємо
  const userIdLocal = JSON.parse(localStorage.getItem("idLocal"));

  //записуємо лайки в загальну базу даних користувача
  const writeUserData = (userId, id) => {
    const userRef = ref(db, "users/" + userId);

    // Отримати поточну версію масиву like з бази даних
    get(userRef).then((snapshot) => {
      const userData = snapshot.val();
      if (
        userData === null ||
        userData.like === undefined ||
        userData.like === null
      ) {
        console.log("ne zapusyjy");
        set(userRef, {
          like: [id],
        });
      } else {
        // Перевірити, чи вже є елемент з id в масиві
        const currentLikes = userData.like.filter((item) => item !== "");

        const hasId = currentLikes.some((item) => item === id);
        if (!hasId) {
          alert("Додано в улюблені");
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

  //розбиваємо текст на рядки
  const recipeString = (text) => {
    if (text) {
      const sentences = text.split(/[.?!]/);
      const formattedText = sentences.map((sentence, index) => (
        sentence.length > 2 &&
        <p key={index}>
          <li> {sentence.trim()}.</li>
        </p>
      ));
      return formattedText;
    }
  };



  return (
    post[0] && (
      <div>
        <div className="single-box">
          <h1>{post[0].name}</h1>
          <div className="single-description">
            <div className="single-img">
              <img src={post[0].img} alt={post[0].name} width="500" />
            </div>
            <div className="single-info">
              <div key="uniq">{post[0].description}</div>
              <ul>
                {post[0].ingridients !== undefined &&
                  Object.entries(post[0].ingridients).map((item, index) => (
                    <li key={index} className="single-ingridients">
                      <span
                        onClick={() => setHide(index === hide ? null : index)}
                      >
                        {`${item[0]} - ${item[1]}`}
                      </span>
                      {hide === index && (
                        <ul className={` ${hide === index && "show"}`}>
                          {
                          caloriesForProduct(item[0]) &&
                            Object.entries(caloriesForProduct(item[0])).map(
                              (item, index) => (
                                <li key={index} className="single-calories">
                                  <p>Назва: {item[1]["Назва"]}</p>
                                  <p>
                                    Енергія (ккал.):{" "}
                                    {item[1]["Енергія (ккал.)"]}
                                  </p>
                                  <p>Білки (г): {item[1]["Білки (г)"]}</p>
                                  <p>
                                    Вуглеводи (г): {item[1]["Вуглеводи (г)"]}
                                  </p>
                                  <p>Жири (г): {item[1]["Жири (г)"]}</p>
                                  <p>Волокна (г): {item[1]["Волокна (г)"]}</p>
                                </li>
                              )
                            )}
                        </ul>
                      )}
                    </li>
                  ))}
              </ul>
              <span>
                <b>Порцій: </b> {post[0].servings}{" "}
              </span>
            </div>
          </div>

          <ol className="single-recipe" type="i">
            {recipeString(post[0].recipe)}
          </ol>
        </div>

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
                <tr key={`product-${index}`}>
                  <td key={`product-name-${index}`}>{product.Назва}</td>
                  <td key={`product-energy-${index}`}>
                    {product["Енергія (ккал.)"]}
                  </td>
                  <td key={`product-protein-${index}`}>
                    {product["Білки (г)"]}
                  </td>
                  <td key={`product-carbs-${index}`}>
                    {product["Вуглеводи (г)"]}
                  </td>
                  <td key={`product-fat-${index}`}>{product["Жири (г)"]}</td>
                  <td key={`product-fiber-${index}`}>
                    {product["Волокна (г)"]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        <button
          onClick={() =>
            writeUserData(userIdLocal, post[0].id + post[0].category + "")
          }
          className="custom-btn btn"
        >
          Добавити в Улюблені
        </button>
      </div>
    )
  );
}

export default SinglePost;
