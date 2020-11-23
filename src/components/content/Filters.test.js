import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import Filters from './Filters';
import { FilterProvider } from '../../contexts/FilterContext';
import { Provider } from 'react-redux';
import { store } from '../../testUtil';

afterEach(cleanup);

beforeEach(() => {
  render(
    <Provider store={store}>
      <FilterProvider>
        <Filters />
      </FilterProvider>
    </Provider>
  );
});

it('renders with context value and redux store', () => {
  expect(screen.getByTestId('filters')).toBeInTheDocument();
});

it('gets filter items', () => {
  expect(screen.getByTestId('filters')).toHaveTextContent('Audi');
});

it('gets filter items when it is clicked', () => {
  fireEvent.click(screen.getByTestId('filter-button'), {
    displayDropdown: false,
  });
  expect(screen.getByTestId('filters')).not.toBeNull();
});
