import { createSlice } from "@reduxjs/toolkit";

// Retrieve token from localStorage
const storedToken = localStorage.getItem("authToken");

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: storedToken ? storedToken : null,
  },
  reducers: {
    login: (state, action) => {
      state.token = action.payload;
      localStorage.setItem("authToken", action.payload); // Store in localStorage
    },
    logout: (state) => {
      state.token = null;
      localStorage.removeItem("authToken"); // Remove from localStorage
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
