import React, { ChangeEvent, ReactElement } from 'react';

import { NumberDropdownProperties } from './number-dropdown.types';
import { StyledLabel, StyledSelect } from './number-dropdown.styled';

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
    let options = [];
    for (let i = min; i <= max; i++) {
      options.push(
        <option key={`number-dropdown-option-${i}`} value={i}>
          {i}
        </option>
      );
    }

    return options;
  }

  return (
    <StyledLabel aria-label={ariaLabel || 'number-dropdown'}>
      <StyledSelect
        name={`${ariaLabel}`}
        id={`${ariaLabel}`}
        onChange={handleInputChange}
        value={value}
      >
        <option value={0}>0</option>
        {createOptions()}
      </StyledSelect>
    </StyledLabel>
  );
}
