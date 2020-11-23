import { fireEvent, render, screen } from '@testing-library/react';
import { useContext } from 'react';
import { Provider } from 'react-redux';
import { store } from '../testUtil';
import { DetailInfoContext, DetailInfoProvider } from './DetailInfoContext';

beforeEach(() => {
  function TestComponent() {
    const { detailInfo, fetchDetailInfo } = useContext(DetailInfoContext);
    return (
      <>
        <div data-testid="test-context">{detailInfo.stockNumber}</div>
        <button
          data-testid="test-context-action"
          onClick={() => fetchDetailInfo('10907')}
        >
          get Detail Info
        </button>
      </>
    );
  }

  render(
    <Provider store={store}>
      <DetailInfoProvider>
        <TestComponent />
      </DetailInfoProvider>
    </Provider>
  );
});

it('provides the filter value from context', () => {
  fireEvent.click(screen.getByTestId('test-context-action'));
  expect(screen.getByTestId('test-context')).toHaveTextContent('10907');
});
