import { createSlice } from "@reduxjs/toolkit";

export const tourSlice = createSlice({
  name: "tours",
  initialState: {
    tours: [],
    detail: {},
    searchTours: [],
  },
  reducers: {
    getAllTours: (state, action) => {
      state.tours = [...action.payload];
    },
    getTourById: (state, action) => {
      state.detail = action.payload;
    },
    searchTourByName: (state, action) => {
      state.searchTours = state.tours.filter((t) => t.nameTour.includes(action.payload));
    },

    //Veronica___________________________
    postTour: (state, action) => {
      state.tours = [...state.tours, action.payload];
    }

  },
});

export const { getAllTours, getTourById, searchTourByName, postTour } = tourSlice.actions;
export default tourSlice.reducer;
