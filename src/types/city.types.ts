import { LocationTypes } from "./location.types";

export enum City {
  Cologne = 'Cologne',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf',
  Brussels = 'Brussels',
  Paris = 'Paris',
  Amsterdam = 'Amsterdam',
}

export type CityTypes = {
  name: City;
  location: LocationTypes
  zoom?: number
}

export type Point = {
  title: string
  latitude: number
  longitude: number
  zoom?: number
}
