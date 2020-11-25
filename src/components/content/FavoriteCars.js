// @flow
import React, { useContext } from 'react';
import type { Node } from 'react';
import { FavoritesContext } from '../../contexts/FavoritesContext';
import CarList from './CarList';
import { LIST_CONTENT } from '../../style/componentStyle';

function FavoriteCars(): Node {
  const { favorites } = useContext(FavoritesContext);

  return (
    <LIST_CONTENT data-testid="favoriteCars">
      <h3 className="--list-title">My Fovorite cars</h3>
      <p className="--list-desc">{favorites.length} results</p>
      <CarList carList={favorites} />
    </LIST_CONTENT>
  );
}

export default FavoriteCars;
