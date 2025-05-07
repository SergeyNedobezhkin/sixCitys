import { PayloadAction } from '@reduxjs/toolkit';
import browserHistory from '../BrouserHistory';
import { Middleware } from 'redux';
import { offersReducer } from './reducer';


type Reducer = ReturnType<typeof offersReducer>;

export const redirect: Middleware<unknown, Reducer> =
  () =>
    (next) =>
      (action: PayloadAction<string>) => {
        if (action.type === 'game/redirectToRoute') {
          browserHistory.push(action.payload);
        }

        return next(action);
      };