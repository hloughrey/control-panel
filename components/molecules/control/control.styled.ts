import styled from 'styled-components';

export const StyledOutterContainer = styled.div`
  padding-left: 0;
  margin: 1rem;
`;

export const StyledContainer = styled.div`
  min-width: 40rem;
  background-color: ${({ theme }) => theme.colors.background100};
  padding: 2rem;
  display: flex;
  flex-direction: row;
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.colors.primary};
  align-items: center;
`;

export const StyledName = styled.span`
  text-transform: uppercase;
`;

export const StyledBox = styled.span`
  width: 4rem;
  height: 4rem;
  background-color: ${({ theme }) => theme.colors.background200};
  border-radius: 0.4rem;
  margin-right: 1rem;
  display: inline-block;
`;

export const StyledToggleContainer = styled.div`
  display: flex;
`;

export const StyledNameContainer = styled.div`
  display: flex;
  flex: 2;
  align-items: center;
`;

export const StyledChevron = styled.button`
  margin-left: 2rem;
  background-color: ${({ theme }) => theme.colors.background100};
  border: 0;
  color: ${({ theme }) => theme.colors.primary};
`;

export const StyledSubControl = styled.li`
  list-style: none;
  margin-top: -1rem;
  margin-right: -1rem;
`;
