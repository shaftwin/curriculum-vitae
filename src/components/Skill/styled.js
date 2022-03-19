import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/react';

export const Container = styled.div`
  min-width: 415px;
  display: flex;
  flex-direction: column;
`;

export const SkillName = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 7px;
  font-size: ${({ theme }) => theme.fontSize[18]};
`;

export const Progress = styled.div`
  background-color: ${({ theme }) => theme.backgroundColors.grey};
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
  background-color: ${({ color }) => color};
  animation: ${() =>
    css`
      ${growing} 2s forwards
    `};
`;
