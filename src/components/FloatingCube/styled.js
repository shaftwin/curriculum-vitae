import styled from '@emotion/styled';

export const AbsoluteContainer = styled.div`
  position: absolute;
  top: ${({ cubeY }) => `${cubeY}px`};
  left: ${({ cubeX }) => `${cubeX}px`};
  touch-action: none;
  user-select: none;
  cursor: pointer;
`;
