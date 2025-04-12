import {
  Route,
  Routes,
} from "react-router-dom";
import MainPage from '../../pages/MainPage/MainPage';
import NotFound from '../../pages/NotFound/NotFound';
import LoginPage from '../../pages/LoginPage/LoginPage';
import FavoritesPage from '../../pages/FavoritesPage/FavoritesPage';
import { AppRoute, AuthorizationStatus } from '../../constants/constants';
import PrivateRoutes from '../PrivateRoutes/PrivateRoutes';
import { HelmetProvider } from 'react-helmet-async';
import { OfferPage } from '../../pages/OfferPage/OfferPage';
import { ReviewsBlock } from '../../types/reviews.types';
import { OffersCity } from '../../types/offersCity.types';
import { CityTypes } from '../../types/city.types';
import { useAppSelector } from "../../store/hook";
import LoaderScreen from "../LoaderScreen/LoaderScreen";
import { BrouserHistory } from '../../BrouserHistory';
import { HistoryRouter } from "../HistoryRoute/HistoryRoute";




interface AppProps {
  reviewsBlock: ReviewsBlock
  offersCity: OffersCity[]
  city: CityTypes
}

function App({ reviewsBlock, offersCity, city, }: AppProps): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.offersReducer.authorizationStatus)
  const isOffersDataLoading = useAppSelector((state) => state.offersReducer.isOffersDataLoading)

  if (authorizationStatus === AuthorizationStatus.Unknown || isOffersDataLoading) {
    return (
      <LoaderScreen />
    )
  }
  return (
    <HelmetProvider>
      <HistoryRouter history={BrouserHistory}>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<MainPage city={city} />}
          />
          <Route
            path={AppRoute.Login}
            element={
              <PrivateRoutes redirectTo={AppRoute.Main} authorizationStatus={AuthorizationStatus.NoAuth}>
                <LoginPage />
              </PrivateRoutes>
            }
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoutes redirectTo={AppRoute.Login} authorizationStatus={AuthorizationStatus.Auth}>
                <FavoritesPage offersCity={offersCity} />
              </PrivateRoutes>
            } />
          <Route path={`${AppRoute.Offer}`} element={<OfferPage reviewsBlock={reviewsBlock} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HistoryRouter>
    </HelmetProvider>

  );
}

export default App;
