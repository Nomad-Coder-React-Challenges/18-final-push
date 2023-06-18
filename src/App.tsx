import Router from '#components/services/Router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import GlobalStyles from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './styles/theme';
import { useMemo } from 'react';
import usePrefersColorScheme from '#hooks/usePrefersColorScheme';
import DarkModeToggle from '#components/blocks/DarkModeToggle';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Layout from '#components/common/Layout';
import useResponsive from '#hooks/useResponsive';
import { BrowserRouter } from 'react-router-dom';
import Modal from '#components/blocks/Modal';
import { useRecoilState } from 'recoil';
import { ModalState } from './stores/appStateStore';
import { AnimatePresence } from 'framer-motion';

export default function App() {
  useResponsive();
  const queryClient = new QueryClient();

  const [modalValue, setModalValue] = useRecoilState(ModalState);
  const { isDarkMode } = usePrefersColorScheme();
  console.log(modalValue);

  const theme = useMemo(() => {
    return isDarkMode ? darkTheme : lightTheme;
  }, [isDarkMode]);

  return (
    <div className='App'>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <BrowserRouter>
            <Modal />
            <Layout>
              <Router />
            </Layout>
          </BrowserRouter>
          <DarkModeToggle />
        </ThemeProvider>
      </QueryClientProvider>
    </div>
  );
}
