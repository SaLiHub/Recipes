import { RecipesEnum } from "./recipes-types";

export const RecipesActionCreators = {
    removeRecipe: (index: number) => {
        return {
            type: RecipesEnum.REMOVE_RECIPE,
            payload: index
        }
    },
    addRecipe: (index: number) => {
        return {
            type: RecipesEnum.ADD_RECIPE,
            payload: index
        }
    },
    removeModalRecipes: () => {
        return {
            type: RecipesEnum.REMOVE_MODAL_RECIPES
        }
    },

    findRecipeByName: (id: string) => {
        return {
            type: RecipesEnum.FIND_RECIPE_BY_NAME,
            payload: id
        }
    }
}