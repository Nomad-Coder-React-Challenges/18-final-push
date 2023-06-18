import { useCallback, useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';

import useDebounce from '#hooks/useDebounce';
import { MOBILE_SCREEN_SIZE } from '#src/constants';
import { ScreenSizeState } from '#src/stores/appStateStore';

const useResponsive = () => {
  const setScreenSize = useSetRecoilState(ScreenSizeState);
  const [windowSize, setWindowSize] = useState<{
    width: number;
    height: number;
  }>({ width: 0, height: 0 });

  const handleResize = useCallback(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  const debouncedWindowSize = useDebounce(windowSize, 30);

  useEffect(() => {
    setScreenSize({
      width: debouncedWindowSize.width,
      height: debouncedWindowSize.height,
      isMobile: debouncedWindowSize.width < MOBILE_SCREEN_SIZE,
    });
  }, [debouncedWindowSize, setScreenSize]);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);
};

export default useResponsive;
