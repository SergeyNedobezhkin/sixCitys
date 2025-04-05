import { CityName } from "../utils/const";
import { LocationTypes } from "./location.types";

export type CityTypes = {
  name: CityName;
  location: LocationTypes
  zoom?: number
}

export type Point = {
  title: string
  latitude: number
  longitude: number
  zoom?: number
}
