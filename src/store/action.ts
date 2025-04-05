import { createAction } from "@reduxjs/toolkit";

import { Sort } from "../constants/constants";
import { CityName } from "../utils/const";

export const chengeCityAction = createAction<CityName>('main/chengeCity');
export const currentOffersAction = createAction('main/currentOffers');
export const changeSortCityNameAction = createAction<Sort>('main/changeSortCityName');