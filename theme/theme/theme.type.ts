type BaseTheme = {
  screen: {
    tabletLandscapeMinimum: string;
    desktopMinimum: string;
  };
};

export type Theme = BaseTheme & {
  name: string;
  background: string;
  colors: {
    primary: string;
    background100: string;
    background200: string;
    background300: string;
    border100: string;
    blue100: string;
    grey100: string;
  };
};

export type WithTheme<T = Record<string, unknown>> = T & { theme: Theme };
