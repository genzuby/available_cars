import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Footer from './index';

it('render snapshot', () => {
  const { getByTestId } = render(<Footer />);
  expect(getByTestId('footer')).toMatchSnapshot();
});
