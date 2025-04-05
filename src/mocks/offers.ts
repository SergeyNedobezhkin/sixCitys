
import { CityTypes,} from "../types/city.types";
import { Offer } from "../types/offers.types";
import { CityName } from "../utils/const";

//Предложения на главном экране
export const offers: Offer[] = [
  {
    'id': '6af6f711-c28d-4121-82cd-e0b462a27f00',
    'title': 'Beautiful & luxurious studio at great location',
    type: 'Apartment',
    'price': 120,
    'city': {
      'name': CityName.Dusseldorf,
      'location': {
        title: CityName.Dusseldorf,
        'latitude': 52.35514938496378,
        'longitude': 4.673877537499948,
        'zoom': 8
      }
    },
    'location':
      [
        {
          title: 'Саундвью',
          latitude: 52.3909553943508,
          longitude: 4.85309666406198,
        }, {
          title: 'Ферри Поинт',
          latitude: 52.3609553943508,
          longitude: 4.85309666406198,
        }, {
          title: 'Бронкс',
          latitude: 52.3909553943508,
          longitude: 4.929309666406198,
        }, {
          title: 'Инвуд-Хилл',
          latitude: 52.3809553943508,
          longitude: 4.939309666406198,
        }
      ],
    'isFavorite': false,
    'isPremium': false,
    'rating': 4,
    'previewImage': 'img/room.jpg',
    description: "A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.",
    bedrooms: 3,
    goods: [
      "Heating"
    ],
    host:
    {
      name: "Oliver Conner",
      avatarUrl: "https://url-to-image/image.png",
      isPro: false
    },
    images:
      [
        "https://url-to-image/image.png"
      ],
    maxAdults: 4
  },
  {
    'id': '10',
    'title': 'Beautiful & luxurious',
    type: 'Apartment',
    'price': 170,
    'city': {
      'name': CityName.Dusseldorf,
      'location': {
        title: CityName.Dusseldorf,
        'latitude': 52.35514938496378,
        'longitude': 4.673877537499948,
        'zoom': 8
      }
    },
    'location':
      [
        {
          title: 'Саундвью',
          latitude: 52.3909553943508,
          longitude: 4.85309666406198,
        }, {
          title: 'Ферри Поинт',
          latitude: 52.3609553943508,
          longitude: 4.85309666406198,
        }, {
          title: 'Бронкс',
          latitude: 52.3909553943508,
          longitude: 4.929309666406198,
        }, {
          title: 'Инвуд-Хилл',
          latitude: 52.3809553943508,
          longitude: 4.939309666406198,
        }
      ],
    'isFavorite': false,
    'isPremium': false,
    'rating':2,
    'previewImage': 'img/apartment-01.jpg',
    description: "A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.",
    bedrooms: 3,
    goods: [
      "Heating"
    ],
    host:
    {
      name: "Oliver Conner",
      avatarUrl: "https://url-to-image/image.png",
      isPro: false
    },
    images:
      [
        "https://url-to-image/image.png"
      ],
    maxAdults: 4
  },
  {
    'id': '11',
    'title': 'Beautiful & luxurious',
    type: 'Apartment',
    'price': 200,
    'city': {
      'name': CityName.Dusseldorf,
      'location': {
        title: CityName.Dusseldorf,
        'latitude': 52.35514938496378,
        'longitude': 4.673877537499948,
        'zoom': 8
      }
    },
    'location':
      [
        {
          title: 'Саундвью',
          latitude: 52.3909553943508,
          longitude: 4.85309666406198,
        }, {
          title: 'Ферри Поинт',
          latitude: 52.3609553943508,
          longitude: 4.85309666406198,
        }, {
          title: 'Бронкс',
          latitude: 52.3909553943508,
          longitude: 4.929309666406198,
        }, {
          title: 'Инвуд-Хилл',
          latitude: 52.3809553943508,
          longitude: 4.939309666406198,
        }
      ],
    'isFavorite': false,
    'isPremium': false,
    'rating':5,
    'previewImage': 'img/apartment-02.jpg',
    description: "A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.",
    bedrooms: 3,
    goods: [
      "Heating"
    ],
    host:
    {
      name: "Oliver Conner",
      avatarUrl: "https://url-to-image/image.png",
      isPro: false
    },
    images:
      [
        "https://url-to-image/image.png"
      ],
    maxAdults: 4
  },
  {
    'id': '14',
    'title': 'Beautiful',
    type: 'House',
    'price': 300,
    'city': {
      'name': CityName.Dusseldorf,
      'location': {
        title: CityName.Dusseldorf,
        'latitude': 52.35514938496378,
        'longitude': 4.673877537499948,
        'zoom': 8
      }
    },
    'location':
      [
        {
          title: 'Саундвью',
          latitude: 52.3909553943508,
          longitude: 4.85309666406198,
        }, {
          title: 'Ферри Поинт',
          latitude: 52.3609553943508,
          longitude: 4.85309666406198,
        }, {
          title: 'Бронкс',
          latitude: 52.3909553943508,
          longitude: 4.929309666406198,
        }, {
          title: 'Инвуд-Хилл',
          latitude: 52.3809553943508,
          longitude: 4.939309666406198,
        }
      ],
    'isFavorite': false,
    'isPremium': false,
    'rating':1,
    'previewImage': 'img/apartment-02.jpg',
    description: "A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.",
    bedrooms: 2,
    goods: [
      "Heating"
    ],
    host:
    {
      name: "Oliver Conner",
      avatarUrl: "https://url-to-image/image.png",
      isPro: false
    },
    images:
      [
        "https://url-to-image/image.png"
      ],
    maxAdults: 5
  },
  {
    'id': '2',
    'title': 'Beautiful & luxurious studio at great location',
    type: 'House',
    'price': 293,
    'city': {
      'name': CityName.Amsterdam,
      'location': {
        title: CityName.Amsterdam,
        'latitude': 52.35514938496378,
        'longitude': 4.673877537499948,
        'zoom': 8
      }
    },
    'location':
      [
        {
          title: 'Саундвью',
          latitude: 52.3909553943508,
          longitude: 4.85309666406198,
        }, {
          title: 'Ферри Поинт',
          latitude: 52.3609553943508,
          longitude: 4.85309666406198,
        }, {
          title: 'Бронкс',
          latitude: 52.3909553943508,
          longitude: 4.929309666406198,
        }, {
          title: 'Инвуд-Хилл',
          latitude: 52.3809553943508,
          longitude: 4.939309666406198,
        },
      ],
    'isFavorite': true,
    'isPremium': true,
    'rating': 2,
    'previewImage': 'img/apartment-01.jpg',
    description: "A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.",
    bedrooms: 3,
    goods: [
      "Heating"
    ],
    host:
    {
      name: "Oliver Conner",
      avatarUrl: "https://url-to-image/image.png",
      isPro: false
    },
    images:
      [
        "https://url-to-image/image.png"
      ],
    maxAdults: 4
  },

  {
    'id': '3',
    'title': 'Beautiful & luxurious studio at great location',
    'type': 'House',
    'price': 100,
    'city': {
      'name': CityName.Paris,
      'location': {
        title: CityName.Paris,
        'latitude': 52.35514938496378,
        'longitude': 4.673877537499948,
        'zoom': 8
      }
    },
    'location':
      [
        {
          title: 'Саундвью',
          latitude: 52.3909553943508,
          longitude: 4.85309666406198,
        }, {
          title: 'Ферри Поинт',
          latitude: 52.3609553943508,
          longitude: 4.85309666406198,
        }, {
          title: 'Бронкс',
          latitude: 52.3909553943508,
          longitude: 4.929309666406198,
        }, {
          title: 'Инвуд-Хилл',
          latitude: 52.3809553943508,
          longitude: 4.939309666406198,
        },
      ],

    'isFavorite': true,
    'isPremium': false,
    'rating': 1,
    'previewImage': 'img/apartment-02.jpg',
    description: "A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.",
    bedrooms: 3,
    goods: [
      "Heating"
    ],
    host:
    {
      name: "Oliver Conner",
      avatarUrl: "https://url-to-image/image.png",
      isPro: false
    },
    images:
      [
        "https://url-to-image/image.png"
      ],
    maxAdults: 4
  },
  {
    'id': '4',
    'title': 'Beautiful & luxurious studio at great location',
    'type': 'House',
    'price': 133,
    'city': {
      'name': CityName.Cologne,
      'location': {
        title: CityName.Cologne,
        'latitude': 52.35514938496378,
        'longitude': 4.673877537499948,
        'zoom': 8
      }
    },
    'location':
      [
        {
          title: 'Саундвью',
          latitude: 52.3909553943508,
          longitude: 4.85309666406198,
        }, {
          title: 'Ферри Поинт',
          latitude: 52.3609553943508,
          longitude: 4.85309666406198,
        }, {
          title: 'Бронкс',
          latitude: 52.3909553943508,
          longitude: 4.929309666406198,
        }, {
          title: 'Инвуд-Хилл',
          latitude: 52.3809553943508,
          longitude: 4.939309666406198,
        },
      ],

    'isFavorite': false,
    'isPremium': true,
    'rating': 0,
    'previewImage': 'img/apartment-03.jpg',
    description: "A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.",
    bedrooms: 3,
    goods: [
      "Heating"
    ],
    host:
    {
      name: "Oliver Conner",
      avatarUrl: "https://url-to-image/image.png",
      isPro: false
    },
    images:
      [
        "https://url-to-image/image.png"
      ],
    maxAdults: 4
  },
]


export const city: CityTypes = {
  'name': CityName.Amsterdam,
  'location': {
    'title': 'Amsterdam',
    'latitude': 52.35514938496378,
    'longitude': 4.673877537499948,
    'zoom': 8
  }
};


