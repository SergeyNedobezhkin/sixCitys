import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { offersReducer, } from "./reducer";
import { createAPI } from "../services/api";


export const api = createAPI();

const reducer = combineReducers({
  offersReducer: offersReducer,
});

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api
      }
    }),
});