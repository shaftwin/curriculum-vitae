import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/react';

export const Container = styled.div`
  min-width: 415px;
  display: flex;
  flex-direction: column;
`;

export const SkillName = styled.h2`
  color: #fff;
  margin-bottom: 7px;
  font-size: 18px;
  font-family: 'Hind Madurai', cursive;
`;

export const Progress = styled.div`
  background-color: #373737;
  height: 2px;
`;

const growing = keyframes`
  0% {
    width: 0;
  }
  100% {
    width: ${({ skillLevel }) => `${skillLevel}%`};
  }
`;

export const Level = styled.div`
  height: 100%;
  width: ${({ skillLevel }) => `${skillLevel}%`};
  background-color: ${({ color }) => color || `rgb(255, 34, 83)`};
  animation: ${() =>
    css`
      ${growing} 2s forwards
    `};
`;
