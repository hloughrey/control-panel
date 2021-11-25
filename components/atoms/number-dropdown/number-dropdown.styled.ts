import styled from 'styled-components';

export const StyledSelect = styled.select`
  margin-right: 1rem;
  padding: 0.5rem;
  color: ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.background200};
  border: none;
  border-radius: 0.5rem;
`;
