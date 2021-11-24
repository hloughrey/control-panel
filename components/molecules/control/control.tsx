import React, { ChangeEvent, Fragment, ReactElement, useState } from 'react';

import { ControlProperties } from './control.types';
import { Toggle } from '@latitude55/components';
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
import { NumberDropdown } from 'components/atoms/number-dropdown';

export function Control({
  name,
  checked,
  additionalInput,
  subOptions,
}: ControlProperties): ReactElement {
  const [displaySuboptions, setDisplaySuboptions] = useState(false);

  function handleSuboptionsDropdownClick() {
    setDisplaySuboptions(!displaySuboptions);
  }

  function handleOnChange(event: ChangeEvent<HTMLInputElement>): void {
    console.log(event);
  }
  function handleAdditionalInputOnChange(
    event: ChangeEvent<HTMLInputElement>
  ): void {
    console.log(event);
  }

  return (
    <StyledOutterContainer as={subOptions ? 'ul' : undefined}>
      <StyledContainer>
        <StyledNameContainer>
          <StyledBox />
          <StyledName>{name}</StyledName>
        </StyledNameContainer>
        <StyledToggleContainer>
          {additionalInput !== undefined ? (
            <NumberDropdown
              {...{
                ...additionalInput,
                ariaLabel: name,
                onChange: handleAdditionalInputOnChange,
              }}
            />
          ) : undefined}
          <Toggle
            ariaLabel={name}
            checked={checked}
            onChange={handleOnChange}
          />
          {subOptions !== undefined ? (
            <StyledChevron onClick={handleSuboptionsDropdownClick}>
              {displaySuboptions ? <>&#9650;</> : <>&#9660;</>}
            </StyledChevron>
          ) : undefined}
        </StyledToggleContainer>
      </StyledContainer>
      {subOptions !== undefined && displaySuboptions
        ? subOptions.map(control => (
            <StyledSubControl key={`${control.name}-control`}>
              <Control {...control} />
            </StyledSubControl>
          ))
        : undefined}
    </StyledOutterContainer>
  );
}
