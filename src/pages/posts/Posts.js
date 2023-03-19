import React from "react";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setActiveName } from "../../redux/slices/categoriesSlice";

function Posts({ cat }) {
  const dispatch = useDispatch();

  const { recipes, usefuls } = useSelector((state) => state.posts);
  const { activeCategories } = useSelector((state) => state.categories);
  

  const onActiveName = (name) => {
    dispatch(setActiveName(name));
  };

  const activeArr = ()=> {
   return activeCategories === 'recipes'? recipes : usefuls
  }

  return (
    <div>
      <ul className="list-posts">
        {activeArr() !== undefined &&
          activeArr()
            .filter((item) => item.category === cat)
            .map((post, index) => (
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
