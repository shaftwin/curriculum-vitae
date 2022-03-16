import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import JobCard from 'src/domains/home/pages/Jobs/JobCard';

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Grid = styled.div`
  position: relative;
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const fullSize = keyframes`
  0% {
    width: 43%;
    height: 142px;
  }
  100% {
    width: 100%;
    height: 500px;
  }
`;

const rise = keyframes`
  0% {
    opacity: 0;
    transform: translateY(0px);
  }
  100% {
    opacity: 1;
    transform: translateY(30px);
  }
`;

const fall = keyframes`
  0% {
    display: flex;
    opacity: 1;
    transform: translateY(30px);
  }
  100% {
    opacity: 0;
    transform: translateY(0px);
    display: none;
  }
`;

export const CustomJobCard = styled(JobCard)`
  width: 43%;
  display: ${({ shouldHide }) => (shouldHide ? 'none' : 'flex')};
  background-color: #1d1d1d;
  transition: opacity 0.7s ease-out, transform 0.7s;
  animation: ${({ shouldExpand, shouldHide }) => {
    if (shouldHide) {
      return css`
        ${fall} 0.5s forwards
      `;
    }
    return shouldExpand
      ? css`
          ${fullSize} 2s forwards
        `
      : css`
          ${rise} 2s forwards
        `;
  }};
  margin-bottom: 4rem;
  :last-child {
    margin-bottom: 0rem;
  }
  :nth-last-child(2) {
    margin-bottom: 0rem;
  }
`;
