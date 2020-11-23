import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import DropDown from './DropDown';
import { FilterProvider } from '../../contexts/FilterContext';
import { Provider } from 'react-redux';
import { store } from '../../testUtil';

afterEach(cleanup);

beforeEach(() => {
  render(
    <Provider store={store}>
      <FilterProvider>
        <DropDown />
      </FilterProvider>
    </Provider>
  );
});

it('renders with context value and redux store', () => {
  expect(screen.getByTestId('dropdown')).toBeInTheDocument();
});

it('shows filter items', () => {
  expect(screen.getByTestId('dropdown')).toHaveTextContent('Audi');
});

it('toggles list display', () => {
  fireEvent.click(screen.getByTestId('dropdown-button'), {
    displayDropdown: false,
  });
  expect(screen.getByTestId('dropdown-list')).toHaveStyle({ display: 'block' });
});
