import { renderHook } from '@testing-library/react-hooks';
import { Provider } from 'react-redux';
import useInitalLoading from './useInitalLoading';
import { FilterProvider } from '../contexts/FilterContext';
import { store } from '../testUtil';

it('rus initial loading', () => {
  const wrapper = ({ children }) => (
    <FilterProvider>
      <Provider store={store}>{children}</Provider>
    </FilterProvider>
  );
  const { result } = renderHook(() => useInitalLoading(), { wrapper });

  expect(result.current).not.toBeNull();
});
