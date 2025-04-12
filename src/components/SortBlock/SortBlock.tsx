import { useState } from 'react'
import { Sort } from '../../constants/constants'
import cn from 'classnames'
import { useAppDispatch, useAppSelector } from '../../store/hook';
import { changeSortCityNameAction } from '../../store/action';


function SortBlock() {
  const dispatch = useAppDispatch();
  const [isOpenSort, setIsOpenSort] = useState(false)
  const currentSort = useAppSelector((state) => state.offersReducer.currentSort);
  const onClickSort = () => setIsOpenSort((prev) => !prev);
  const onChangeSorting = (newSort: Sort) => {
    setIsOpenSort(!isOpenSort)
    dispatch(changeSortCityNameAction(newSort))
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span onClick={onClickSort} className="places__sorting-type" tabIndex={0}>
        {currentSort}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className={`places__options--custom places__options ${isOpenSort && 'places__options--opened'}`}>
        {Object.values(Sort).map((itemSort) => {
          return (
            <li
              key={itemSort}
              tabIndex={0}
              onClick={() => onChangeSorting(itemSort)}
              className={cn('places__option', { 'places__option--active': itemSort === currentSort })}>
              {itemSort}
            </li>
          )
        })}

      </ul>
    </form>
  )
}

export default SortBlock
