import styled from 'styled-components';

export const StyledOutterContainer = styled.div`
  margin: 1rem;
  padding-left: 0;
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  min-width: 40rem;
  padding: 2rem;
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.background100};
  border-radius: 0.5rem;
`;

export const StyledName = styled.span`
  text-transform: uppercase;
`;

export const StyledBox = styled.span`
  display: inline-block;
  width: 4rem;
  height: 4rem;
  margin-right: 1rem;
  background-color: ${({ theme }) => theme.colors.background200};
  border-radius: 0.4rem;
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
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.background100};
  border: 0;
`;

export const StyledSubControl = styled.li`
  margin-top: -1rem;
  margin-right: -1rem;
  list-style: none;
`;
