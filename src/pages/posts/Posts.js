import React, { useEffect, useState } from "react";
import Button from "../../components/Button";
import { Link, useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setActiveName } from "../../redux/slices/categoriesSlice";
import {setResipes}  from "../../redux/slices/postsSlice";


function Posts({ cat }) {
  const dispatch = useDispatch();
  const { categories, activeCategories, activeSubCategories, activeName } =
    useSelector((state) => state.categories);
    const { resipes } = useSelector((state) => state.posts);

  //отримуємо рецепти

  const onActiveName = (name) => {
    dispatch(setActiveName(name));
  };

console.log(resipes);


  return (
    <div>
      <ul className="list-posts">
        {resipes !== undefined && resipes.map((post, index) => (
          <li key={index} className="card-post">
            <h4>{post.name}</h4>
            <div>
              <p>{post.description}</p>
              <div className="card-post_img">
                <img src={post.img} alt={post.name}></img>
              </div>
              <div>
                <Button name={"add"}> </Button>
                <Link
                  onClick={() => onActiveName(post.id)}
                  to={`${post.id}`}
                >
                  {post.name}
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Posts;
