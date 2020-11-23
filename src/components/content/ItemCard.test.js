import { render, screen, cleanup } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import ItemCard from './ItemCard';
import { FavoritesProvider } from '../../contexts/FavoritesContext';
import { Provider } from 'react-redux';
import { store } from '../../testUtil';

afterEach(cleanup);

beforeEach(() => {
  const history = createMemoryHistory();
  render(
    <Provider store={store}>
      <Router history={history}>
        <FavoritesProvider value={{ favorites: {} }}>
          <ItemCard />
        </FavoritesProvider>
      </Router>
    </Provider>
  );
});

it('renders with context value and router', () => {
  expect(screen.getByTestId('itemCard')).toBeInTheDocument();
});

it('shows cards view button properly', () => {
  expect(screen.getByTestId('itemCard')).toHaveTextContent('View Details');
});
