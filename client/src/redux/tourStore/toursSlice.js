import { createSlice } from "@reduxjs/toolkit";

export const tourSlice = createSlice({
  name: "tours",
  initialState: {
    tours: [],
    toursCopy: [],
    detail: {},
    searchTours: [],
  },
  reducers: {
    getAllTours: (state, action) => {
      state.tours = [...action.payload];
      state.toursCopy = [...action.payload];
    },
    getTourById: (state, action) => {
      state.detail = action.payload;
    },
    searchTourByName: (state, action) => {
      state.tours = [...action.payload]
    },
    searchTourByTags: (state, action) => {
      state.tours = [...action.payload]
    },
    filterTourByContinent: (state, action) => {
      state.tours = [...action.payload]
    }
  },
});

export const { getAllTours, getTourById, searchTourByName, searchTourByTags, filterTourByContinent } = tourSlice.actions;
export default tourSlice.reducer;
