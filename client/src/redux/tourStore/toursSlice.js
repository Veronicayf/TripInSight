import { createSlice } from "@reduxjs/toolkit";

export const tourSlice = createSlice({
  name: "tours",
  initialState: {
    tours: [],
    detail: {},
  },
  reducers: {
    getAllTours: (state, action) => {
      state.tours = [...action.payload];
    },
    getTourById: (state, action) => {
      state.detail = action.payload;
    }
  },
});

export const { getAllTours, getTourById } = tourSlice.actions;
export default tourSlice.reducer;
