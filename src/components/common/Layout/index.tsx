import { ReactNode } from 'react';
import Header from '../Header';
import { Main, Wrapper } from './Layout.styled';
import { HEIGHTS } from '#constants';
import { ScreenSizeState } from '#src/stores/appStateStore';
import { useRecoilValue } from 'recoil';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { isMobile } = useRecoilValue(ScreenSizeState);
  const headerHeight = `calc(100dvh - ${
    isMobile ? HEIGHTS.header.mobile : HEIGHTS.header.desktop
  }}px)`;

  return (
    <Wrapper>
      <Header />
      <Main height={headerHeight}>{children}</Main>
    </Wrapper>
  );
};

export default Layout;
