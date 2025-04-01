import { City } from '../../types/city.types';
import { LocationItem } from './LocatonItem';



type LocationsListProps = {
  cities: City[];
}

export const LocationsList = ({ cities }: LocationsListProps) => {
  return (
    <ul className="locations__list tabs__list">
    { cities.map((cityItem) => <LocationItem key={cityItem} city={cityItem}/>) }
  </ul>
  )
}
  
export default LocationsList