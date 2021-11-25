import React, { ReactElement, MouseEvent } from 'react';

import { ToggleProperties } from './toggle.types';
import { StyledInput, StyledLabel, StyledSpan } from './toggle.styled';

function noOp() {
  return;
}

export function Toggle({
  ariaLabel,
  onChange,
  checked,
}: ToggleProperties): ReactElement {
  function handleonClick(event: MouseEvent<HTMLInputElement>): void {
    onChange(event.target.dataset.name);
  }

  return (
    <StyledLabel aria-label={ariaLabel} onClick={handleonClick}>
      <StyledInput type="checkbox" checked={checked} onChange={noOp} />
      <StyledSpan checked={checked} data-name={ariaLabel} />
    </StyledLabel>
  );
}
