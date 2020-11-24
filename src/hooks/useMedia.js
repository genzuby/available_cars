import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { BREAK_POINTS } from '../style/constant';

export default function useMedia() {
  const [mediaType, setMediaType] = useState('');

  const isMobile = useMediaQuery({
    query: `(max-width: ${BREAK_POINTS.MOBILE})`,
  });

  const isDeskTop = useMediaQuery({
    query: `(min-device-width: ${BREAK_POINTS.MOBILE})`,
  });

  useEffect(() => {
    setMediaType(() => {
      if (isMobile) {
        return 'mobile';
      } else if (isDeskTop) {
        return 'desktop';
      }
    });
  }, [isMobile, isDeskTop]);

  return [mediaType, setMediaType];
}
