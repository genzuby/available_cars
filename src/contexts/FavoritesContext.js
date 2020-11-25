import React from 'react';
import { useSelector } from 'react-redux';
import useLocalStorage from '../hooks/useLocalStorage';

export const FavoritesContext = React.createContext();

const LOCAL_STOAGE_KEY = 'AUTO1_MY_FAVORITE_CAR';

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useLocalStorage(LOCAL_STOAGE_KEY, []);
  const carDetailInfo = useSelector(state => state.carDetailInfo);

  const addFavorite = () => {
    setFavorites(prevFavorites => {
      let checkDuplication;
      if (prevFavorites !== 0) {
        checkDuplication = prevFavorites.filter(
          item => item.stockNumber === carDetailInfo.stockNumber
        );
      }

      return checkDuplication.length !== 0
        ? prevFavorites
        : [carDetailInfo, ...prevFavorites];
    });
  };

  const deleteFavorite = (stockNumber: string) => {
    setFavorites(prevFavorites => {
      const filteredFavorites = prevFavorites.filter(
        item => item.stockNumber !== +stockNumber
      );

      return filteredFavorites;
    });
  };

  const value = { favorites, addFavorite, deleteFavorite };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}
