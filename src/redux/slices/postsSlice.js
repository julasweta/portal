import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recipes: [],
  usefuls:[],
  deleted: false,
  activePost: [],
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setResipes: (state, action) => {
      state.recipes = action.payload;
    },
    setUsefuls: (state, action) => {
      state.usefuls = action.payload;
    },
    setDelete: (state, action) => {
   state.deleted = action.payload
    },
    setActivePost: (state, action) => {
      state.activePost = action.payload;
    },
  },
});

export const { setResipes, setUsefuls, etActivePost, setDelete} = postsSlice.actions;

export default postsSlice.reducer;
