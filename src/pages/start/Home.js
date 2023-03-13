import React, { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import {setActiveCategories} from "../../redux/slices/categoriesSlice";
import { Link, Route, Routes } from "react-router-dom";
import Categories from "../posts/Categories";

function Home() {
  const dispatch = useDispatch();
  const { email } = useSelector((state) => state.user);
  const { categories, activeCategories } = useSelector((state) => state.categories);
 

  const onActive = (category) => {
    
    dispatch(setActiveCategories(category));
  };
 console.log(activeCategories);
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
                  element={<Categories cat={activeCategories} />}
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
