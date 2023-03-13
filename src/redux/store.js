import { configureStore } from '@reduxjs/toolkit';
import userReducer from "../redux/slices/userSlice";
import clientReducer from "../redux/slices/clientSlice";
import categoriesReducer from "../redux/slices/categoriesSlice";
import postsReducer from "../redux/slices/postsSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    client: clientReducer,
    categories: categoriesReducer,
    posts: postsReducer,
  },
})