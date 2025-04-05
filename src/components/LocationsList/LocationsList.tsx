
import { CityName } from '../../utils/const';
import { LocationItem } from './LocatonItem';



type LocationsListProps = {
  cities: CityName[];
}

export const LocationsList = ({ cities }: LocationsListProps) => {
  return (
    <ul className="locations__list tabs__list">
    { cities.map((cityItem) => <LocationItem key={cityItem} city={cityItem}/>) }
  </ul>
  )
}
  
export default LocationsList