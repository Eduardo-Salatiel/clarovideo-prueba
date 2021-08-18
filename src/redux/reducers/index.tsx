import { combineReducers } from "redux";
import { modalReducer } from './modalReducer';
import { epgReducer } from './epgReducer';


export const rootReducer = combineReducers({
    modalReducer,
    epgReducer
})