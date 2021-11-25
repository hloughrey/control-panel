import styled, { css } from 'styled-components';
import { WithTheme } from '@latitude55/theme';
import { ToggleProperties } from './toggle.types';

export const StyledLabel = styled.span`
  display: block;
`;

export const StyledInput = styled.input`
  position: absolute;
  width: 0.1rem;
  height: 0.1rem;
  margin: -0.1rem;
  padding: 0;
  overflow: hidden;
  white-space: nowrap;
  border: 0;
  clip: rect(0 0 0 0);
`;

export const StyledSpan = styled.span`
  position: relative;
  display: inline-block;
  box-sizing: initial;
  width: 5rem;
  height: 2.5rem;
  background: ${({ theme }) => theme.colors.background100};
  border-radius: 2rem;
  outline: 0;
  cursor: pointer;
  transition: all 0.4s ease;
  user-select: none;

  :after {
    position: relative;
    left: 0;
    display: block;
    width: 50%;
    height: 100%;
    background: ${({ theme }) => theme.colors.grey100};
    border-radius: 2rem;
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275),
      padding 0.3s ease, margin 0.3s ease;
    content: '';

    ${setChecked}
  }

  ${setCheckedBackground}
`;

function setChecked({ checked }: WithTheme<Pick<ToggleProperties, 'checked'>>) {
  return checked
    ? css`
        left: 50%;
      `
    : ``;
}

function setCheckedBackground({
  checked,
}: WithTheme<Pick<ToggleProperties, 'checked'>>) {
  return checked
    ? css`
        background: ${({ theme }) => theme.colors.blue100};
      `
    : css`
        background: ${({ theme }) => theme.colors.border100};
      `;
}
