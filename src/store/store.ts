import { applyMiddleware, combineReducers, createStore } from "redux";
import { recipesReducer } from "./reducers/recipes/recipes-reducer";
import thunkMiddleware from 'redux-thunk';

const rootReducer = combineReducers({recipesReducer});

export const middlewareEnhancer = applyMiddleware(thunkMiddleware);

export const store = createStore(rootReducer, middlewareEnhancer,);


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
