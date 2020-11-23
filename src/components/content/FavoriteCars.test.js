import { render, screen } from '@testing-library/react';
import FavoriteCars from './FavoriteCars';
import { FavoritesProvider } from '../../contexts/FavoritesContext';
import { Provider } from 'react-redux';
import { store } from '../../testUtil';

beforeEach(() => {
  render(
    <Provider store={store}>
      <FavoritesProvider value={{ favorites: {} }}>
        <FavoriteCars />
      </FavoritesProvider>
    </Provider>
  );
});

it('renders with context value', () => {
  expect(screen.getByTestId('favoriteCars')).toBeInTheDocument();
});

it('gets favorite items', () => {
  expect(screen.getByTestId('favoriteCars')).toHaveTextContent('0 results');
});
