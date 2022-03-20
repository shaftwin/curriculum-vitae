import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/react';
import beforeAfter from 'src/domains/core/styles/beforeAfter/styled';

const showTopText = keyframes`
  0% {
    transform: translate3d(0, 100%, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
  `;

const showBottomText = keyframes`
  0% {
    transform: translate3d(0, -100%, 0);
  }
  50% {
    transform: translate3d(0, -50%, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
`;

export const Container = styled.div`
  position: relative;
  max-width: 415px;
  display: flex;
  flex-direction: column;
  /* Add border with blur effect */
  /* border-radius: 20px 40px; */
  /* box-shadow: 0px 0px 10px 3px ${({ theme }) => theme.colors.lightGrey}; */
  padding: 20px;
`;

export const Divider = styled.div`
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.colors.turquoise};
  margin: 40px 0;
`;

export const TitleContaine = styled(beforeAfter)`
  /* overflow: hidden; */
  &:before {
    content: '<h1>';
    top: ${({ glowing }) => (glowing ? '-1.8rem' : '-1rem')};
    left: -1rem;
  }
  &:after {
    content: '</h1>';
    bottom: ${({ glowing }) => (glowing ? '-2.3rem' : '-1.5rem')};
    left: -1rem;
  }
`;

export const TextsContainer = styled(beforeAfter)`
  /* overflow: hidden; */
  &:before {
    content: '<p>';
    top: -1.75rem;
    left: -1rem;
  }
  &:after {
    content: '</p>';
    bottom: -2.25rem;
    left: -1rem;
  }
`;

export const BasicTitle = styled.h1`
  color: ${({ theme }) => theme.fontColors.secondary};
  font-size: ${({ theme }) => theme.fontSize[70]};
  animation: ${({ spawnAnimation }) =>
    spawnAnimation &&
    css`
      ${showTopText} 1.5s forwards
    `};
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.fontColors.primary};
  font-size: ${({ theme }) => theme.fontSize[16]};
  line-height: 1.5;
  &:not(:last-child) {
    margin-bottom: 1.5rem;
  }
`;

export const TextAnimation = styled.div`
  animation: ${({ spawnAnimation }) =>
    spawnAnimation &&
    css`
      ${showBottomText} 3s forwards
    `};
`;
