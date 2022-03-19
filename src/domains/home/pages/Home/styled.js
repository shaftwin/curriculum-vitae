import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;
  min-width: ${({ theme }) => theme.width.defaultScreen};
  background-color: ${({ theme }) => theme.backgroundColors.dark};
  width: ${() => window.innerWidth}px;
  height: ${() => window.innerHeight}px;
`;
