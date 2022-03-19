import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import JobCard from 'src/domains/home/pages/Jobs/JobCard';

export const Container = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Grid = styled.div`
  position: relative;
  z-index: 1;
  width: 70%;
  min-width: 900px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 47%;
  min-width: 300px;
  margin-right: 10px;
`;

const rise = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
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
  z-index: 3;
  width: 70%;
  height: 50%;
  overflow: hidden;
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
