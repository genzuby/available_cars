import { render } from '@testing-library/react';
import DetailInfo from './DetailInfo';

it('render snapshot', () => {
  const { getByTestId } = render(<DetailInfo />);
  expect(getByTestId('detailInfo')).toMatchSnapshot();
});

it('shows props correctly', () => {
  const { getByTestId } = render(<DetailInfo title={'test'} desc={'desc'} />);
  expect(getByTestId('detailInfo')).toHaveTextContent('test');
  expect(getByTestId('detailInfo')).toHaveTextContent('desc');
});
