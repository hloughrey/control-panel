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
  width: 100%;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 2rem;
  text-transform: uppercase;
`;

export const StyledControlGroup = styled.div`
  margin: 1rem;
  background-color: ${({ theme }) => theme.colors.background300};
`;
