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
  animation: ${({ displayCube, isMenuOpen, cubeIndex }) => {
    /* Prevent first render to perform animation */
    if (isMenuOpen === undefined) return null;
    /* Prevent useless animation */
    if (isMenuOpen !== prevIsMenuOpen[cubeIndex] || displayCube === 'none') {
      prevIsMenuOpen[cubeIndex] = isMenuOpen;
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
  z-index: 10;
  top: 50px;
  left: 50px;
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
  transition: color 0.2s ease-in;
  color: ${({ theme }) => theme.colors.lightGrey};
  &:hover {
    color: ${({ theme }) => theme.colors.white};
  }
`;

/* Use to perform animation when menu is clicked */
let prevIsMenuOpenCircle = false;

export const CircleLoader = styled.div`
  position: absolute;
  top: 190px;
  left: 78px;
  width: 75px;
  height: 75px;
  transform: translate(-50%, -50%);
  border-radius: 50px;
  box-shadow: inset 0px 0px 5px 4px
      ${({ theme, color }) =>
        color
          ? `rgb(${color[0]}, ${color[1]}, ${color[2]})`
          : theme.colors.lightGrey},
    0px 0px 5px 1px
      ${({ theme, color }) =>
        color
          ? `rgb(${color[0]}, ${color[1]}, ${color[2]})`
          : theme.colors.lightGrey};
  z-index: 0;
  /* Prevent first render to display cubes */
  opacity: ${({ isMenuOpen }) => (isMenuOpen === undefined ? 0 : 1)};
  animation: ${({ dragging, isMenuOpen }) => {
    /* Prevent first render to perform animation */
    if (isMenuOpen === undefined) return null;
    if (isMenuOpen && isMenuOpen !== prevIsMenuOpenCircle) {
      prevIsMenuOpenCircle = isMenuOpen;
      return css`
        ${fadeIn} 1s forwards
      `;
    }
    if (!isMenuOpen && isMenuOpen !== prevIsMenuOpenCircle) {
      prevIsMenuOpenCircle = isMenuOpen;
      return css`
        ${fadeOut} 1s forwards
      `;
    }

    return dragging
      ? css`
          ${bounce} 2s infinite
        `
      : 'none';
  }};
  backdrop-filter: blur(5px);
`;
