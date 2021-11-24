import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledControl = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const StyledHeading = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  text-transform: uppercase;
  font-size: 2rem;
  width: 100%;
`;

export const StyledControlGroup = styled.div`
  background-color: ${({ theme }) => theme.colors.background300};
  margin: 1rem;
`;
