import React, { ReactElement } from 'react';

import { ToggleProperties } from './toggle.types';
import { StyledInput, StyledLabel, StyledSpan } from './toggle.styled';

export function Toggle({
  ariaLabel,
  onChange,
  checked = true,
}: ToggleProperties): ReactElement {
  return (
    <StyledLabel aria-label={ariaLabel || 'Toggle'}>
      <StyledInput type="checkbox" checked={checked} onChange={onChange} />
      <StyledSpan {...{ ariaLabel, onChange, checked }} />
    </StyledLabel>
  );
}
