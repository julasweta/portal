import React from "react";
import { Routes } from "react-router-dom";
import List from "./List";

const categoriesRecipes = [
  {
    id: 1,
    name: "Салати",
    img: "https://cdn.stocksnap.io/img-thumbs/960w/sandwich-food_XJGS3LXDXA.jpg",
    description: "Каталог, збірник рецептів",
    link: "/salads",
  },
  {
    id: 2,
    name: "Перші страви",
    img: "https://images.pexels.com/photos/13915954/pexels-photo-13915954.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Корсині поради, довідники",
    link: "/firstd",
  },
  {
    id: 3,
    name: "Мясні страви",
    img: "https://images.pexels.com/photos/2059151/pexels-photo-2059151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "/meat",
    link: "",
  },
  {
    id: 4,
    name: "Випічка",
    img: "https://images.pexels.com/photos/2059151/pexels-photo-2059151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Актуальні сезонні рецепти",
    link: "/cake",
  },
  {
    id: 5,
    name: "Рибні страви",
    img: "https://images.pexels.com/photos/2059151/pexels-photo-2059151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "/fish",
    link: "/fish",
  },
];

function Recipes({ list }) {
  return (
   
 
     <div className="wrapper-content">
        <List list={categoriesRecipes}></List>
   
  </div>
   

  );
}

export default Recipes;
