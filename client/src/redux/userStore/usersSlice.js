import { createSlice } from "@reduxjs/toolkit";

//const userdetail = localStorage.getItem('user-detail') !== null ? JSON.parse(localStorage.getItem('user-detail')) : {};

export const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    userProfile: {}, //userdetail,  // //detail/profile, userdetail,
    favorites: [],
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
  },
});

export const { getAllUsers, getUserDetail, clearUserDetail, loggedUserReducer, updateUserReducer, addFavReducer, removeFavReducer} =
  userSlice.actions;

export default userSlice.reducer;
