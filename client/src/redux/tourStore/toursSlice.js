import { createSlice } from "@reduxjs/toolkit";

export const tourSlice = createSlice({
  name: "tours",
  initialState: {
    tours: [],
    toursCopy: [],
    detail: {},
    searchTours: [],
    sortOrder: "asc",
    addCart: [],
    cartTotal: 0,
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
      state.tours = [...action.payload];
    },
    searchTourByTags: (state, action) => {
      state.tours = [...action.payload];
    },
    filterTourByContinent: (state, action) => {

      if(action.payload === 'all') {state.tours = [...state.toursCopy]
      } else {state.tours = [...action.payload]}
      

    },
    sortToursByPrice: (state) => {
      const multiplier = state.sortOrder === "asc" ? 1 : -1;
      state.tours.sort((a, b) => multiplier * (a.price - b.price));
      state.sortOrder = state.sortOrder === "asc" ? "desc" : "asc";
    },
    postTour: (state, action) => {
      state.tours = [...state.tours, action.payload];
    },
    addTourCartReducer: (state, action) => {
      state.addCart = [...state.addCart, action.payload];
    },
    cartTotalReducer: (state, action) => {
      state.cartTotal = action.payload;
    },
  },
});

export const {
  getAllTours,
  getTourById,
  searchTourByName,
  searchTourByTags,
  filterTourByContinent,
  sortToursByPrice,
  postTour,
  addTourCartReducer,
  cartTotalReducer,
} = tourSlice.actions;

export default tourSlice.reducer;
