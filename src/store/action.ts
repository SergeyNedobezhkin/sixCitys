import { createAction } from "@reduxjs/toolkit";

import { AppRoute, AuthorizationStatus, Sort } from "../constants/constants";
import { CityName } from "../utils/const";
import { Offer } from "../types/offers.types";
import { Review } from "../types/reviews.types";

// import { OfferPreview } from "../types/offers.types";

export const chengeCityAction = createAction<CityName>('main/chengeCity');
export const currentOffersAction = createAction<[]>('main/currentOffers');

export const currentOfferAction = createAction<null | Offer>('offer/currentOffer');
export const reviewsBlockAction = createAction<Review[]>('data/reviewsBlock');
export const newCommentReviewsBlockAction = createAction<any>('data/newCommentReviewsBlock');


export const offersNearbyListAction = createAction<any[]>('data/offersNearbyList');

export const changeSortCityNameAction = createAction<Sort>('main/changeSortCityName');
export const loadOffersAction = createAction<Offer[]>('data/loadOffers');
export const requireAutorizationAction = createAction<AuthorizationStatus>('user/requireAutorization')
export const setErrorAction = createAction<string | null>('sixCitys/setErrorAction');
export const setOffersDataLoadingStatusAction = createAction<boolean>('data/setOffersDataLoadingStatusAction');
export const redirectRoute = createAction<AppRoute>('app/redirectRoute');