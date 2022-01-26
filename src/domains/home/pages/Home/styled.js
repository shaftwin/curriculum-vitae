import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import FloatingCube from 'src/components/FloatingCube';
import TagCloud from 'src/components/TagCloud';

export const Container = styled.div`
  position: relative;
  background-color: #1d1d1d;
  width: ${() => window.innerWidth}px;
  height: ${() => window.innerHeight}px;
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;visibility: visible;
  }
  100% {
    opacity: 0;visibility: hidden;
  }
`;

const bounce = keyframes`
  from {
    transform: translate(-50%, -50%) scale(1);
  }
  50% {
    transform: translate(-50%, -50%) scale(1.1);
  }
  to {
    transform: translate(-50%, -50%) scale(1);
  }
`;

export const CustomFloatingCube = styled(FloatingCube)`
  animation: ${({ displayCube }) =>
    displayCube === 'none'
      ? css`
          ${fadeOut} 1s forwards
        `
      : 'none'};
  position: absolute;
  top: 0;
  left: 0;
`;

export const CustomTagCloud = styled(TagCloud)`
  display: ${({ displayTagCloud }) => displayTagCloud};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;

export const CircleLoader = styled.div`
  position: absolute;
  top: 10%;
  left: 50%;
  width: 100px;
  height: 100px;
  transform: translate(-50%, -50%);
  border-radius: 50px;
  box-shadow: inset 0px 0px 20px 5px white, 0px 0px 20px 5px white;
  z-index: 0;
  /* background-color: black; */
  animation: ${({ dragging }) =>
    dragging
      ? css`
          ${bounce} 3s infinite
        `
      : 'none'};
  backdrop-filter: blur(5px);
`;
