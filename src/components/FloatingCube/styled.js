import styled from '@emotion/styled';

export const Container = styled.div`
  width: 500px;
  height: 500px;
  position: relative;
`;

export const Test = styled.div`
  position: absolute;
  top: ${({ cubeY }) => `${cubeY}px`};
  left: ${({ cubeX }) => `${cubeX}px`};
  touch-action: none;
  user-select: none;
`;
