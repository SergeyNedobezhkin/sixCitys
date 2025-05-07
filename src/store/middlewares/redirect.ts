import { Middleware, PayloadAction } from "@reduxjs/toolkit";
import browserHistory from "../../BrouserHistory";

export const redirect: Middleware = (_store) => (next) => (action: PayloadAction<string>) => {
  if (action.type === 'app/redirectRoute') {
    browserHistory.push(action.payload)
  }
  return next(action)
}