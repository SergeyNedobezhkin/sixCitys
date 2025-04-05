import { Link } from 'react-router-dom';
import cn from 'classnames';
import { chengeCityAction } from '../../../store/action';
import {  useAppDispatch, useAppSelector } from '../../../store/hook';
import { CityName } from '../../../utils/const';



type LocationItemProps = {
    city: CityName;
}

export const LocationItem = ({ city }: LocationItemProps) => {
  const cityName = useAppSelector((state) => state.offers.cityName);
  const dispatch = useAppDispatch();
  const onClickCity = () => {
      dispatch(chengeCityAction(city))
  };
  

  return (
    <li className="locations__item">
      <Link
        onClick={onClickCity}
        className={cn('locations__item-link tabs__item', {'tabs__item--active': cityName === city})}
        to="#">
        <span>{city}</span>
      </Link>
    </li>
  );
};