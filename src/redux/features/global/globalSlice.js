import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  group: 0,
  addBank: false,
};

const stateSlice = createSlice({
  name: "state",
  initialState,
  reducers: {
    setGroup: (state, action) => {
      state.group = action.payload;
    },
    setAddBank: (state, action) => {
      state.addBank = action.payload;
    },
  },
});

export const { setGroup, setAddBank } = stateSlice.actions;

export default stateSlice.reducer;
