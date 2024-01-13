import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    user: {}, //detail/profile
    login: false,
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
    setLogin: (state) => {
      state.login = !state.login;
    },
  },
});

export const { getAllUsers, getUserDetail, clearUserDetail, setLogin } =
  userSlice.actions;

export default userSlice.reducer;
