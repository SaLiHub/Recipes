import { RecipeAction, RecipesEnum, RecipesState } from "./recipes-types";
import axios from "axios";
import { AppDispatch } from "../../store";
import { RecipeData } from "../../../types";

const stringList = localStorage.getItem('list');

let list: RecipeData[];

if (stringList === null) {
    list = [];
} else {
    list = JSON.parse(stringList)
}


const initialState: RecipesState = {
    list,
    modalList: [],
    filteredList: [],
    listItem: {
        paginationIndex: 0,
        isModalOpen: false,
        itemIndex: 0
    }
}

export const recipesReducer = (state: RecipesState = initialState, action: RecipeAction): RecipesState => {
    switch (action.type) {
        case RecipesEnum.ADD_RECIPE : {
            const index = action.payload;
            const {modalList, list} = state;

            const {name} = modalList[index];
            const recipeExists = list.some(e => e.name === name)

            if (recipeExists) {
                return state
            }

            return {
                ...state,
                list: [modalList[index], ...list],
                filteredList: []
            }
        }

        case RecipesEnum.REMOVE_RECIPE : {
            const id = action.payload;
            const i = state.list.findIndex(recipe => recipe.id === id);
            return {
                ...state,
                list: [...state.list.slice(0, i), ...state.list.slice(i + 1)],
                filteredList: []
            }
        }

        case RecipesEnum.ADD_MODAL_RECIPES : {
            return {
                ...state,
                modalList: action.payload
            }
        }

        case RecipesEnum.REMOVE_MODAL_RECIPES : {
            return {
                ...state,
                modalList: []
            }
        }

        case RecipesEnum.FIND_RECIPE_BY_NAME : {
            const name = action.payload.toLowerCase();
            const newList = state.list.slice().filter((recipe) => recipe.name?.toLowerCase().includes(name));

            return {
                ...state,
                filteredList: newList
            }
        }

        case RecipesEnum.NEXT_RECIPE : {
            const length = action.payload;
            const index = state.listItem.paginationIndex;
            if (index === length - 1) return state;

            return {
                ...state,
                listItem: {
                    ...state.listItem,
                    paginationIndex: index + 1
                }
            }
        }

        case RecipesEnum.PREVIOUS_RECIPE : {
            const index = state.listItem.paginationIndex;
            if (index === 0) return state;
            return {
                ...state,
                listItem: {
                    ...state.listItem,
                    paginationIndex: index - 1
                }
            }
        }

        case RecipesEnum.OPEN_ITEM_MODAL : {
            const index = action.payload;
            return {
                ...state,
                listItem: {
                    ...state.listItem,
                    isModalOpen: true,
                    itemIndex: index
                }
            }
        }

        case RecipesEnum.CLOSE_ITEM_MODAL : {
            return {
                ...state,
                listItem: {
                    ...state.listItem,
                    isModalOpen: false,
                    paginationIndex: 0
                }
            }
        }

        default:
            return state
    }
}

interface FetchData {
    url: string,
    params: {
        [key: string]: string
    }
}

export const fetchModalRecipesData = ({url, params}: FetchData) => {

    return (dispatch: AppDispatch) => {
        const options = {
            method: 'GET',
            url,
            params,
            headers: {
                'X-RapidAPI-Key': '0e62478aa0msh177933e9a7e4471p118192jsn694a55c3dc26',
                'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
            }
        };

        axios.request(options).then((response) => {
            console.log(response.data.results)
            dispatch({type: RecipesEnum.ADD_MODAL_RECIPES, payload: response.data.results})
        });
    }
}
