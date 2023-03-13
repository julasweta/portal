import React from "react";
import { useSelector } from "react-redux";
import { Link, Route, Routes, useParams } from "react-router-dom";
import Posts from "./Posts";
import SinglePost from "./SinglePost";

function Categories({ cat }) {
  const usePar = useParams();
 

console.log(usePar);
  const { categories } = useSelector((state) => state.categories);
  const subCategories = categories.filter((item) => item.link === cat );



  return (
    <div>
    
      <ul className="sub">
        {subCategories &&
          subCategories[0].subCategories.map((category) => (
            <li key={category.id} >
              <Link to={`${category.link}`} className={category.link === usePar['*']? 'active' : ''}>{category.name}</Link>
            </li>
          ))}
      </ul>


      <Routes>
      <Route path={`${cat}/${usePar['*']}`} element={<SinglePost></SinglePost>}/>
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
