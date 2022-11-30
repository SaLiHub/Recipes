import { RecipeData } from "../../../types";

export enum RecipesEnum {
    ADD_RECIPE = 'ADD_RECIPE',
    REMOVE_RECIPE = 'REMOVE_RECIPE',
    ADD_MODAL_RECIPES = 'ADD_MODAL_RECIPES',
    REMOVE_MODAL_RECIPES = 'REMOVE_MODAL_RECIPES',
    FIND_RECIPE_BY_NAME = 'FIND_RECIPE_BY_NAME',
    PREVIOUS_RECIPE = 'PREVIOUS_RECIPE',
    NEXT_RECIPE = 'NEXT_RECIPE',
    RESET_MODAL_INDEX = 'RESET_MODAL_INDEX',
    OPEN_ITEM_MODAL = 'OPEN_ITEM_MODAL',
    CLOSE_ITEM_MODAL = 'CLOSE_ITEM_MODAL'
}

export interface RecipesState {
    list: RecipeData[];
    modalList: RecipeData[];
    filteredList: RecipeData[];
    listItem: {
        paginationIndex: number;
        itemIndex: number;
        isModalOpen: boolean;
    }
}

export interface AddRecipeAction {
    type: RecipesEnum.ADD_RECIPE;
    payload: number;
}

export interface OpenItemModal {
    type: RecipesEnum.OPEN_ITEM_MODAL;
    payload: number;
}

export interface CloseItemModal {
    type: RecipesEnum.CLOSE_ITEM_MODAL;
}

export interface AddModalRecipesAction {
    type: RecipesEnum.ADD_MODAL_RECIPES;
    payload: RecipeData[];
}

export interface RemoveRecipeAction {
    type: RecipesEnum.REMOVE_RECIPE;
    payload: number;
}

export interface RemoveModalRecipesAction {
    type: RecipesEnum.REMOVE_MODAL_RECIPES;
}

export interface FindRecipeByNameAction {
    type: RecipesEnum.FIND_RECIPE_BY_NAME;
    payload: string;
}

export interface NextRecipe {
    type: RecipesEnum.NEXT_RECIPE;
    payload: number
}

export interface ResetModalIndex {
    type: RecipesEnum.RESET_MODAL_INDEX;
}

export interface PreviousRecipe {
    type: RecipesEnum.PREVIOUS_RECIPE;
}

export type RecipeAction =
    AddRecipeAction
    | RemoveRecipeAction
    | AddModalRecipesAction
    | RemoveModalRecipesAction
    | FindRecipeByNameAction
    | NextRecipe
    | PreviousRecipe
    | ResetModalIndex
    | OpenItemModal
    | CloseItemModal;