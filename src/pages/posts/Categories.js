import React from "react";
import {  useSelector, useDispatch } from "react-redux";
import {  setActiveSubCategories} from "../../redux/slices/categoriesSlice";
import { Link, Route, Routes, useParams } from "react-router-dom";
import Posts from "./Posts";
import SinglePost from "./SinglePost";

function Categories({ cat }) {
  const usePar = useParams();
  const dispatch = useDispatch();

  const { categories, activeCategories, activeSubCategories } = useSelector((state) => state.categories);
  const subCategories = categories.filter((item) => item.link === cat );

const onActiveSubCategories = (category)=> {
 dispatch(setActiveSubCategories(category))
}

console.log(`/${activeCategories}/${activeSubCategories}/*`);
  return (
    <div>
    
      <ul className="sub">
        {subCategories &&
          subCategories[0].subCategories.map((category) => (
            <li key={category.id} >
              <Link onClick={()=>onActiveSubCategories(category.link)} to={`${category.link}`} className={category.link === usePar['*']? 'active' : ''}>{category.name}</Link>
            </li>
          ))}
      </ul>


      <Routes>
      <Route path={`:${activeCategories}/:${activeSubCategories}/:id`} element={<SinglePost></SinglePost>}/>
        {subCategories &&
          subCategories[0].subCategories.map((category) => (
            <Route
              key={category.id}
              path={`/:${usePar['*']}/*`}
              element={<Posts cat={usePar['*']} />}
            />
         
            
          ))}
          
      </Routes>
    </div>
  );
}

export default Categories;
