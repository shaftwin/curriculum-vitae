import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;
  z-index: 2;
`;

export const AbsoluteContainer = styled.div`
  position: absolute;
  top: ${({ cubeY }) => `${cubeY}px`};
  left: ${({ cubeX }) => `${cubeX}px`};
  touch-action: none;
  user-select: none;
`;
