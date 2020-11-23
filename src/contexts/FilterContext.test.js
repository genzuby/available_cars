import { fireEvent, render, screen } from '@testing-library/react';
import { useContext } from 'react';
import { FilterContext, FilterProvider } from './FilterContext';

beforeEach(() => {
  function TestComponent() {
    const { filter, setFilter } = useContext(FilterContext);
    return (
      <>
        <div data-testid="test-context">{filter.color}</div>
        <button
          data-testid="test-context-action"
          onClick={() => setFilter({ color: 'red' })}
        >
          setFilter
        </button>
      </>
    );
  }

  render(
    <FilterProvider>
      <TestComponent />
    </FilterProvider>
  );
});

it('provides the filter value from context', () => {
  fireEvent.click(screen.getByTestId('test-context-action'));
  expect(screen.getByTestId('test-context')).toHaveTextContent('red');
});
