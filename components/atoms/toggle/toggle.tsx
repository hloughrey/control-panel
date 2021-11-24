import React, { ReactElement, MouseEvent } from 'react';

import { ToggleProperties } from './toggle.types';
import { StyledInput, StyledLabel, StyledSpan } from './toggle.styled';

export function Toggle({
  ariaLabel,
  onChange,
  checked,
}: ToggleProperties): ReactElement {
  function handleonClick(event: MouseEvent<HTMLInputElement>): void {
    onChange(event.target.dataset.name);
  }

  return (
    <StyledLabel aria-label={ariaLabel || 'Toggle'} onClick={handleonClick}>
      <StyledInput type="checkbox" checked={checked} onChange={console.log} />
      <StyledSpan checked={checked} data-name={ariaLabel} />
    </StyledLabel>
  );
}
