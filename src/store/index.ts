import { combineReducers, createStore } from "redux";
import { recipesReducer } from "./reducers/recipes/recipes-reducer";

const rootReducer = combineReducers({recipesReducer});

export const store = createStore(rootReducer);
