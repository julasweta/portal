import { configureStore } from '@reduxjs/toolkit';
import userReducer from "../redux/slices/userSlice";
import clientReducer from "../redux/slices/clientSlice";
import categoriesReducer from "../redux/slices/categoriesSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    client: clientReducer,
    categories: categoriesReducer,
  },
})