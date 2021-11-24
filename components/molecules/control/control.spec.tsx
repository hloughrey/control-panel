import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react';

import { darkTheme } from '@latitude55/theme';
import { setTestProperties } from '@latitude55/JestSetTestProps';
import { ControlProperties } from './control.types';
import { Control } from '.';

describe(`Control`, () => {
  const partialProperties = setTestProperties<ControlProperties>({
    componentName: 'Control',
  });

  it('should do something', () => {
    const properties = partialProperties();

    render(
      <ThemeProvider theme={darkTheme}>
        <Control {...properties} />
      </ThemeProvider>
    );

    expect(
      screen.getByText(`Hello, I'm your new Control component 👋!`)
    ).toBeInTheDocument();
  });
});
