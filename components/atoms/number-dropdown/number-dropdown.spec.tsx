import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react';

import { darkTheme } from '@latitude55/theme';
import { setTestProperties } from '@latitude55/JestSetTestProps';
import { ToggleProperties } from './toggle.types';
import { Toggle } from '.';

describe(`Toggle`, () => {
  const partialProperties = setTestProperties<ToggleProperties>({
    componentName: 'Toggle',
  });

  it('should do something', () => {
    const properties = partialProperties();

    render(
      <ThemeProvider theme={darkTheme}>
        <Toggle {...properties} />
      </ThemeProvider>
    );

    expect(
      screen.getByText(`Hello, I'm your new Toggle component 👋!`)
    ).toBeInTheDocument();
  });
});
