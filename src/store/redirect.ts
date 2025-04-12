import { PayloadAction } from '@reduxjs/toolkit';
import { Middleware } from 'redux';
import { BrouserHistory } from '../BrouserHistory';


export const redirect: Middleware =
  () =>
    (next) =>
      (action: PayloadAction<string>) => {
        if (action.type === 'app/redirectRoute') {
          BrouserHistory.push(action.payload);
        }

        return next(action);
      };