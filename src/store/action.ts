import { createAction } from "@reduxjs/toolkit";
import { City } from "../types/city.types";
import { Sort } from "../constants/constants";

export const chengeCityAction = createAction<City>('main/chengeCity');
export const currentOffersAction = createAction('main/currentOffers');
export const changeSortAction = createAction<Sort>('main/changeSort');