import { createSlice } from "@reduxjs/toolkit";

//const favorites = localStorage.getItem('fav-user') !== null ? JSON.parse(localStorage.getItem('fav-user')) : [];

export const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    userProfile: {},
    favorites: [], //favorites,
    subscribed: null, //newLine
  },

  reducers: {
    getAllUsers: (state, action) => {
      state.users = action.payload;
    },
    getUserDetail: (state, action) => {
      state.userProfile = action.payload;
      //localStorage.setItem('user-detail', JSON.stringify(state.userProfile));
    },
    clearUserDetail: (state) => {
      state.userProfile = {};
    },
    loggedUserReducer: (state, action) => {
      state.userProfile = action.payload;
      state.users = [...state.users, action.payload]
      // console.log('llego???', action.payload);

    },
    updateUserReducer: (state, action) => {
      state.users = [...state.users, action.payload]
    },
    addFavReducer: (state, action) => {
      state.favorites = [...state.favorites, action.payload] //cambiar esto, no se ven los favs, se ve el msg
    },
    removeFavReducer: (state, action) => {
      state.favorites = [...state.favorites],
        console.log('removeFavReducer:', action.payload);
    },
    getAllFavsReducer: (state, action) => {
      state.favorites = [...action.payload];
      //localStorage.setItem("fav-user", JSON.stringify(state.favorites));
    },
    subscribeReducer: (state, action) => { //newLine 
      state.subscribed = action.payload;
    }
  },
});

export const { getAllUsers, getUserDetail, clearUserDetail, loggedUserReducer, updateUserReducer, addFavReducer, removeFavReducer, getAllFavsReducer, subscribeReducer } =
  userSlice.actions;

export default userSlice.reducer;
