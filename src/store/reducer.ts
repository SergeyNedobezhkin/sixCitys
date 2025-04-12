import { createReducer, } from "@reduxjs/toolkit";
import { CityName } from "../utils/const";
import { changeSortCityNameAction, chengeCityAction, currentOffersAction, loadOffersAction, requireAutorizationAction, setErrorAction, setOffersDataLoadingStatusAction } from "./action";
// import { OfferPreview } from "../types/offers.types";
// import { offers } from "../mocks";
import { AuthorizationStatus, Sort } from "../constants/constants";
import { Offer } from "../types/offers.types";

type InitialStateType = {
  cityName: string;
  error: string | null;
  offers: [] | Offer[];
  currentSort: Sort;
  authorizationStatus: AuthorizationStatus;
  isOffersDataLoading: boolean;
}

const InitialState: InitialStateType = {
  cityName: CityName.Paris,
  currentSort: Sort.Popular,
  offers: [],
  authorizationStatus: AuthorizationStatus.NoAuth,
  error: null,
  isOffersDataLoading: false,
}


export const offersReducer = createReducer(InitialState, (builder) => {
  builder
    .addCase(chengeCityAction, (state, { payload }) => {
      state.cityName = payload;
    })
    .addCase(currentOffersAction, (state) => {
      state.offers;
    })
    .addCase(changeSortCityNameAction, (state, { payload }) => {
      state.currentSort = payload
    })
    .addCase(loadOffersAction, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setErrorAction, (state, action) => {
      state.error = action.payload
    })
    .addCase(setOffersDataLoadingStatusAction, (state, action) => {
      state.isOffersDataLoading = action.payload
    })
    .addCase(requireAutorizationAction, (state, { payload: authStatus }) => {
      state.authorizationStatus = authStatus;
    });

});