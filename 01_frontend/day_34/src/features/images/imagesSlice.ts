import { createSlice } from "@reduxjs/toolkit";

interface image {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

const initialState: image[] = [];

const imagesSlice = createSlice({
  name: "images",
  initialState,
  reducers: {
    add: (state, { payload }) => {
      return payload;
    },
  },
});

export const { add } = imagesSlice.actions;

export default imagesSlice.reducer;
