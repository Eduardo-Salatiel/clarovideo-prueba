import { combineReducers } from "redux";
import { modalReducer } from './modalReducer';
import { egpReducer } from './egpReducer';


export const rootReducer = combineReducers({
    modalReducer,
    egpReducer
})