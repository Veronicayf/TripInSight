import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userStore/userSlice";
import tourReducer from "./tourStore/tourSlice";
import guideReducer from "./guideStore/guideSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    tour: tourReducer,
    guide: guideReducer,
  },
});
