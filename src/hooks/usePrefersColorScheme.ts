import { ThemeState } from '#src/stores/appStateStore';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';

const usePrefersColorScheme = () => {
  const [preferDarkMode, setPreferDarkMode] = useState(false);
  const themeState = useRecoilValue(ThemeState);

  useEffect(() => {
    // Check if window object is available
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      setPreferDarkMode(mediaQuery.matches);

      const handler = () => setPreferDarkMode(mediaQuery.matches);
      mediaQuery.addEventListener('change', handler);

      // Cleanup function
      return () => mediaQuery.removeEventListener('change', handler);
    }
  }, []);

  const isDarkMode = themeState === '' ? preferDarkMode : themeState === 'dark';

  return { isDarkMode, preferDarkMode };
};

export default usePrefersColorScheme;
