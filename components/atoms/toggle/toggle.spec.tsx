import { ThemeProvider } from 'styled-components';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';

import { darkTheme } from '@latitude55/theme';
import { setTestProperties } from '@latitude55/libs';
import { ToggleProperties } from './toggle.types';
import { Toggle } from '.';

describe(`Toggle`, () => {
  const mockOnChange = jest.fn();

  const partialProperties = setTestProperties<ToggleProperties>({
    ariaLabel: 'My Toggle',
    onChange: mockOnChange,
    checked: false,
  });

  describe('checked status', () => {
    it('should render as not checked', () => {
      const properties = partialProperties();

      render(
        <ThemeProvider theme={darkTheme}>
          <Toggle {...properties} />
        </ThemeProvider>
      );

      expect(screen.getByRole('checkbox')).not.toBeChecked();
    });

    it('should render as checked', () => {
      const properties = partialProperties({ checked: true });

      render(
        <ThemeProvider theme={darkTheme}>
          <Toggle {...properties} />
        </ThemeProvider>
      );

      expect(screen.getByRole('checkbox')).toBeChecked();
    });
  });

  describe('label', () => {
    it('should render with custom label', () => {
      const properties = partialProperties();

      render(
        <ThemeProvider theme={darkTheme}>
          <Toggle {...properties} />
        </ThemeProvider>
      );

      expect(screen.getByLabelText('My Toggle')).toBeInTheDocument();
    });
  });

  describe('on click interaction', () => {
    it('should call "onChange" callback with correct value', () => {
      const properties = partialProperties();

      render(
        <ThemeProvider theme={darkTheme}>
          <Toggle {...properties} />
        </ThemeProvider>
      );

      userEvent.click(screen.getByRole('checkbox'));

      expect(mockOnChange).toHaveBeenCalled();
    });
  });
});
