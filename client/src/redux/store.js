import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userStore/usersSlice";
import tourReducer from "./tourStore/toursSlice";
import guideReducer from "./guideStore/guidesSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    tour: tourReducer,
    guide: guideReducer,
  },
});
