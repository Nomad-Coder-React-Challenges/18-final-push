import { Theme } from 'styled';

export const lightTheme: Theme = {
  colors: {
    primary: {
      500: '#2196F3',
      400: '#42A5F5',
      300: '#64B5F6',
      200: '#90CAF9',
      100: '#BBDEFB',
    },
    second: {
      500: '#FF5722',
      400: '#FF7043',
      300: '#FF8A65',
      200: '#FFAB91',
      100: '#FFCCBC',
    },
    error: {
      500: '#F44336',
      400: '#EF5350',
      300: '#E57373',
      200: '#EF9A9A',
      100: '#FFCDD2',
    },
    mono: {
      black: '#000000',
      400: '#BDBDBD',
      300: '#E0E0E0',
      200: '#EEEEEE',
      100: '#F5F5F5',
      white: '#FFFFFF',
    },
  },
};

export const darkTheme: Theme = {
  colors: {
    primary: {
      500: '#0D47A1',
      400: '#1565C0',
      300: '#1976D2',
      200: '#1E88E5',
      100: '#42A5F5',
    },
    second: {
      500: '#BF360C',
      400: '#D84315',
      300: '#E64A19',
      200: '#F4511E',
      100: '#FF5722',
    },
    error: {
      500: '#B71C1C',
      400: '#C62828',
      300: '#D32F2F',
      200: '#E53935',
      100: '#F44336',
    },
    mono: {
      black: '#FFFFFF',
      400: '#757575',
      300: '#616161',
      200: '#424242',
      100: '#212121',
      white: '#000000',
    },
  },
};
