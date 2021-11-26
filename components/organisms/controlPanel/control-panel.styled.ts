import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const StyledControl = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media screen and (min-width: ${({ theme }) =>
      theme.screen.tabletLandscapeMinimum}) {
    display: grid;
    grid-template-columns: repeat(2, 2fr);
    column-gap: 1rem;
  }

  @media screen and (min-width: ${({ theme }) => theme.screen.desktopMinimum}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const StyledHeading = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 2rem;
  text-transform: uppercase;
`;

export const StyledControlGroup = styled.div`
  width: 100%;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.background300};
`;
