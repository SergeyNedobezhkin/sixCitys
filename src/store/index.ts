import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { offersReducer, } from "./reducer";


const reducer = combineReducers({
  offers: offersReducer
});

export const store = configureStore({reducer});