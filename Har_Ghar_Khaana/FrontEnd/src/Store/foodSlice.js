import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Define the API endpoint (update this based on your backend URL)
const API_URL = "http://localhost:5000/api/food/list"; // Replace with actual API URL

// Async thunk to fetch food items
export const fetchFoods = createAsyncThunk(
  "foods/fetchFoods",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error("Failed to fetch food items");
      }
      const data = await response.json();
      return data; // Assuming the API returns an array of food items
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const foodSlice = createSlice({
  name: "foods",
  initialState: {
    items: [], // Stores fetched food items
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFoods.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFoods.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchFoods.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default foodSlice.reducer;
