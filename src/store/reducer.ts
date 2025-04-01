import { createReducer, } from "@reduxjs/toolkit";
import { CityName } from "../utils/const";
import { chengeCityAction, currentOffers } from "./action";
import { OfferPreview } from "../types/offers.types";
import { offers } from "../mocks";

type InitialStateCity = {
  cityName: string;
  offers: OfferPreview[];
}

const initialStateCity:InitialStateCity ={
  cityName: CityName.Paris,
  offers:offers
}


export const offersReducer  = createReducer(initialStateCity, (builder) => {
  builder
  .addCase(chengeCityAction, (state, { payload }) => {
    state.cityName = payload;
  })
  .addCase(currentOffers, (state) => {
    state.offers = offers;
  });
 
});