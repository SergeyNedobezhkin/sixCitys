import { createAsyncThunk } from "@reduxjs/toolkit";
import { AppDispatch, State } from "../types/state.types";
import { AxiosInstance, } from "axios";
import { Offer } from "../types/offers.types";
import { APIRoute, TIMEOUT_SHOW_ERROR } from "../utils/const";
import { currentOfferAction, loadOffersAction, redirectRoute, requireAutorizationAction, setErrorAction, setOffersDataLoadingStatusAction } from "./action";
import { AppRoute, AuthorizationStatus } from "../constants/constants";
import { dropToken, saveToken } from "../services/token";
import { AuthData, UserData } from "../types/user.types";
import { store } from ".";

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>('data/fetchOffers',
  async (_, { dispatch, extra: api }) => {
    dispatch(setOffersDataLoadingStatusAction(true))
    const { data } = await api.get<Offer[]>(APIRoute.Offers)
    dispatch(setOffersDataLoadingStatusAction(false))
    dispatch(loadOffersAction(data))
  },
);

export const fetchCurrentOfferAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>('data/fetchCurrentOffer',
  async (offerId, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get<Offer>(`${APIRoute.Offers}${offerId}/`);
      dispatch(currentOfferAction(data));
    } catch (error) {
      dispatch(setErrorAction('Ошибка загрузки оффера'));
      throw error;
    }
  }
);


export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>('user/checkAuth',
  async (_, { dispatch, extra: api }) => {
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
  extra: AxiosInstance
}>('user/login',
  async ({ login: email, password }, { dispatch, extra: api }) => {
    try {
      const { data: { token } } = await api.post<UserData>(APIRoute.Login, { email, password });
      // const user = await api.post<UserData, AxiosResponse<any>>(APIRoute.Login, { email, password });
      console.log("loginAction");
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
    extra: AxiosInstance
  }
>('user/logout',
  async (_, { dispatch, extra: api }) => {
    try {
      await api.delete(APIRoute.Logout)
      console.log("loginAction");
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