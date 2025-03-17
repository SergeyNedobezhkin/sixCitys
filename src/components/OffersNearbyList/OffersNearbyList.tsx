import { JSX, useState } from 'react';
import {useParams } from 'react-router-dom';
import { OfferPreview } from '../../types/offers.types';

import OfferCard from '../OfferCard/OfferCard';

type OffersNearbyListProps = {
  offers: OfferPreview[]
};

export function OffersNearbyList({ offers }: OffersNearbyListProps): JSX.Element {
  const [activeNearbyCard, setActiveNearbyCard] = useState<OfferPreview['id'] | null>(null);

  function handleCardHover(offerId: OfferPreview['id'] | null) {
    setActiveNearbyCard(offerId);
  }

  return (
    <div className="container">
      <section className="near-places places">
        <h2 className="near-places__title">
          Other places in the neighbourhood
        </h2>
        <div className="near-places__list places__list">
          {offers.map((offer) => <OfferCard block='cities' imageSizeCard="large" onCardHover={handleCardHover} offer={offer} key={offer.id} />)}
        </div>
      </section>
    </div>
  );
}
