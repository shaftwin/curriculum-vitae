import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Skill from 'src/components/Skill';
import TextInfo from 'src/components/TextInfo';
import rise from 'src/domains/core/animations/rise/styled';
import beforeAfter from 'src/domains/core/styles/beforeAfter/styled';

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  padding: 40px 30px 60px 30px;
  @media screen and (min-width: 1200px) {
    flex-direction: row-reverse;
    justify-content: center;
    align-items: unset;
    padding: 80px 20px 80px 20px;
    @media screen and (min-height: 650px) {
      align-items: center;
      padding: 20px 20px 20px 20px;
    }
  }
`;

export const CustomTextInfo = styled(TextInfo)`
  @media screen and (min-width: 1200px) {
    max-width: 475px;
    min-height: 521px;
    @media screen and (min-height: 650px) {
      min-height: unset;
    }
  }
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
  @media screen and (min-width: 1200px) {
    margin-top: 0px;
    margin-right: 50px;
    max-width: 450px;
    height: 495px;
    @media screen and (min-height: 650px) {
      height: unset;
    }
  }
`;

export const CustomSkill = styled(Skill)`
  margin: 0 20px;
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;
