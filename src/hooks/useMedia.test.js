import { renderHook } from '@testing-library/react-hooks';
import useMedia from './useMedia';

it('sets desktop media', () => {
  const { result, rerender } = renderHook(() => useMedia(), {
    initialProps: { isMobile: false, isDeskTop: true },
  });

  rerender({ isMobile: true, isDeskTop: false });

  expect(result.current.isMobile).toBe('desktop');
});
