import React, { ChangeEvent, ReactElement } from 'react';

import { NumberDropdownProperties } from './number-dropdown.types';
import { StyledSelect } from './number-dropdown.styled';

export function NumberDropdown({
  min,
  max,
  value,
  ariaLabel,
  onChange,
}: NumberDropdownProperties): ReactElement {
  function handleInputChange(event: ChangeEvent<HTMLSelectElement>): void {
    onChange({ name: event.target.name, value: Number(event.target.value) });
  }

  function createOptions() {
    const options = [];
    for (let index = min; index <= max; index++) {
      options.push(
        <option key={`number-dropdown-option-${index}`} value={index}>
          {index}
        </option>
      );
    }

    return options;
  }

  return (
    <StyledSelect
      aria-label={ariaLabel}
      name={`${ariaLabel}`}
      id={`${ariaLabel}`}
      onChange={handleInputChange}
      value={value}
    >
      <option value={0}>0</option>
      {createOptions()}
    </StyledSelect>
  );
}
