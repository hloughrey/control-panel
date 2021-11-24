import styled, { css } from 'styled-components';
import { WithTheme } from '@latitude55/theme';
import { ToggleProperties } from './toggle.types';

export const StyledLabel = styled.span`
  display: block;
`;

export const StyledInput = styled.input`
  border: 0;
  clip: rect(0 0 0 0);
  height: 0.1rem;
  margin: -0.1rem;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 0.1rem;
  white-space: nowrap;
`;

export const StyledSpan = styled.span<ToggleProperties>`
  box-sizing: initial;
  display: inline-block;
  outline: 0;
  width: 5rem;
  height: 2.5rem;
  position: relative;
  cursor: pointer;
  user-select: none;
  background: ${({ theme }) => theme.colors.background100};
  border-radius: 2rem;
  transition: all 0.4s ease;

  :after {
    left: 0;
    position: relative;
    display: block;
    content: '';
    width: 50%;
    height: 100%;
    border-radius: 2rem;
    background: ${({ theme }) => theme.colors.grey100};
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275),
      padding 0.3s ease, margin 0.3s ease;

    ${setChecked}
  }

  ${setCheckedBackground}
`;

function setChecked({ checked }: WithTheme<ToggleProperties>) {
  return checked
    ? css`
        left: 50%;
      `
    : ``;
}

function setCheckedBackground({ checked }: WithTheme<ToggleProperties>) {
  return checked
    ? css`
        background: ${({ theme }) => theme.colors.blue100};
      `
    : css`
        background: ${({ theme }) => theme.colors.border100};
      `;
}
