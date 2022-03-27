import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import rise from 'src/domains/core/animations/rise/styled';
import JobCard from 'src/domains/home/pages/Jobs/JobCard';

export const Container = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 40px 20px 60px 20px;
  overflow: auto;
  @media screen and (min-width: 1350px) {
    justify-content: center;
    padding: 20px 20px 20px 20px;
  }
`;

export const Grid = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 1350px) {
    min-width: 1350px;
    height: 100%;
    flex-direction: row;
  }
`;

export const ColumnContainer = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  min-width: 300px;
  margin-top: 20px;
  max-width: 500px;
  @media screen and (min-width: 1350px) {
    width: 47%;
    margin-top: 0px;
    &:not(:last-child) {
      margin-right: 10px;
    }
  }
`;

export const CustomJobCard = styled(JobCard)`
  z-index: 2;
  transition: opacity 0.7s ease-out, transform 0.7s;
  animation: ${({ displayModal }) => {
    return (
      displayModal === undefined &&
      css`
        ${rise} 2s forwards
      `
    );
  }};
  margin-bottom: 20px;
  :last-child {
    margin-bottom: 0rem;
  }
`;

const riseAbsolute = keyframes`
  0% {
    visibility: 'hidden';
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    visibility: 'visible';
    opacity: 1;
    transform: translateY(0px);
  }
`;

const fallAbsolute = keyframes`
  0% {
    z-index: 3;
    opacity: 1;
    visibility: 'visible';
    transform: translateY(0px);
  }
  99.9% {
    z-index: 3;
    opacity: 0;
    visibility: 'hidden';
    transform: translateY(30px);
  }
  100% {
    z-index: -1;
    opacity: 0;
    visibility: 'hidden';
    transform: translateY(30px);
  }
`;

export const JobModal = styled(JobCard)`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  margin: auto;
  z-index: 20;
  width: 70%;
  height: 50%;
  overflow: hidden;
  /* TODO Hide height of inside h1 h2 and p */
  height: ${({ displayModal }) => displayModal === undefined && 0}px;
  padding: ${({ displayModal }) => displayModal === undefined && 0}px;
  border: ${({ displayModal }) => displayModal === undefined && 0};
  animation: ${({ displayModal }) => {
    if (displayModal === undefined) return null;
    if (displayModal) {
      return css`
        ${riseAbsolute} 1s forwards
      `;
    }

    return css`
      ${fallAbsolute} 1s forwards
    `;
  }};
`;
