import { ThemeProvider } from 'styled-components';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';

import { darkTheme } from '@latitude55/theme';
import { setTestProperties } from '@latitude55/libs';
import { ControlProperties } from './control.types';
import { Control } from '.';

describe(`Control`, () => {
  const mockOnChange = jest.fn();
  const mockOnChangeAdditionalInputChange = jest.fn();

  const partialProperties = setTestProperties<ControlProperties>({
    name: 'Users',
    checked: false,
    additionalInput: {
      min: 1,
      max: 10,
      value: undefined,
    },
    onChange: mockOnChange,
    onChangeAdditionalInputChange: mockOnChangeAdditionalInputChange,
  });

  it('should render with the correct name', () => {
    const properties = partialProperties();

    render(
      <ThemeProvider theme={darkTheme}>
        <Control {...properties} />
      </ThemeProvider>
    );

    expect(screen.getByText('Users')).toBeInTheDocument();
  });

  it('should render with the correct "Toggle" state', () => {
    const properties = partialProperties();

    render(
      <ThemeProvider theme={darkTheme}>
        <Control {...properties} />
      </ThemeProvider>
    );

    expect(screen.getByRole('checkbox')).not.toBeChecked();
  });

  describe('when control has child controls', () => {
    it('should render with the correct "Toggle" state', () => {
      const properties = partialProperties({
        subOptions: [
          {
            name: 'Users Add',
            checked: false,
          },
          {
            name: 'Users Delete',
            checked: false,
          },
        ],
      });

      render(
        <ThemeProvider theme={darkTheme}>
          <Control {...properties} />
        </ThemeProvider>
      );

      expect(screen.queryByText('Users Add')).not.toBeInTheDocument();
      expect(screen.queryByText('Users Delete')).not.toBeInTheDocument();

      userEvent.click(
        screen.getByRole('button', { name: 'Open Child Controls' })
      );

      expect(screen.getByText('Users Add')).toBeInTheDocument();
      expect(screen.getByText('Users Delete')).toBeInTheDocument();
    });
  });
});
