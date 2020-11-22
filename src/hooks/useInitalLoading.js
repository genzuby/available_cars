import { useEffect, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { FilterContext } from '../contexts/FilterContext';
import {
  getColorsList,
  getManufaturersList,
  getAvailableCarList,
} from '../redux/actions';

export default function useInitialLoading() {
  const dispatch = useDispatch();
  const { filter, setFilter } = useContext(FilterContext);

  useEffect(() => {
    if (!filter.page) {
      setFilter({ page: 1 });
      dispatch(getColorsList());
      dispatch(getManufaturersList());
      dispatch(getAvailableCarList({ ...filter }));
    }
  }, []);
}
