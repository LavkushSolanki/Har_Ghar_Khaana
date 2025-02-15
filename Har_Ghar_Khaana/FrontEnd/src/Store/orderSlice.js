import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orderDetails: {
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  },
  cartItems: {},
  totalCost: 0,
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    updateOrderDetails: (state, action) => {
      state.orderDetails = { ...state.orderDetails, ...action.payload };
    },
    setCartItems: (state, action) => {
      state.cartItems = action.payload;
    },
    setTotalCost: (state, action) => {
      state.totalCost = action.payload;
    },
    clearOrder: (state) => {
      state.orderDetails = initialState.orderDetails;
      state.cartItems = {};
      state.totalCost = 0;
    },
  },
});

export const { updateOrderDetails, setCartItems, setTotalCost, clearOrder } =
  orderSlice.actions;
export default orderSlice.reducer;
