import axios, { AxiosError, AxiosInstance, AxiosResponse, } from "axios";
import { getToken } from "./token";
import { StatusCodes } from "http-status-codes";
import { proccessErrorHandle } from "../store/proccess-error-handle";

const BACKEND_URL = 'https://14.design.htmlacademy.pro/six-cities';
const REQUEST_TIMEOUT = 5000;

const StatusCodeMapping: Record<number, boolean> = {
  [StatusCodes.BAD_REQUEST]: true,
  [StatusCodes.UNAUTHORIZED]: true,
  [StatusCodes.NOT_FOUND]: true,
}


const shouldDisplayError = (response: AxiosResponse) => !!StatusCodeMapping[response.status]
export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use(
    (config) => {
      const token = getToken();
      if (token) {
        config.headers = config.headers || {};
        config.headers['x-token'] = token;
      }
      return config;
    }
  );

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError<{ error: string }>) => {
      if (error.response && shouldDisplayError(error.response)) {
        proccessErrorHandle(error.response.data.error);
      }
      throw error
    }
  )

  return api
}