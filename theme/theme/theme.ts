import { Theme } from './theme.type';

const baseTheme = {
  screen: {
    tabletLandscapeMinimum: '992px',
    desktopMinimum: '1200px',
  },
};

export const lightTheme: Theme = {
  name: 'Light Theme',
  background: '#ffffff',
  colors: {
    primary: '#000000;',
    border100: '#e8eae9',
    background100: '#f9f9f9',
    background200: '#ebebeb',
    background300: '#dbdbdb',
    blue100: '#688BFA',
    grey100: '#fbfbfb',
  },
  ...baseTheme,
};

export const darkTheme: Theme = {
  name: 'Dark Theme',
  background: '#000000',
  colors: {
    primary: '#F9F9FB',
    background100: '#40413F',
    background200: '#848783',
    background300: '#32332D',
    border100: '#D1D1D1',
    blue100: '#688BFA',
    grey100: '#fbfbfb',
  },
  ...baseTheme,
};
