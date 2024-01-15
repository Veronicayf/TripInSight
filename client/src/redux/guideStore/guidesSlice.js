import { createSlice } from "@reduxjs/toolkit";

export const guideSlice = createSlice({
  name: "guides",
  initialState: {
    guides: [],
    detail: {},
  },
  reducers: {
    getAllGuides: (state, action) => {
      state.guides = [...action.payload];
    },
    getGuideById: (state, action) => {
      state.detail = action.payload;
    }
    },
  },
);

export const { getAllGuides, getGuideById } = guideSlice.actions;

export default guideSlice.reducer;
