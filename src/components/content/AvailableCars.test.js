import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import AvailableCars from './AvailableCars';
import { FavoritesProvider } from '../../contexts/FavoritesContext';
import { FilterProvider } from '../../contexts/FilterContext';
import { Provider } from 'react-redux';
import { store } from '../../testUtil';
import { getAvailableCarList } from '../../redux/actions';

afterEach(cleanup);

beforeEach(async () => {
  await store.dispatch(getAvailableCarList({ color: 'red' }));
  const history = createMemoryHistory();

  render(
    <Provider store={store}>
      <Router history={history}>
        <FavoritesProvider value={{ favorites: {} }}>
          <FilterProvider>
            <AvailableCars />
          </FilterProvider>
        </FavoritesProvider>
      </Router>
    </Provider>
  );
});

it('renders with context value and redux store', () => {
  expect(screen.getByTestId('availableCarList')).toBeInTheDocument();
});

it('gets available car list', () => {
  expect(screen.getByTestId('availableCarList')).toHaveTextContent(
    'Available carsShowing 10 of 100 resultsDodge'
  );
});

it('acts page button go to First Page', () => {
  fireEvent.click(screen.getByText('First'), { page: 1 });
  expect(screen.getByTestId('pagination-view')).toHaveTextContent(
    'Page 1 of 10'
  );
});

it('acts page button go to Last Page', () => {
  fireEvent.click(screen.getByText('Last'), { page: 10 });
  expect(screen.getByTestId('pagination-view')).toHaveTextContent(
    'Page 10 of 10'
  );
});

// it('acts page button go to previous Page', () => {
//   fireEvent.click(screen.getByText('Previous'), { page: 9 });
//   expect(screen.getByTestId('pagination-view')).toHaveTextContent(8);
// });

// it('acts page button go to next Page', () => {
//   fireEvent.click(screen.getByText('Next'), { page: parseInt('9') });
//   expect(screen.getByTestId('pagination-view')).toHaveTextContent(
//     'Page 10 of 10'
//   );
// });
