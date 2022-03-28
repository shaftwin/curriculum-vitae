import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/react';
import beforeAfter from 'src/domains/core/styles/beforeAfter/styled';
import Glowing from 'src/components/TextInfo/Glowing';

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

// Mobile First
export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

// Mobile First
export const TitleContaine = styled(beforeAfter)`
  overflow: hidden;
  padding: 20px ${({ glowing }) => (glowing ? '7' : '17')}px;
  &:before {
    content: '<h1>';
    top: ${({ glowing }) => (glowing ? '0rem' : '1rem')};
    left: 0rem;
  }
  &:after {
    content: '</h1>';
    bottom: ${({ glowing }) => (glowing ? '-0.5rem' : '0rem')};
    left: 0rem;
  }
`;

export const GlowingTitle = styled(Glowing)`
  animation: ${({ spawnAnimation }) =>
    spawnAnimation &&
    css`
      ${showTopText} 1.5s forwards
    `};
`;

// Mobile First
export const Divider = styled.div`
  margin: 10px 0 10px 20px;
  border-top: 1px solid ${({ theme }) => theme.colors.turquoise};
`;

export const TextsContainer = styled(beforeAfter)`
  overflow: hidden;
  padding: 20px;
  &:before {
    content: '<p>';
    top: 0rem;
    left: 0rem;
  }
  &:after {
    content: '</p>';
    bottom: -0.5rem;
    left: 0rem;
  }
`;

export const TextAnimation = styled.div`
  animation: ${({ spawnAnimation }) =>
    spawnAnimation &&
    css`
      ${showBottomText} 3s forwards
    `};
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
