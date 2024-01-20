import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const { name, price } = action.payload;
      state.push({ name, price });
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
