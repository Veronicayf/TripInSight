import { createSlice } from "@reduxjs/toolkit";

const tours =
  localStorage.getItem("tours") !== null
    ? JSON.parse(localStorage.getItem("tours"))
    : [];
const tourdetail =
  localStorage.getItem("tour-detail") !== null
    ? JSON.parse(localStorage.getItem("tour-detail"))
    : {};
const cart =
  localStorage.getItem("cart") !== null
    ? JSON.parse(localStorage.getItem("cart"))
    : [];
const price =
  localStorage.getItem("cart-price") !== null
    ? JSON.parse(localStorage.getItem("cart-price"))
    : 0;

export const tourSlice = createSlice({
  name: "tours",
  initialState: {
    tours: tours,
    toursCopy: [],
    detail: tourdetail,
    searchTours: [],
    sortOrder: "asc",
    addCart: cart,
    cartTotal: price,
    quantityCart: {},
  },
  reducers: {
    getAllTours: (state, action) => {
      state.tours = [...action.payload];
      state.toursCopy = [...action.payload];
      localStorage.setItem(
        "tours",
        JSON.stringify(state.tours.map((tour) => tour))
      );
    },
    getTourById: (state, action) => {
      state.detail = action.payload;
      localStorage.setItem("tour-detail", JSON.stringify(state.detail));
    },
    searchTourByName: (state, action) => {
      state.tours = [...action.payload];
    },
    searchTourByTags: (state, action) => {
      state.tours = [...action.payload];
    },
    filterTourByContinent: (state, action) => {
      if (action.payload === "all") {
        state.tours = [...state.toursCopy];
      } else {
        state.tours = [...action.payload];
      }
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
      localStorage.setItem(
        "cart",
        JSON.stringify(state.addCart.map((item) => item))
      );
    },
    cartTotalReducer: (state, action) => {
      state.cartTotal = action.payload;
      localStorage.setItem("cart-price", JSON.stringify(state.cartTotal));
    },
    removeFromCartReducer: (state, action) => {
      state.addCart = state.addCart.filter(
        (item) => item.id !== action.payload
      );
      localStorage.setItem(
        "cart",
        JSON.stringify(state.addCart.map((item) => item))
      );
    },
    clearCartReducer: (state) => {
      // Clear the cart in the state
      state.addCart = [];
      state.cartTotal = 0;
      state.quantityCart = {};

      // Clear the cart in localStorage
      localStorage.removeItem("cart");
      localStorage.removeItem("cart-price");

      // You may want to add logic here to clear other related data if needed
    },
    cartQuantityReducer: (state, action) => {
      state.quantityCart = action.payload;
    },
    updateTourReducer: (state, action) => {
      state.tours = [...state.tours, action.payload]
    },
    deleteTourReducer: (state, action) => {
      state.tours = [...state.tours]
      console.log('Delete Tour:', action.payload);
    }
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
  removeFromCartReducer,
  clearCartReducer,
  cartQuantityReducer,
  updateTourReducer,
  deleteTourReducer
} = tourSlice.actions;

export default tourSlice.reducer;
