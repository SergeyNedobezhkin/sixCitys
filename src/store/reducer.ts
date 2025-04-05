import { createReducer, } from "@reduxjs/toolkit";
import { CityName } from "../utils/const";
import { changeSortCityNameAction, chengeCityAction,  currentOffersAction } from "./action";
import { OfferPreview } from "../types/offers.types";
import { offers } from "../mocks";
import { Sort } from "../constants/constants";

type InitialStateCity = {
  cityName: string;
  offers: OfferPreview[];
  currentSort:Sort;
}

const initialStateCity:InitialStateCity ={
  cityName: CityName.Paris,
  offers:offers,
  currentSort:Sort.Popular,
}


export const offersReducer  = createReducer(initialStateCity, (builder) => {
  builder
  .addCase(chengeCityAction, (state, { payload }) => {
    state.cityName = payload;
  })
  .addCase(currentOffersAction, (state) => {
    state.offers = offers;
  })
  .addCase(changeSortCityNameAction, (state, {payload}) => {
    console.log(payload);
    
    state.currentSort = payload
  });
 
});