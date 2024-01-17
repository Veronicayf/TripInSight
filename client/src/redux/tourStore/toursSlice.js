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
    },
    searchTourByName: (state, action) => {
      state.tours = [...action.payload]
    }
  },
});

export const { getAllTours, getTourById, searchTourByName } = tourSlice.actions;
export default tourSlice.reducer;
