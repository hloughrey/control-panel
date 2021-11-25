import { ThemeProvider } from 'styled-components';
import React, { useState } from 'react';
import { AppProps } from 'next/app';

import { GlobalStyles, darkTheme, lightTheme } from '@latitude55/theme';

function CustomApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState('dark');

  function toggleTheme() {
    theme == 'light' ? setTheme('dark') : setTheme('light');
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <button onClick={toggleTheme}>Switch theme</button>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default CustomApp;
