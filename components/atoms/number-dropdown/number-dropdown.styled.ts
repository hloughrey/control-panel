import styled from 'styled-components';

export const StyledLabel = styled.span`
  display: block;
`;

export const StyledSelect = styled.select`
  margin-right: 1rem;
  border-radius: 0.5rem;
  border: none;
  padding: 0.5rem;
  background: ${({ theme }) => theme.colors.background200};
  color: ${({ theme }) => theme.colors.primary};
`;
