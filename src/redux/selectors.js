export const selectCount = (state) => {
  return state.countStore.count;
};

export const selectRecipes = (state) => {
  return state.recipesStore.recipes;
};
