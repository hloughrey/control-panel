import { ThemeProvider } from 'styled-components';
import userEvent from '@testing-library/user-event';
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
    ariaLabel: 'my-number-dropdown',
    onChange: mockOnChange,
  });

  it('should call "onChange" callback with correct value', () => {
    const properties = partialProperties();

    render(
      <ThemeProvider theme={darkTheme}>
        <NumberDropdown {...properties} />
      </ThemeProvider>
    );

    userEvent.selectOptions(screen.getByLabelText('my-number-dropdown'), ['5']);

    expect(mockOnChange).toHaveBeenCalledWith({
      name: 'my-number-dropdown',
      value: 5,
    });
  });
});
