import { configureStore } from '@reduxjs/toolkit';
import userReducer from "../redux/slices/userSlice";
import clientReducer from "../redux/slices/clientSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    client: clientReducer,
  },
})