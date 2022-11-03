import { RecipeData } from "../../../types";

export enum RecipesEnum {
    CREATE_RECIPE = 'CREATE_RECIPE',
    REMOVE_RECIPE = 'REMOVE_RECIPE'
}

export interface RecipesState {
    list: RecipeData[]
}

export interface CreateRecipeAction {
    type: RecipesEnum.CREATE_RECIPE;
    payload: RecipeData;
}

export interface RemoveRecipeAction {
    type: RecipesEnum.REMOVE_RECIPE;
    payload: string;
}

export type RecipeAction = CreateRecipeAction | RemoveRecipeAction;