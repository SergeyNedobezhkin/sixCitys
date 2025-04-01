import { JSX, useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../../components/App/Header/Header';
import { OfferList } from '../../components/OffersList';
import { Offer } from '../../types/offers.types';
import Map from '../../components/Maps/Map/Map';
import { City, CityTypes, } from '../../types/city.types';
import {  useAppSelector } from '../../store/hook';
import { LocationsList } from '../../components/LocationsList';




interface MainPageProps {
    city: CityTypes,
}

function MainPage({  city }: MainPageProps): JSX.Element {
  const [hoveredOfferId, setHoveredOfferId] = useState<Offer['id'] | null>(null);
  const { cityName, offers } = useAppSelector((state) => state.offers);

 const currentOffers = useMemo(() => offers.filter(({ city: { name } }) => name === cityName), [cityName, offers]);

  const handleCardHover = (offerId: Offer['id'] | null) => {
    setHoveredOfferId(offerId);
  };

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>{'6 cities'}</title>
      </Helmet>
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
       <LocationsList cities={Object.values(City)}/>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{currentOffers.length} places to stay in { cityName }</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width={7} height={4}>
                    <use xlinkHref="#icon-arrow-select" />
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li
                    className="places__option places__option--active"
                    tabIndex={0}
                  >
                    Popular
                  </li>
                  <li className="places__option" tabIndex={0}>
                    Price: low to high
                  </li>
                  <li className="places__option" tabIndex={0}>
                    Price: high to low
                  </li>
                  <li className="places__option" tabIndex={0}>
                    Top rated first
                  </li>
                </ul>
              </form>
              <div className="cities__places-list places__list tabs__content">
                <OfferList 
                offers={currentOffers}
                 onCardHover={handleCardHover} 
                 />
              </div>
            </section>
            <div className="cities__right-section">
              <Map
                city={city}
                offers={currentOffers}
                specialOfferId={hoveredOfferId}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;


