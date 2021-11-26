import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const StyledMain = styled.main`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  padding: 1.6rem 1.6rem 4.8rem;
`;

export const StyledHeading = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
`;
