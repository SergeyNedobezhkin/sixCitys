import { createAction } from "@reduxjs/toolkit";
import { City } from "../types/city.types";

export const chengeCityAction = createAction<City>('main/chengeCity');
export const currentOffers = createAction('main/currentOffers');