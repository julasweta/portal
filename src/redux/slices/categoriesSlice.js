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
          name: "Таблиці",
          img: "https://cdn.stocksnap.io/img-thumbs/960w/sandwich-food_XJGS3LXDXA.jpg",
          description: "Каталог, збірник рецептів",
          link: "tabl1",
          posts:""
        },
        {
          id: 2,
          name: "Поради",
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
          name: "Літо",
          img: "https://cdn.stocksnap.io/img-thumbs/960w/sandwich-food_XJGS3LXDXA.jpg",
          description: "Каталог, збірник рецептів",
          link: "sumer",
          posts:""
        },
        {
          id: 2,
          name: "Осінь",
          img: "https://images.pexels.com/photos/13915954/pexels-photo-13915954.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          description: "Корсині поради, довідники",
          link: "autumn",
          posts:""
        },
        {
          id: 3,
          name: "Весна",
          img: "https://images.pexels.com/photos/2059151/pexels-photo-2059151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          description: "spring",
          link: "spring",
          posts:""
        },
        {
          id: 4,
          name: "Зима",
          img: "https://images.pexels.com/photos/2059151/pexels-photo-2059151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          description: "winter",
          link: "winter",
          posts:""
        },
       
       
      ]
    },
  ],
 
  activeCategories:'recipes',
  activeSubCategories:'salads',
  activeName:'',
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setActiveCategories: (state, action) => {
    state.activeCategories = action.payload
    },
    setActiveSubCategories: (state, action) => {
      state.activeSubCategories = action.payload
      },
      setActiveName: (state, action) => {
        state.activeName = action.payload
        },
  },
});

export const {  setActiveCategories, setActiveSubCategories, setActiveName} = categoriesSlice.actions;

export default categoriesSlice.reducer;