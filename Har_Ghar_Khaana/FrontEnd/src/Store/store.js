import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import authReducer from "./authSlice";
import foodReducer from "./foodSlice"

export const store = configureStore({
  reducer: {
    cart: cartReducer, // Cart state managed here
    auth: authReducer,
    foods: foodReducer, // Add food reducer
  },
});
