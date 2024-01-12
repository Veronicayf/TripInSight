import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    forename: "",
    surname: "",
    nationality: "",
    birthDate: "",
    image: "",
    email: "",
    phoneNumber: "",
  },
  isLoading: false,
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      const {
        forename,
        surname,
        nationality,
        image,
        birthDate,
        email,
        phoneNumber,
      } = action.payload;
      state.user.forename = forename;
      state.user.surname = surname;
      state.user.nationality = nationality;
      state.user.image = image;
      state.user.birthDate = birthDate;
      state.user.email = email;
      state.user.phoneNumber = phoneNumber;
    },
    getUserStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    getUserSuccess: (state, action) => {
      const { forename, surname, nationality } = action.payload;
      state.user.forename = forename;
      state.user.surname = surname;
      state.user.nationality = nationality;
      state.isLoading = false;
      state.error = null;
    },
    getUserFailure: (state) => {
      state.isLoading = false;
      state.error = "There was an error while getting the user's info";
    },
  },
});

export const { addUser, getUserStart, getUserFailure, getUserSuccess } =
  userSlice.actions;

export default userSlice.reducer;
