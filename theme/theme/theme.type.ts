export type Theme = {
  name: string;
  background: string;
  colors: {
    primary: string;
    secondary: string;
    background100: string;
    background200: string;
    background300: string;
    border100: string;
    blue100: string;
    grey100: string;
  };
};

export type WithTheme<T = Record<string, unknown>> = T & { theme: Theme };
