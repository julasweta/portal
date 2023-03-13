import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setActiveCategories } from "../../redux/slices/categoriesSlice";

function SinglePost() {
  const dispatch = useDispatch();
  const { activeCategories } = useSelector((state) => state.categories);
  const { posts } = useSelector((state) => state.posts);
  const [post, setPost] = useState([]);

  useEffect(() => {
    setPost(posts.filter((post) => posts.link === activeCategories));
  }, []);

  return (
    <div>
      <h4>Single</h4>
    </div>
  );
}

export default SinglePost;
