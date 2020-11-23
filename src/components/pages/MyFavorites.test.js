import { render, screen } from '@testing-library/react';
import MyFavorites from './MyFavorites';
import { FavoritesProvider } from '../../contexts/FavoritesContext';
import { Provider } from 'react-redux';
import { store } from '../../testUtil';

beforeEach(() => {
  render(
    <Provider store={store}>
      <FavoritesProvider value={{ favorites: {} }}>
        <MyFavorites />
      </FavoritesProvider>
    </Provider>
  );
});

it('snapshot', () => {
  expect(screen.getByTestId('myFavorites')).toMatchSnapshot();
});

it('renders with context value', () => {
  expect(screen.getByTestId('myFavorites')).toBeInTheDocument();
});
