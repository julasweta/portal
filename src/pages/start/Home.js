import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, Route, Routes } from "react-router-dom";
import Categories from "../posts/Categories";
import SinglePost from "../posts/SinglePost";

function Home() {
  const { email } = useSelector((state) => state.user);
  const { categories } = useSelector((state) => state.categories);
  const [activeLink, setActive] = useState("");

  const onActive = (category) => {
    setActive(category);
  };

  return (
    <div className="container">
      <div>
        {email != null ? (
          <div className="wrapper-sign">Авторизуйтесь</div>
        ) : (
          <div className="wrapper-content">
            <ul>
              {categories.map((category) => (
                <li key={category.id}>
                  <Link
                    onClick={() => {
                      onActive(category.link);
                    }}
                    to={`/${category.link}/`}
                    className={category.link === activeLink ? "active" : ""}
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>

            <Routes>
              {categories.map((category) => (
                <Route
                  key={category.id}
                  path={`/:${category.link}/*`}
                  element={<Categories cat={activeLink} />}
                />
              ))}
            </Routes>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
