import styled from '@emotion/styled';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${({ theme }) => theme.backgroundColors.dark};
  /*TODO Generate double scroll bar with very small screens  */
  /* min-height: 700px;
  @media screen and (min-height: 700px) {
    min-height: unset;
  } */
`;
