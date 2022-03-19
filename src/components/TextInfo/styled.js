import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/react';

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
  border-radius: 20px 40px;
  box-shadow: 0px 0px 10px 3px ${({ theme }) => theme.colors.lightGrey};
  padding: 20px;
`;

export const TitleContaine = styled.div`
  overflow: hidden;
  margin-bottom: 10px;
`;

export const TextsContainer = styled.div`
  overflow: hidden;
  padding-top: 10px;
  border-top: 1px solid ${({ theme }) => theme.colors.turquoise};
`;

export const BasicTitle = styled.h2`
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
  font-family: 'Open Sans', cursive;
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
