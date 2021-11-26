import { ThemeProvider } from 'styled-components';
import React from 'react';
import { AppProps } from 'next/app';

import { GlobalStyles, darkTheme } from '@latitude55/theme';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default CustomApp;
