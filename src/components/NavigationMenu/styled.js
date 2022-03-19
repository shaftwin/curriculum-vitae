import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import FloatingCube from 'src/components/FloatingCube';

const fadeIn = keyframes`
  0% {
    opacity: 0;
    visibility: hidden;
  }
  100% {
    opacity: 1;
    visibility: visible;
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
    visibility: visible;
  }
  100% {
    opacity: 0;
    visibility: hidden;
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

/* Use to perform animation when menu is clicked */
const prevIsMenuOpen = [false, false, false, false];

export const CustomFloatingCube = styled(FloatingCube)`
  position: absolute;
  top: 0;
  left: 0;
  /* Prevent first render to display cubes */
  opacity: ${({ isMenuOpen }) => (isMenuOpen === undefined ? 0 : 1)};
  /* Should be improved */
  animation: ${({ displayCube, isMenuOpen, cubeType }) => {
    /* Prevent first render to perform animation */
    if (isMenuOpen === undefined) return null;
    /* Prevent useless animation */
    if (isMenuOpen !== prevIsMenuOpen[cubeType] || displayCube === 'none') {
      prevIsMenuOpen[cubeType] = isMenuOpen;
      /* Prevent displaying cube in cicle */
      if (isMenuOpen && displayCube !== 'none') {
        return css`
          ${fadeIn} 1s forwards
        `;
      }
      return css`
        ${fadeOut} 1s forwards
      `;
    }
    return null;
  }};
`;

export const CircleLoader = styled.div`
  position: absolute;
  top: 10%;
  left: 50%;
  width: 100px;
  height: 100px;
  transform: translate(-50%, -50%);
  border-radius: 50px;
  box-shadow: inset 0px 0px 20px 5px ${({ theme }) => theme.colors.white},
    0px 0px 20px 5px ${({ theme }) => theme.colors.white};
  z-index: 0;
  animation: ${({ dragging }) =>
    dragging
      ? css`
          ${bounce} 3s infinite
        `
      : 'none'};
  backdrop-filter: blur(5px);
`;

const spinOn = keyframes`
  100% {
    transform:rotate(90deg); 
  }
`;

const spinOff = keyframes`
  100% {
    transform:rotate(-90deg); 
  }
`;

export const MenuIcon = styled.div`
  width: 3.5rem;
  height: 3.5rem;
  position: absolute;
  top: 50px;
  left: 65px;
  cursor: pointer;
  animation: ${({ isMenuOpen }) => {
    if (isMenuOpen === undefined) return null;
    return isMenuOpen
      ? css`
          ${spinOn} 1s forwards
        `
      : css`
          ${spinOff} 1s forwards
        `;
  }};
`;
