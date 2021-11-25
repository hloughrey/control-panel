import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react';

import { darkTheme } from '@latitude55/theme';
import { setTestProperties } from '@latitude55/libs';
import { ControlProperties } from './control.types';
import { Control } from '.';

describe(`Control`, () => {
  const mockOnChange = jest.fn();
  const mockOnChangeAdditionalInputChange = jest.fn();

  const partialProperties = setTestProperties<ControlProperties>({
    name: 'Max Users',
    checked: false,
    additionalInput: {
      min: 1,
      max: 10,
      value: undefined,
    },
    onChange: mockOnChange,
    onChangeAdditionalInputChange: mockOnChangeAdditionalInputChange,
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
