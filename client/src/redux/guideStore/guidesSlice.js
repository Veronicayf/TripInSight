import { createSlice } from "@reduxjs/toolkit";

const guidedetail = localStorage.getItem('guide-detail') !== null ? JSON.parse(localStorage.getItem('guide-detail')) : {};


export const guideSlice = createSlice({
  name: "guides",
  initialState: {
    guides: [],
    detail: guidedetail,
  },
  reducers: {
    getAllGuides: (state, action) => {
      state.guides = [...action.payload];
    },
    getGuideById: (state, action) => {
      state.detail = action.payload;
      localStorage.setItem('guide-detail', JSON.stringify(state.detail))

    }
    },
  },
);

export const { getAllGuides, getGuideById } = guideSlice.actions;

export default guideSlice.reducer;
