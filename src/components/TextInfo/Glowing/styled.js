import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/react';

const glow = keyframes`
  0% {
    filter: hue-rotate(0deg);
  }
  50% {
    filter: hue-rotate(360deg);
  }
  100% {
    filter: hue-rotate(0deg);
  }
`;

export const GlowingContainer = styled.div`
  display: flex;
  flex: row;
  align-items: center;
  height: 60px;
`;

export const CustomLi = styled.div`
  list-style: none;
  /* &:hover > div {
    box-shadow: -1px -1px 4px rgba(8, 253, 216, 1),
      4px 4px 6px rgba(0, 0, 0, 0.2), inset -1px -1px 4px rgba(8, 253, 216, 1),
      inset 1px 1px 1px rgba(0, 0, 0, 0.1);
  } */
`;

export const Letter = styled.div`
  position: relative;
  height: 50px;
  width: 50px;
  /* background: #18191f; */
  color: #555;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4.4rem;
  cursor: pointer;
  margin: 0 4px;
  /* border-radius: 20px; */
  /* box-shadow: -1px -1px 4px rgba(8, 253, 216, 0.5),
    4px 4px 6px rgba(0, 0, 0, 0.2), inset -1px -1px 4px rgba(8, 253, 216, 0.5),
    inset 1px 1px 1px rgba(0, 0, 0, 0.1); */
`;

export const HiddenInput = styled.input`
  padding: 0;
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 50px;
  width: 50px;
  /* height: 32px;
  width: 32px; */
  z-index: 100;
  &:checked ~ div {
    /* box-shadow: inset 0 0 2px rgba(8, 253, 216, 0.5),
      inset 4px 4px 6px rgba(0, 0, 0, 0.2); */
    color: yellow;
    /* text-shadow: 0 0 15px yellow, 0 0 25px yellow; */
    text-shadow: 0 0 5px yellow, 0 0 7.5px yellow;
    animation: ${() =>
      css`
        ${glow} 3s linear infinite
      `};
  }
`;
