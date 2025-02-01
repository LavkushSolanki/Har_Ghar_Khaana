import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {}, // Initialize with an empty object to store cart items
  reducers: {
    addItem: (state, action) => {
      const itemId = action.payload; // Use item ID as the key
      if (state[itemId]) {
        state[itemId] += 1; // Increment quantity if item exists in the cart
      } else {
        state[itemId] = 1; // Add new item with quantity 1
      }
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      if (state[itemId]) {
        state[itemId] -= 1; // Decrement quantity
        if (state[itemId] <= 0) {
          delete state[itemId]; // Remove item from cart if quantity is 0
        }
      }
    },
    clearCart: () => {
      return {}; // Reset the cart
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
