import { render, screen } from '@testing-library/react';
import CarList from './CarList';

beforeEach(() => {
  render(<CarList />);
});

it('renders with context value and redux store', () => {
  expect(screen.getByTestId('carList')).toBeInTheDocument();
});

it('shows car list object', () => {
  expect(screen.getByTestId('carList')).not.toBeNull();
});
