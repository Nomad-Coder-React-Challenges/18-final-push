import usePrefersColorScheme from '#hooks/usePrefersColorScheme';
import { useTheme } from 'styled-components';
import { ThemeState } from '#src/stores/appStateStore';
import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { Button, Icons } from './DarkModeToggle.styled';
import { IconMoon, IconSun } from '#components/atoms/svgs';

const DarkModeToggle = () => {
  const theme = useTheme();
  const { preferDarkMode, isDarkMode } = usePrefersColorScheme();
  const [isOn, setIsOn] = useState(preferDarkMode);
  const setThemeState = useSetRecoilState(ThemeState);

  const handleThemeClick = () => {
    setIsOn((prev) => !prev);
    setThemeState(isOn ? 'light' : 'dark');
  };
  return (
    <Button isDarkMode={isDarkMode} onClick={handleThemeClick}>
      <Icons isDarkMode={isDarkMode}>
        <IconSun
          width={28}
          height={28}
          stroke={theme.colors.second[500]}
          fill={theme.colors.second[500]}
        />
      </Icons>
      <Icons isDarkMode={isDarkMode} isDarkIcon>
        <IconMoon
          width={20}
          height={20}
          stroke={theme.colors.primary[100]}
          fill={theme.colors.primary[100]}
        />
      </Icons>
    </Button>
  );
};

export default DarkModeToggle;
