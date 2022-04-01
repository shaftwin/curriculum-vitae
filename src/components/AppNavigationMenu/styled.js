import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { VscChromeClose } from 'react-icons/vsc';
import Language from 'src/components/Language';

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
  transition: color 0.2s ease-in;
  color: ${({ theme }) => theme.colors.lightGrey};
  &:hover {
    color: ${({ theme }) => theme.colors.white};
  }
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
  opacity: ${({ isMenuOpen }) => (isMenuOpen ? 1 : 0)};
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: ${({ isMenuOpen }) => (isMenuOpen ? 11 : -1)};
  background-color: ${({ theme }) => theme.colors.darkBlue};
  transition: opacity 0.5s ease-in-out, z-index 0.3s ease-in-out;
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
  width: 100%;
  cursor: pointer;
  text-align: center;
  display: block;
  font-size: ${({ theme }) => theme.fontSize[18]};
  color: ${({ isCurrentPage, color, theme }) =>
    isCurrentPage ? color : theme.colors.lightGrey};
  line-height: 4rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
  transition: color 0.2s ease-in, background-color 0.2s ease-in;
  background-color: ${({ isCurrentPage, backgroundColor }) =>
    isCurrentPage ? backgroundColor : 'transparent'};
  &:hover {
    color: ${({ color }) => color};
    background-color: ${({ backgroundColor }) => backgroundColor};
  }
  &:first-of-type {
    border-top: 1px solid ${({ theme }) => theme.colors.grey};
  }
`;

export const AbsoluteLanguage = styled(Language)`
  position: absolute;
  bottom: 50px;
  left: 0;
  right: 0;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;
