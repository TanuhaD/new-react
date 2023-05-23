import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://so-yummy.onrender.com/api";

export const getRecipes = createAsyncThunk(
  "recipes/get",
  async (token, thunkAPI) => {
    try {
      const { data } = await axios.get("/recipes", {
        headers: { Authorization: `Bearer ${token}` },
      });
      return data.recipes;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
