import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDetailInfo } from '../redux/actions';

export const DetailInfoContext = React.createContext();

export function DetailInfoProvider({ children }) {
  const [detailInfo, setDetailInfo] = useState({});
  const carDetailInfo = useSelector(state => state.carDetailInfo);
  const dispatch = useDispatch();

  useEffect(() => {
    setDetailInfo(carDetailInfo);
  }, [carDetailInfo]);

  const fetchDetailInfo = stockNumber => {
    dispatch(getDetailInfo(stockNumber));
  };

  return (
    <DetailInfoContext.Provider value={{ detailInfo, fetchDetailInfo }}>
      {children}
    </DetailInfoContext.Provider>
  );
}
