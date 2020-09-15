import { createSlice } from "@reduxjs/toolkit";

interface countState {
  count: number;
}
const initialState: countState = {
  count: 0,
};

const countSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    increment: (state: countState) => {
      state.count += 1;
    },
    decrement: (state: countState) => {
      state.count -= 1;
    },
  },
});

export default countSlice.reducer;

export const { increment, decrement } = countSlice.actions;
