import { render, screen } from '@testing-library/react';
import DetailMediaView from './DetailMediaView';

const mockAdd = jest.fn();
const mockDelete = jest.fn();

const renderWrapper = ({ prevPath, mediaType, stockId }) => {
  return render(
    <DetailMediaView
      prevPath={prevPath}
      mediaType={mediaType}
      stockId={stockId}
      onClickAdd={mockAdd}
      onClickDelete={mockDelete}
    />
  );
};

it('renders propperly', () => {
  renderWrapper({ prevPath: '/', mediaType: 'desktop', stockId: '10907' });
  expect(screen.getByTestId('detailMediaView')).toBeInTheDocument();
});

it('shows props save button correctly when it is desktop view', () => {
  const { getByTestId } = renderWrapper({
    prevPath: '/',
    mediaType: 'desktop',
    stockId: '10907',
  });
  expect(getByTestId('detailMediaView')).toHaveTextContent('save');
});

it('shows props delete button correctly when it is desktop view on my favorite', () => {
  const { getByTestId } = renderWrapper({
    prevPath: '/favorites',
    mediaType: 'desktop',
    stockId: '10907',
  });
  expect(getByTestId('detailMediaView')).toHaveTextContent('delete');
});

it('not shows props save button correctly when it is mobile view', () => {
  const { getByTestId } = renderWrapper({
    prevPath: '/',
    mediaType: 'mobile',
    stockId: '10907',
  });
  expect(getByTestId('detailMediaView')).not.toHaveTextContent('save');
});

it('not shows props delete button correctly when it is mobile view', () => {
  const { getByTestId } = renderWrapper({
    prevPath: '/',
    mediaType: 'mobile',
    stockId: '10907',
  });
  expect(getByTestId('detailMediaView')).not.toHaveTextContent('delete');
});
