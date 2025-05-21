import { createAsyncThunk } from "@reduxjs/toolkit";
import { AppDispatch, State } from "../types/state.types";
import { AxiosInstance, } from "axios";
import { Offer } from "../types/offers.types";
import { APIRoute, TIMEOUT_SHOW_ERROR } from "../utils/const";
import { currentOfferAction, loadOffersAction, newCommentReviewsBlockAction, offersNearbyListAction, redirectRoute, requireAutorizationAction, reviewsBlockAction, setErrorAction, setOffersDataLoadingStatusAction } from "./action";
import { AppRoute, AuthorizationStatus } from "../constants/constants";
import { dropToken, saveToken } from "../services/token";
import { AuthData, UserData } from "../types/user.types";
import { store } from ".";
import { Review } from "../types/reviews.types";


export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: { api: AxiosInstance };
}>('data/fetchOffers',
  async (_, { dispatch, extra: { api } }) => {
    dispatch(setOffersDataLoadingStatusAction(true))
    const { data } = await api.get<Offer[]>(APIRoute.Offers)
    dispatch(setOffersDataLoadingStatusAction(false))
    dispatch(loadOffersAction(data))
  },
);

export const fetchCurrentOfferAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch,
  state: State,
  extra: { api: AxiosInstance };
}>('data/fetchCurrentOffer',
  async (offerId, { dispatch, extra: { api } }) => {
    try {
      const { data } = await api.get<Offer>(`${APIRoute.Offers}${offerId}/`);
      dispatch(currentOfferAction(data));
    } catch (error) {
      dispatch(setErrorAction('Ошибка загрузки оффера'));
      dispatch(redirectRoute(AppRoute.NotFound))
      throw error;

    }
  }
);

export const fetchReviewsBlockAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch,
  state: State,
  extra: { api: AxiosInstance };
}>('data/fetchReviewsBlock',
  async (offerId, { dispatch, extra: { api } }) => {
    try {
      const { data } = await api.get<Review[]>(`${APIRoute.Comments}${offerId}/`);
      dispatch(reviewsBlockAction(data));
    } catch (error) {

      dispatch(setErrorAction('Ошибка загрузки отзывов'));
      throw error;
    }
  }
);

export const fetchNewCommentReviewsBlockAction = createAsyncThunk<void, { offerId: string, reviewData: { comment: string, rating: number } }, {
  dispatch: AppDispatch,
  state: State,
  extra: { api: AxiosInstance };
}>('data/fetchNewCommentReviewsBlock',
  async ({ offerId, reviewData }, { dispatch, extra: { api } }) => {
    try {
      const { data } = await api.post<Review[]>(`${APIRoute.Comments}${offerId}`, reviewData);
      dispatch(newCommentReviewsBlockAction(data));
    } catch (error) {
      dispatch(setErrorAction('Ошибка отправки отзывова'));
      throw error;
    }
  }
);

export const fetchOffersNearbyListAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch,
  state: State,
  extra: { api: AxiosInstance };
}>('data/fetchOffersNearbyList',
  async (offerId, { dispatch, extra: { api }, }) => {
    try {
      const { data } = await api.get<any[]>(`/offers/${offerId}${APIRoute.Nearby}`);
      dispatch(offersNearbyListAction(data));
    } catch (error) {
      dispatch(setErrorAction('Ошибка загрузки cписока предложений поблизости'));
      throw error;
    }
  }
);


export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: { api: AxiosInstance };
}>('user/checkAuth',
  async (_, { dispatch, extra: { api } }) => {
    try {
      await api.get(APIRoute.Login)
      dispatch(requireAutorizationAction(AuthorizationStatus.Auth))

    } catch (error) {
      await api.get(APIRoute.Logout)
      dispatch(requireAutorizationAction(AuthorizationStatus.NoAuth))
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch,
  state: State,
  extra: { api: AxiosInstance };
}>('user/login',
  async ({ login: email, password }, { dispatch, extra: { api } }) => {
    try {
      const { data: { token } } = await api.post<UserData>(APIRoute.Login, { email, password });
      // const user = await api.post<UserData, AxiosResponse<any>>(APIRoute.Login, { email, password });
      saveToken(token);
      dispatch(requireAutorizationAction(AuthorizationStatus.Auth))
      dispatch(redirectRoute(AppRoute.Main));
    }
    catch {
      dispatch(requireAutorizationAction(AuthorizationStatus.NoAuth));
    }
  }
);

export const logoutAction = createAsyncThunk<void, undefined,
  {
    dispatch: AppDispatch,
    state: State,
    extra: { api: AxiosInstance };
  }
>('user/logout',
  async (_, { dispatch, extra: { api } }) => {
    try {
      await api.delete(APIRoute.Logout)
      dropToken();
      dispatch(requireAutorizationAction(AuthorizationStatus.NoAuth))
    } catch {
      dispatch(requireAutorizationAction(AuthorizationStatus.Auth));
    }
  }
);


export const clearErrorAction = createAsyncThunk('sixCitys/clearError',
  () => { setTimeout(() => store.dispatch(setErrorAction(null)), TIMEOUT_SHOW_ERROR) },
);