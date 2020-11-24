import { render } from '@testing-library/react';
import Loading from './Loading';

it('render snapshot', () => {
  const { getByTestId } = render(<Loading />);
  expect(getByTestId('loading')).toMatchSnapshot();
});
