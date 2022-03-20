import styled from '@emotion/styled';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  min-width: ${({ theme }) => theme.width.defaultScreen};
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${({ theme }) => theme.backgroundColors.dark};
`;
