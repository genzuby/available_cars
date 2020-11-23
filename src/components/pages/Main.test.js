import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Main from './Main';
import { FavoritesProvider } from '../../contexts/FavoritesContext';
import { FilterProvider } from '../../contexts/FilterContext';
import { Provider } from 'react-redux';
import { store } from '../../testUtil';
import {
  getColorsList,
  getManufaturersList,
  getAvailableCarList,
} from '../../redux/actions';

beforeEach(async () => {
  await store.dispatch(getColorsList());
  await store.dispatch(getManufaturersList());
  await store.dispatch(getAvailableCarList({ color: 'red' }));

  render(
    <Provider store={store}>
      <FavoritesProvider value={{ favorites: {} }}>
        <FilterProvider value={{ color: 'red' }}>
          <Main />
        </FilterProvider>
      </FavoritesProvider>
    </Provider>,
    { wrapper: MemoryRouter }
  );
});

it('snapshot', () => {
  expect(screen.getByTestId('main')).toMatchSnapshot();
});

it('renders with context value and redux store', () => {
  expect(screen.getByTestId('main')).toBeInTheDocument();
});
