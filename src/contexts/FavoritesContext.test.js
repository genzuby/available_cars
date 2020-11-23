import { fireEvent, render, screen, cleanup } from '@testing-library/react';
import { useContext } from 'react';
import { Provider } from 'react-redux';
import { store, providerValue } from '../testUtil';
import { FavoritesContext, FavoritesProvider } from './FavoritesContext';

afterEach(() => {
  cleanup();
});

beforeEach(() => {
  function TestComponent() {
    const { favorites, addFavorite, deleteFavorite } = useContext(
      FavoritesContext
    );

    return (
      <>
        <div data-testid="test-context">{favorites.stockNumber}</div>
        <button data-testid="test-context-add" onClick={() => addFavorite()}>
          add favorite
        </button>
        <button
          data-testid="test-context-delete"
          onClick={() => deleteFavorite(1)}
        >
          delete favorite
        </button>
      </>
    );
  }

  render(
    <Provider store={store}>
      <FavoritesProvider>
        <TestComponent />
      </FavoritesProvider>
    </Provider>
  );
});

it('provides the filter value from context', () => {
  fireEvent.click(screen.getByTestId('test-context-add'), providerValue);
  expect(localStorage.getItem.mock.calls.length).toBe(1);
  fireEvent.click(screen.getByTestId('test-context-delete'));
  expect(localStorage.getItem.mock.calls.length).toBe(0);
});
