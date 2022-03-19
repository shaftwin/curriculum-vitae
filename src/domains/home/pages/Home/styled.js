import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;
  min-width: ${({ theme }) => theme.width.defaultScreen};
  background-color: ${({ theme }) => theme.backgroundColors.dark};
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  overflow: auto;
  z-index: 0;
`;
