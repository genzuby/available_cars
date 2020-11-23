import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Pagination from './Pagination';
import { FavoritesProvider } from '../../contexts/FavoritesContext';
import { Provider } from 'react-redux';
import { store } from '../../testUtil';

beforeEach(() => {
  const history = createMemoryHistory();

  render(
    <Provider store={store}>
      <Router history={history}>
        <FavoritesProvider value={{ favorites: {} }}>
          <Pagination />
        </FavoritesProvider>
      </Router>
    </Provider>
  );
});

it('renders with context value and router', () => {
  expect(screen.getByTestId('pagination')).toBeInTheDocument();
});

it('shows page button properly', () => {
  expect(screen.getByTestId('pagination')).toHaveTextContent('Last');
});
