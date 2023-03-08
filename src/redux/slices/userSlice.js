import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: null,
  password: null,
  id: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.email = action.payload;
      state.password = action.payload;
      state.id = action.payload;
    },
    removeUser:(state, action) => { 
         state.email = null;
        state.password = null;
        state.id = null;
      },
  },
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
