import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:5000/api/cart"; // Backend API URL

// Fetch Cart from Backend
export const fetchCart = createAsyncThunk(
  "cart/fetchCart",
  async (_, { rejectWithValue }) => {
    try {
      const authToken = localStorage.getItem("authToken");
      if (!authToken) throw new Error("User not authenticated");
      const response = await axios.post(
        `${API_URL}/get`,
        {},
        { headers: { authToken } }
      );
      return response.data.cartData || {}; // Ensure an empty object is returned if no cart data
    } catch (error) {
      return rejectWithValue(error.response?.data || "Error fetching cart");
    }
  }
);

// Add item to cart (Backend)
export const addItem = createAsyncThunk(
  "cart/addItem",
  async (itemId, { rejectWithValue, dispatch }) => {
    try {
      const authToken = localStorage.getItem("authToken");

      if (!authToken) throw new Error("User not authenticated");

      const reqt = await axios.post(
        `${API_URL}/add`,
        { itemId },
        { headers: { authToken } }
      );
      dispatch(fetchCart()); // Refresh cart after adding
    } catch (error) {
      return rejectWithValue(error.response?.data || "Error adding item");
    }
  }
);

// Remove item from cart (Backend)
export const removeItem = createAsyncThunk(
  "cart/removeItem",
  async (itemId, { rejectWithValue, dispatch }) => {
    try {
      const authToken = localStorage.getItem("authToken");
      if (!authToken) throw new Error("User not authenticated");

      await axios.post(
        `${API_URL}/remove`,
        { itemId },
        { headers: { authToken } }
      );
      dispatch(fetchCart()); // Refresh cart after removing
    } catch (error) {
      return rejectWithValue(error.response?.data || "Error removing item");
    }
  }
);

// Clear entire cart
export const clearCart = createAsyncThunk(
  "cart/clearCart",
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const authToken = localStorage.getItem("authToken");
      if (!authToken) throw new Error("User not authenticated");

      await axios.post(`${API_URL}/clear`, {}, { headers: { authToken } });
      dispatch(fetchCart()); // Refresh cart after clearing
    } catch (error) {
      return rejectWithValue(error.response?.data || "Error clearing cart");
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: {}, loading: false, error: null },
  reducers: {
    resetCart: (state) => {
      state.items = {}; // Clear cart items on logout
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { resetCart } = cartSlice.actions; // Export reset action

export default cartSlice.reducer;
