import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userStore/usersSlice";
import tourReducer from "./tourStore/toursSlice";
import guideReducer from "./guideStore/guidesSlice";
import cartReducer from "./cartStore/cartSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    tour: tourReducer,
    guide: guideReducer,
    cart: cartReducer,
  },
});
