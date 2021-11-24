import { Theme } from './theme.type';

export const lightTheme: Theme = {
  name: 'Light Theme',
  background: '#F9F9FB',
  colors: {
    primary: '#2B2A33;',
    secondary: '#666',
    border100: '#e8eae9',
    background100: '#40413F',
    background200: '#848783',
    background300: '#32332D',
    blue100: '#688BFA',
    grey100: '#fbfbfb',
  },
};

export const darkTheme: Theme = {
  name: 'Dark Theme',
  background: '#000000',
  colors: {
    primary: '#F9F9FB',
    secondary: '#cacaca',
    background100: '#40413F',
    background200: '#848783',
    background300: '#32332D',
    border100: '#D1D1D1',
    blue100: '#688BFA',
    grey100: '#fbfbfb',
  },
};
