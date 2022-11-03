import { RecipeAction, RecipesEnum, RecipesState } from "./recipes-types";

const initialState: RecipesState = {
    list: [
        {
            id: '232',
        }
    ]
};

export const recipesReducer = (state: RecipesState = initialState, action: RecipeAction) : RecipesState => {
    switch (action.type) {
        case RecipesEnum.CREATE_RECIPE : {
            return {
                ...state,
                list : [...state.list, action.payload]
            }
        }
        case RecipesEnum.REMOVE_RECIPE : {
            const id = action.payload;
            const i = state.list.findIndex((cur) => cur.id === id);
            return {
                ...state,
                list : [...state.list.slice(0, i), ...state.list.slice(i+1)]
            }
        }
        default: return state
    }
}