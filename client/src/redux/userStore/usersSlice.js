import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    userProfile: {}, //detail/profile
  },
  reducers: {
    getAllUsers: (state, action) => {
      state.users = action.payload;
    },
    getUserDetail: (state, action) => {
      state.userProfile = action.payload;
    },
    clearUserDetail: (state) => {
      state.userProfile = {};
    },
    loggedUserReducer: (state, action) => {
      state.users = [...state.users, action.payload]
    }
  },
});

export const { getAllUsers, getUserDetail, clearUserDetail, loggedUserReducer } =
  userSlice.actions;

export default userSlice.reducer;
