import { createSlice } from "@reduxjs/toolkit";

interface alert {
  id: string;
  desc: string;
}

const initialState: alert[] = [];

const alertSlice = createSlice({
  name: "alerts",
  initialState,
  reducers: {
    add: (state) => {
      let r = (Math.random() + 1).toString(36).substring(7);
      state.push({ id: r, desc: "Added" });
    },
    remove(state, { payload }) {
      return state.filter(({ id }) => id !== payload);
    },
  },
});

export const { add, remove } = alertSlice.actions;

export default alertSlice.reducer;
