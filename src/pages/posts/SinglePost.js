import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setActivePost } from "../../redux/slices/postsSlice";

function SinglePost() {
  const dispatch = useDispatch();
  const { activeSubCategories, activeName, activePost } = useSelector(
    (state) => state.categories
  );
  const { recipes } = useSelector((state) => state.posts);

  useEffect(() => {
    const post = recipes
      .filter((post) => post.category === activeSubCategories)
      .filter((item) => item.id === activeName);
    dispatch(setActivePost(post));
  }, [activeName, recipes, activeSubCategories]);

  console.log(activePost);
  console.log(activeName);

  return (
    <div>
      <h4>{activePost && activePost.name}</h4>
    </div>
  );
}

export default SinglePost;
