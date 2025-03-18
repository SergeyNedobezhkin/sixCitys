import OfferCard from '../OfferCard/OfferCard';
import { OfferPreview } from '../../types/offers.types';

type OfferListProps = {
  offers: OfferPreview[];
  onCardHover: (offerId: OfferPreview['id'] | null) => void
}
export const OfferList = ({ offers, onCardHover }: OfferListProps) => {

  return (
    <>
      {offers.map((offer) => <OfferCard block='cities' imageSizeCard="large" onCardHover={onCardHover} offer={offer} key={offer.id} />)}
    </>
  );
};
