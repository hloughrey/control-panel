import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react';

import { darkTheme } from '@latitude55/theme';
import { setTestProperties } from '@latitude55/libs';
import { NumberDropdownProperties } from './number-dropdown.types';
import { NumberDropdown } from '.';

describe(`NumberDropdown`, () => {
  const mockOnChange = jest.fn();

  const partialProperties = setTestProperties<NumberDropdownProperties>({
    min: 1,
    max: 10,
    value: undefined,
    ariaLabel: 'number-dropdown',
    onChange: mockOnChange,
  });

  it('should do something', () => {
    const properties = partialProperties();

    render(
      <ThemeProvider theme={darkTheme}>
        <NumberDropdown {...properties} />
      </ThemeProvider>
    );

    expect(
      screen.getByText(`Hello, I'm your new Toggle component 👋!`)
    ).toBeInTheDocument();
  });
});
