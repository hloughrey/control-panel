import { ThemeProvider } from 'styled-components';
import { PropsWithChildren } from 'react';
import { render } from '@testing-library/react';

import { darkTheme } from '@latitude55/theme';
import Index from '../../pages/index';

function WithThemeProvider({
  children,
}: PropsWithChildren<Record<string, unknown>>) {
  return <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>;
}
describe('Index', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Index />, { wrapper: WithThemeProvider });
    expect(baseElement).toBeTruthy();
  });
});
