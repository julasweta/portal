import React from "react";
import { useSelector } from "react-redux";
import Category from "../../components/Category";

function Home() {
  const { email } = useSelector((state) => state.user);
  const categories = [
    {
      id: 1,
      name: "Рецепти",
      img: "https://cdn.stocksnap.io/img-thumbs/960w/sandwich-food_XJGS3LXDXA.jpg",
      description: "Каталог, збірник рецептів",
      link:'/recipes'
    },
    {
      id: 2,
      name: "Корисне",
      img: "https://images.pexels.com/photos/13915954/pexels-photo-13915954.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "Корсині поради, довідники",
      link:"/useful"
    },
    {
      id: 3,
      name: "Сезонні рецепти",
      img: "https://images.pexels.com/photos/2059151/pexels-photo-2059151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "Актуальні сезонні рецепти",
      link: ""
    },
  ];

  return (
    <div className="container">
      <div>
        <h1>Смачно.tyt</h1>
        {email != null ? (
          <div className="wrapper-sign">Авторизуйтесь</div>
        ) : (
          <div className="wrapper-content">
            <div className="list">
            {categories.map(item => (<Category key={item.id} name ={item.name}
            description={item.description} img={item.img}></Category>))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
