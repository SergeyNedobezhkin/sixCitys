import { OfferPreview } from "../types/offers.types";
import { OffersCity } from "../types/offersCity.types";
import { CityName } from "../utils/const";

export const offersCity: OffersCity[] = [
  {
    'id': '6af6f711-c28d-4121-82cd-e0b462a27f00',
    'title': 'Beautiful & luxurious studio at great location',
    'type': 'Apartment',
    'price': 120,
    'city': {
      'name': CityName.Amsterdam,
      'location': {
        title: CityName.Amsterdam,
        'latitude': 52.35514938496378,
        'longitude': 4.673877537499948,
        'zoom': 8
      }
    },
    'location': {
      'title': 'Саундвью',
      'latitude': 52.3909553943508,
      'longitude': 4.85309666406198,
      'zoom': 8
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4,
    'previewImage': 'img/room.jpg'
  },
  {
    'id': '2',
    'title': 'Beautiful & luxurious',
    'type': 'Room',
    'price': 333,
    'city': {
      'name': CityName.Paris,
      'location': {
        title: CityName.Paris,
        'latitude': 52.35514938496378,
        'longitude': 4.673877537499948,
        'zoom': 8
      }
    },
    'location': {
      'title': 'Саундвью',
      'latitude': 52.3909553943508,
      'longitude': 4.85309666406198,
      'zoom': 8
    },
    'isFavorite': true,
    'isPremium': true,
    'rating': 2,
    'previewImage': 'img/room.jpg'
  },
  {
    'id': '3',
    'title': 'Beautiful & luxurious studio at',
    'type': 'House'
    ,
    'price': 999,
    'city': {
      'name': CityName.Moscow,
      'location': {
        title: CityName.Moscow,
        'latitude': 52.35514938496378,
        'longitude': 4.673877537499948,
        'zoom': 8
      }
    },
    'location': {
      title: 'Саундвью',
      'latitude': 52.3909553943508,
      'longitude': 4.85309666406198,
      'zoom': 8
    },
    'isFavorite': true,
    'isPremium': false,
    'rating': 1,
    'previewImage': 'img/room.jpg'
  },
  {
    'id': '4',
    'title': 'Beautiful & luxurious studio at gr',
    'type': 'Apartment',
    'price': 123,
    'city': {
      'name': CityName.Cologne,
      'location': {
        'title': CityName.Cologne,
        'latitude': 52.35514938496378,
        'longitude': 4.673877537499948,
        'zoom': 8
      }
    },
    'location': {
      title: 'Саундвью',
      'latitude': 52.3909553943508,
      'longitude': 4.85309666406198,
      'zoom': 8
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 0,
    'previewImage': 'img/room.jpg'
  }
];

export type OfferFavorite = OffersCity & Partial<Omit<OfferPreview, keyof OffersCity>>;


