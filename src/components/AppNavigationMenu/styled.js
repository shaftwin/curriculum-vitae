import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { VscChromeClose } from 'react-icons/vsc';

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
  top: 10px;
  right: 10px;
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

export const NavigationContainer = styled.div`
  display: ${({ innerWidth }) => (innerWidth > 1024 ? 'none' : 'visible')};
  opacity: ${({ isMenuOpen }) => (isMenuOpen ? 1 : 0)};
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: ${({ isMenuOpen }) => (isMenuOpen ? 11 : -1)};
  background-color: ${({ theme }) => theme.colors.darkBlue};
  cursor: pointer;
  transition: opacity 0.5s ease-in-out, z-index 0.25s ease-in-out;
`;

export const CloseIconContainer = styled.div`
  position: absolute;
  width: 3em;
  height: 3em;
  z-index: 12;
  cursor: pointer;
  top: 15px;
  right: 15px;
`;

export const CustomVscChromeClose = styled(VscChromeClose)`
  width: 3rem;
  height: 3rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.lightGrey};
  transition: color 0.2s ease-in;
  &:hover {
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const NavContainer = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const NavItem = styled.a`
  text-align: center;
  width: 100%;
  display: block;
  font-size: ${({ theme }) => theme.fontSize[18]};
  color: ${({ theme }) => theme.colors.lightGrey};
  line-height: 4rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
  transition: color 0.2s ease-in, background-color 0.2s ease-in;
  &:hover {
    color: ${({ color }) => color};
    background-color: ${({ backgroundColor }) => backgroundColor};
  }
  &:first-child {
    border-top: 1px solid ${({ theme }) => theme.colors.grey};
  }
`;
