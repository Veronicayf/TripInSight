import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    user: {}, //detail/profile
  },
  reducers: {
    getAllUsers: (state, action) => {
      state.users = action.payload;
    },
    getUserDetail: (state, action) => {
      state.user = action.payload;
    },
    clearUserDetail: (state) => {
      state.user = {};
    },
    loggedUserReducer: (state, action) => {
      state.users = [...state.users, action.payload]
    }
  },
});

export const { getAllUsers, getUserDetail, clearUserDetail, loggedUserReducer } =
  userSlice.actions;

export default userSlice.reducer;
