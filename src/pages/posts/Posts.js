import React from "react";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function Posts({ cat }) {
  const { recipes, usefuls } = useSelector((state) => state.posts);
  const { activeCategories } = useSelector((state) => state.categories);
  

  const onActiveName = (id, category, subCategory) => {
    localStorage.setItem(
      "activeId",
      JSON.stringify(id)
    );
    localStorage.setItem(
      "activeCategory",
      JSON.stringify(category)
    );
    localStorage.setItem(
      "activeSubCategory",
      JSON.stringify(subCategory)
    );
  };


  const changeCategory = (id, category) => {
    const checkRecipes = recipes.filter(item => (item.category + item.id) === (category+id));
    const checkUsefuls = usefuls.filter(item => (item.category + item.id) === (category+id));
  if(checkRecipes.length > 0){
    return 'recipes'
  }
  if(checkUsefuls.length > 0){
    return 'useful'
  }
  }


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
                <div className="card-name">
                  <h4>{post.name}</h4>
                </div>
                <div className="card-body">
                  <p>{post.description}</p>
                  <div className="card-post_img">
                    <img src={post.img} alt={post.name}></img>
                  </div>
                  <div>
                    
                    <Link
                   
                      onClick={() => onActiveName(post.id, changeCategory(post.id, post.category), post.category)}
                      to={`${post.id}`}
                    > <Button name=  'Детальніше'> </Button>
                    
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
