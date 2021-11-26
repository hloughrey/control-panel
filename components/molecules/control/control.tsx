import React, { ReactElement, useState } from 'react';
import { Toggle, NumberDropdown } from '@latitude55/components';

import { ControlProperties } from './control.types';
import {
  StyledBox,
  StyledChevron,
  StyledContainer,
  StyledName,
  StyledNameContainer,
  StyledOutterContainer,
  StyledSubControl,
  StyledToggleContainer,
} from './control.styled';

export function Control({
  name,
  checked,
  additionalInput,
  subOptions,
  onChange,
  onChangeAdditionalInputChange,
  child = false,
}: ControlProperties): ReactElement {
  const [displaySuboptions, setDisplaySuboptions] = useState(false);

  function handleSuboptionsDropdownClick() {
    setDisplaySuboptions(!displaySuboptions);
  }

  return (
    <StyledOutterContainer>
      <StyledContainer child={child}>
        <StyledNameContainer>
          <StyledBox />
          <StyledName>{name}</StyledName>
        </StyledNameContainer>
        <StyledToggleContainer>
          {additionalInput !== undefined ? (
            <NumberDropdown
              {...additionalInput}
              ariaLabel={name}
              onChange={onChangeAdditionalInputChange}
            />
          ) : undefined}
          <Toggle ariaLabel={name} checked={checked} onChange={onChange} />
          {subOptions !== undefined ? (
            <StyledChevron
              aria-label={`${
                displaySuboptions ? 'Close' : 'Open'
              } Child Controls`}
              onClick={handleSuboptionsDropdownClick}
            >
              {displaySuboptions ? <>&#9650;</> : <>&#9660;</>}
            </StyledChevron>
          ) : undefined}
        </StyledToggleContainer>
      </StyledContainer>
      {subOptions !== undefined && displaySuboptions
        ? subOptions.map(control => (
            <StyledSubControl key={`${control.name}-control`}>
              <Control
                {...control}
                onChange={onChange}
                onChangeAdditionalInputChange={onChangeAdditionalInputChange}
                child={true}
              />
            </StyledSubControl>
          ))
        : undefined}
    </StyledOutterContainer>
  );
}
