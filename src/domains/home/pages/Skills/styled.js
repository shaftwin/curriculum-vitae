import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Skill from 'src/components/Skill';
import rise from 'src/domains/core/animations/rise/styled';
import beforeAfter from 'src/domains/core/styles/beforeAfter/styled';

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  padding: 40px 20px 60px 20px;
`;

export const SkillsContainer = styled(beforeAfter)`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 60px;
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
    top: -1.5rem;
    left: 0rem;
  }
  &:after {
    content: '</div>';
    bottom: -2.2rem;
    left: 0rem;
  }
`;

export const CustomSkill = styled(Skill)`
  margin: 0 20px;
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;
