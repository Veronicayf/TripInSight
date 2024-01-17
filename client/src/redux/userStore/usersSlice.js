import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    user: {}, //detail/profile
    login: false,
    create: false,
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
    userExisted: (state, action) => {
      state.create = false;
    },
    userCreated: (state, action) => {
      state.create = true;
      state.users = [...action.payload]
    }
  },
});

export const { getAllUsers, getUserDetail, clearUserDetail, setLogin, userExisted, userCreated } =
  userSlice.actions;

export default userSlice.reducer;
