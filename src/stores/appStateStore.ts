import { atom } from 'recoil';

export const ThemeState = atom<'light' | 'dark' | ''>({
  key: 'ThemeState',
  default: '',
});

export const ScreenSizeState = atom<{
  width: number;
  height: number;
  isMobile: boolean;
}>({
  key: 'ScreenSizeState',
  default: {
    width: 0,
    height: 0,
    isMobile: true,
  },
});

export const ModalState = atom<{
  id: string | null;
  isOpen: boolean;
}>({
  key: 'ModalState',
  default: {
    id: null,
    isOpen: false,
  },
});
