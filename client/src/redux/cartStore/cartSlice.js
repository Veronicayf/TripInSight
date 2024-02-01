import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const { name, price, image } = action.payload;
      state.push({ name, price, image });
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
