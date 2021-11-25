import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react';

import { darkTheme } from '@latitude55/theme';
import { setTestProperties } from '@latitude55/libs';
import { ToggleProperties } from './toggle.types';
import { Toggle } from '.';

describe(`Toggle`, () => {
  const mockOnChange = jest.fn();

  const partialProperties = setTestProperties<ToggleProperties>({
    ariaLabel: 'Toggle',
    onChange: mockOnChange,
    checked: false,
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
