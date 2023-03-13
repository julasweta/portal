import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "../../components/Button";
import { Link, useParams } from "react-router-dom";

function Posts({cat}) {
  const [posts, setPosts] = useState([]);
 

  //отримуємо рецепти
  useEffect(() => {
    axios.get(`https://api.jsonbin.io/v3/b/640e569ac0e7653a0586ccae`)
      .then((response) => {
        setPosts(response.data.record.filter(post=> post.category === cat));
      })
      .catch((error) => {
        console.log(error);
      });
  }, [cat]);

  return (
    <div>
    
      <ul className="list-posts">
        {posts.map((post, index) => (
          <li key={index} className="card-post">
            <h4>{post.name}</h4>
            <div>
              <p>{post.description}</p>
              <div className="card-post_img"><img src={post.img} alt={post.name}></img></div>
              <div>
                <Button name={'add'}> </Button>
                <Link to={`${post.name}`}>{post.name}</Link>
                </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Posts;


