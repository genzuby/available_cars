import { render, screen, cleanup } from '@testing-library/react';
import Header from './index';

afterEach(cleanup);

beforeEach(() => {
  render(<Header />);
});

it('render snapshot', () => {
  expect(screen.getByTestId('header')).toMatchSnapshot();
});

it('shows bootstrap design properly', () => {
  expect(screen.getByTestId('header')).toHaveClass(
    'container-fluid fixed-top d-flex justify-content-between align-items-center'
  );
});

it('goes to Home link', () => {
  expect(screen.getByAltText('Logo').closest('a')).toHaveAttribute('href', '/');
});
