import { createSlice } from "@reduxjs/toolkit";

const tourdetail = localStorage.getItem('tour-detail') !== null ? JSON.parse(localStorage.getItem('tour-detail')) : {};

export const tourSlice = createSlice({
  name: "tours",
  initialState: {
    tours: [],
    toursCopy: [],
    detail: tourdetail,
    searchTours: [],
    sortOrder: "asc",
    addCart: [],
    cartTotal: 0,
  },
  reducers: {
    getAllTours: (state, action) => {
      state.tours = [...action.payload];
      state.toursCopy = [...action.payload];
      //localStorage.setItem('tours', JSON.stringify(state.tours.map(tour => tour)))
    },
    getTourById: (state, action) => {
      state.detail = action.payload;
      localStorage.setItem('tour-detail', JSON.stringify(state.detail))
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
      const multiplier = state.sortOrder === "desc" ? 1 : -1;
      state.tours.sort((a, b) => multiplier * (a.price - b.price));
      state.sortOrder = state.sortOrder === "desc" ? "asc" : "desc";
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
