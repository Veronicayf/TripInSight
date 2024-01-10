import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  forename: "",
  surname: "",
  nationality: "",
  image: "",
  birthDate: "",
  biography: "",
};

export const guideSlice = createSlice({
  name: "guide",
  initialState,
  reducers: {
    addGuide: (state, action) => {
      const { forename, surname, nationality, image, birthDate, biography } =
        action.payload;
      state.forename = forename;
      state.surname = surname;
      state.nationality = nationality;
      state.image = image;
      state.birthDate = birthDate;
      state.biography = biography;
    },
  },
});

export const { addGuide } = guideSlice.actions;

export default guideSlice.reducer;
