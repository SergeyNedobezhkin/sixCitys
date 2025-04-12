import OfferCard from '../OfferCard/OfferCard';
import { OfferPreview } from '../../types/offers.types';
import { useAppSelector } from '../../store/hook';
import { Sort } from '../../constants/constants';
import { memo, useMemo } from 'react';



type OfferListProps = {
  currentOffers: OfferPreview[];
  onCardHover: (offerId: OfferPreview['id'] | null) => void
}
export const OfferList = memo(({ currentOffers, onCardHover }: OfferListProps) => {
  const currentSort = useAppSelector((state) => state.offersReducer.currentSort)

  const sortedOffers = useMemo(() => {
    switch (currentSort) {
      case Sort.PriceFromLowToHigh:
        return [...currentOffers].sort((a, b) => a.price - b.price);
      case Sort.PriceFromHighToLow:
        return [...currentOffers].sort((a, b) => b.price - a.price);
      case Sort.TopRatedFirst:
        return [...currentOffers].sort((a, b) => b.rating - a.rating);
      case Sort.Popular:
      default:
        return currentOffers;
    }
  }, [currentSort, currentOffers]);



  return (
    <>
      {sortedOffers.map((offer) => <OfferCard block='cities' imageSizeCard="large" onCardHover={onCardHover} offer={offer} key={offer.id} />)}
    </>
  );
});
