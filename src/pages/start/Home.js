import React, { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import {setActiveCategories, setActiveSubCategories} from "../../redux/slices/categoriesSlice";
import { Link, Route, Routes } from "react-router-dom";
import Categories from "../posts/Categories";

function Home() {
  const dispatch = useDispatch();
 // const { email } = useSelector((state) => state.user);
  const { categories, activeCategories, activeSubCategories } = useSelector((state) => state.categories);
  const emailLocal = JSON.parse(localStorage.getItem("emailLocal") );

  const onActive = (category) => {
    
    dispatch(setActiveCategories(category));
  };

  return (
    <div className="container">
      <div>
        {emailLocal === null ? (
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
                    to={`${category.link}`}
                    className={category.link === activeCategories ? "active" : ""}
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
                  path={`/:${activeCategories}/*`}
                  element={<Categories/>}
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
