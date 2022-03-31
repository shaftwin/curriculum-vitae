import styled from '@emotion/styled';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${({ theme }) => theme.backgroundColors.dark};
  @media screen and (min-width: 1200px) {
    min-height: 680px;
  }
`;
