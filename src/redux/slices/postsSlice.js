import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recipes: [],
  activePost: [],
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setResipes: (state, action) => {
      state.recipes = action.payload;
    },
    setActivePost: (state, action) => {
      state.activePost = action.payload;
    },
  },
});

export const { setResipes, setActivePost } = postsSlice.actions;

export default postsSlice.reducer;
