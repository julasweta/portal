import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: null,
 like:[]
};

export const clientSlice = createSlice({
  name: "client",
  initialState,
  reducers: {
    setFirstName: (state, action) => {
    state.firstName = action.payload
    },
    setLike: (state, action) => {
      state.like.includes(action.payload)?
      state.like = [state.like] : 
      state.like = [...state.like, action.payload]
      
      },
 
  },
});

export const { setFirstName, setLike } = clientSlice.actions;

export default clientSlice.reducer;


