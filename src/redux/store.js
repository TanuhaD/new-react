import { configureStore } from "@reduxjs/toolkit";
import { countReducer } from "./Count/countSlice";
import { recipesReducer } from "./RecipesSlice/recipesSlice";

export const store = configureStore({
  reducer: {
    countStore: countReducer,
    recipesStore: recipesReducer,
  },
});
