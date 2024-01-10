import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import tourReducer from "./tourSlice";
import guideReducer from "./guideSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    tour: tourReducer,
    guide: guideReducer,
  },
});
