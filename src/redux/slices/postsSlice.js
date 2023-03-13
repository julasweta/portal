import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recipes: [],
 
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setResipes: (state, action) => {
    state.recipes = [...state.recipes, action.payload];
  
    },
 
  },
});

export const { setResipes } = postsSlice.actions;

export default postsSlice.reducer;