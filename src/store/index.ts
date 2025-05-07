import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { offersReducer, } from "./reducer";
import { createAPI } from "../services/api";
import { redirect } from "./middlewares/redirect";


export const api = createAPI();

const reducer = combineReducers({
  offersReducer: offersReducer,
});

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: { api }
      }
    }).concat(redirect),
});