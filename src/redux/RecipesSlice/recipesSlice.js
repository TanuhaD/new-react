import { createSlice } from "@reduxjs/toolkit";
import { getRecipes } from "./operations";

const recipesSlice = createSlice({
  name: "recipes",
  initialState: {
    recipes: [],
  },
  extraReducers: {
    [getRecipes.fulfilled](state, action) {
      state.recipes = action.payload;
    },
    [getRecipes.rejected](state, action) {
      console.log(action.payload);
    },
  },
});

export const recipesReducer = recipesSlice.reducer;
