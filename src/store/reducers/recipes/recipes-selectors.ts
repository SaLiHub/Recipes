import { RootState } from "../../store";

export const selectRecipesList = (state: RootState) => state.recipesReducer.list;
export const selectRecipesModalList = (state: RootState) => state.recipesReducer.modalList;
export const selectRecipesFilteredList = (state: RootState) => state.recipesReducer.filteredList;
export const selectRecipesPaginationIndex = (state: RootState) => state.recipesReducer.listItem.paginationIndex;
export const selectRecipesModalState = (state: RootState) => state.recipesReducer.listItem.isModalOpen;
export const selectRecipesListItemIndex = (state: RootState) => state.recipesReducer.listItem.itemIndex;
export const selectRecipesListItem = (state: RootState) => state.recipesReducer.list[selectRecipesListItemIndex(state)];