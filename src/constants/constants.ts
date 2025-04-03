export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:offerId',
  NotFound = '/not-found-page'
}


export enum AuthorizationStatus {
  NoAuth = "NO_AUTH",
  Auth = "AUTH",
  Unknown = "UNKNOWN",
}

export enum Sort {
  Popular = 'Popular',
  PriceFromLowToHigh = 'Price: low to high',
  PriceFromHighToLow = 'Price: high to low',
  TopRatedFirst = 'Top rated first'
}

