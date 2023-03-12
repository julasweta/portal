import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: null,
 
};

export const clientSlice = createSlice({
  name: "client",
  initialState,
  reducers: {
    setFirstName: (state, action) => {
    state.firstName = action.payload
    },
 
  },
});

export const { setFirstName } = clientSlice.actions;

export default clientSlice.reducer;


