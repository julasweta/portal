import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories:  [
    {
      id: 1,
      name: "Рецепти",
      img: "https://cdn.stocksnap.io/img-thumbs/960w/sandwich-food_XJGS3LXDXA.jpg",
      description: "Каталог, збірник рецептів",
      link:'recipes',
      subCategories:  [
        {
          id: 1,
          name: "Салати",
          img: "https://cdn.stocksnap.io/img-thumbs/960w/sandwich-food_XJGS3LXDXA.jpg",
          description: "Каталог, збірник рецептів",
          link: "salads",
          posts:""
        },
        {
          id: 2,
          name: "Перші страви",
          img: "https://images.pexels.com/photos/13915954/pexels-photo-13915954.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          description: "Корсині поради, довідники",
          link: "first",
          posts:""
        },
        {
          id: 3,
          name: "Мясні страви",
          img: "https://images.pexels.com/photos/2059151/pexels-photo-2059151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          description: "/meat",
          link: "meat",
          posts:""
        },
        {
          id: 4,
          name: "Випічка",
          img: "https://images.pexels.com/photos/2059151/pexels-photo-2059151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          description: "Актуальні сезонні рецепти",
          link: "cake",
          posts:""
        },
        {
          id: 5,
          name: "Рибні страви",
          img: "https://images.pexels.com/photos/2059151/pexels-photo-2059151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          description: "/fish",
          link: "fish",
          posts:""
        },
      ]
    },
    {
      id: 2,
      name: "Корисне",
      img: "https://images.pexels.com/photos/13915954/pexels-photo-13915954.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "Корсині поради, довідники",
      link:"useful",
      subCategories:  [
        {
          id: 1,
          name: "Таблиця",
          img: "https://cdn.stocksnap.io/img-thumbs/960w/sandwich-food_XJGS3LXDXA.jpg",
          description: "Каталог, збірник рецептів",
          link: "tabl1",
          posts:""
        },
        {
          id: 2,
          name: "Таблиця2",
          img: "https://images.pexels.com/photos/13915954/pexels-photo-13915954.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          description: "Корсині поради, довідники",
          link: "tabl2",
          posts:""
        },
        {
          id: 3,
          name: "Таблиця3",
          img: "https://images.pexels.com/photos/2059151/pexels-photo-2059151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          description: "/meat",
          link: "tabl3",
          posts:""
        },
        {
          id: 4,
          name: "Таблиця4",
          img: "https://images.pexels.com/photos/2059151/pexels-photo-2059151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          description: "Актуальні сезонні рецепти",
          link: "tabl4",
          posts:""
        },
        {
          id: 5,
          name: "Рибні страви",
          img: "https://images.pexels.com/photos/2059151/pexels-photo-2059151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          description: "/fish",
          link: "tabl5",
          posts:""
        },
      ]
    },
    {
      id: 3,
      name: "Сезонні рецепти",
      img: "https://images.pexels.com/photos/2059151/pexels-photo-2059151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "Актуальні сезонні рецепти",
      link: "season",
      subCategories:  [
        {
          id: 1,
          name: "Сезон1",
          img: "https://cdn.stocksnap.io/img-thumbs/960w/sandwich-food_XJGS3LXDXA.jpg",
          description: "Каталог, збірник рецептів",
          link: "saeason2",
          posts:""
        },
        {
          id: 2,
          name: "Сезон2",
          img: "https://images.pexels.com/photos/13915954/pexels-photo-13915954.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          description: "Корсині поради, довідники",
          link: "saeson3",
          posts:""
        },
        {
          id: 3,
          name: "Сезон3",
          img: "https://images.pexels.com/photos/2059151/pexels-photo-2059151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          description: "/meat",
          link: "saeson4t",
          posts:""
        },
       
       
      ]
    },
  ],
 
 
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setFirstName: (state, action) => {
    state.firstName = action.payload
    },
 
  },
});

export const {  } = categoriesSlice.actions;

export default categoriesSlice.reducer;