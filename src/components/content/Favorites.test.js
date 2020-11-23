import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Favorites from './Favorites';
import { FavoritesProvider } from '../../contexts/FavoritesContext';
import { Provider } from 'react-redux';
import { store } from '../../testUtil';

beforeEach(() => {
  const history = createMemoryHistory();

  render(
    <Provider store={store}>
      <Router history={history}>
        <FavoritesProvider value={{ favorites: {} }}>
          <Favorites />
        </FavoritesProvider>
      </Router>
    </Provider>
  );
});

it('renders with context value and redux store', () => {
  expect(screen.getByTestId('favorites')).toBeInTheDocument();
});

it('shows favorite item save button', () => {
  expect(screen.getByTestId('favorites')).toHaveTextContent('Save');
});
