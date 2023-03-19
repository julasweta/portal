import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setActiveSubCategories } from "../../redux/slices/categoriesSlice";
import { Link, Route, Routes, useParams } from "react-router-dom";
import Posts from "./Posts";
import SinglePost from "./SinglePost";


function Categories() {
 //const usePar = useParams();
  const dispatch = useDispatch();



  const { categories, activeCategories, activeSubCategories, activeName } =
    useSelector((state) => state.categories);
  const subCategories = categories.filter((item) => item.link === activeCategories);

  const onActiveSubCategories = (category) => {
    dispatch(setActiveSubCategories(category));
  };



  return (
    <div>
      <ul className="sub">
        {subCategories &&
          subCategories[0].subCategories.map((category) => (
            <li key={category.id}>
              <Link
                onClick={()=> onActiveSubCategories(category.link)}
                to={`${category.link}`}
                className={category.link === activeSubCategories ? "active" : ""}
              >
                {category.name}
              </Link>
            </li>
          ))}
      </ul>

      <Routes>
        <Route
        exact path={`/:${activeSubCategories}/*`}
          element={<SinglePost></SinglePost>}
        />
        {subCategories &&
          subCategories[0].subCategories.map((category) => (
            <Route
              key={category.id}
              exact path={`/:${activeCategories}/`}
              element={<Posts cat={activeSubCategories} />}
            />
          ))}
      </Routes>
    </div>
  );
}

export default Categories;
