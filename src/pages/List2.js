import React, { useEffect, useState } from "react";
import axios from "axios";
import CardPost from "../components/CardPost";
import { useLocation } from 'react-router-dom';

function List2(name) {
  const [posts, setPosts] = useState([]);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const category = searchParams.get(':category');
  const type = searchParams.get('id');

console.log((category));

  const getPosts = () => {
    axios
      .get(`https://my-json-server.typicode.com/julasweta/repo/pizzas`)
      .then((arr) => {
        setPosts(arr.data);
      });
  };

  useEffect(() => {
    getPosts();
  }, []);


  // всі пости
  return (
    <div>
      <h2>LIST2</h2>
      {posts && posts.map((item, index) => (
       
          <CardPost item ={item} key={index} ></CardPost>
     
        
          
      ))}
    </div>
  );
}

export default List2;
