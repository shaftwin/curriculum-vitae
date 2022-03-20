import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Skill from 'src/components/Skill';
import rise from 'src/domains/core/animations/rise/styled';
import beforeAfter from 'src/domains/core/styles/beforeAfter/styled';

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const SkillsContainer = styled(beforeAfter)`
  display: flex;
  flex-direction: column;
  margin-right: 50px;
  animation: ${({ displayModal }) => {
    return (
      displayModal === undefined &&
      css`
        ${rise} 2s forwards
      `
    );
  }};
  &:before {
    content: '<div>';
    top: -2rem;
    left: -1rem;
  }
  &:after {
    content: '</div>';
    bottom: -2.8rem;
    left: -1rem;
  }
`;

export const CustomSkill = styled(Skill)`
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;
