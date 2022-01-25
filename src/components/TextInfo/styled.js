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

export const Container = styled.div`
  max-width: 415px;
  display: flex;
  flex-direction: column;
`;

export const CustomLi = styled.div`
  list-style: none;
`;

export const Letter = styled.div`
  position: relative;
  height: 80px;
  width: 80px;
  background: #18191f;
  color: #555;
  display: flex;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 46px;
  cursor: pointer;
  margin: 0 4px;
  border-radius: 20px;
  box-shadow: -1px -1px 4px rgba(255, 255, 255, 0.05),
    4px 4px 6px rgba(0, 0, 0, 0.2),
    inset -1px -1px 4px rgba(255, 255, 255, 0.05),
    inset 1px 1px 1px rgba(0, 0, 0, 0.1);
`;

export const HiddenInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 80px;
  width: 80px;
  z-index: 100;
  &:checked ~ div {
    box-shadow: inset 0 0 2px rgba(255, 255, 255, 0.05),
      inset 4px 4px 6px rgba(0, 0, 0, 0.2);
    color: yellow;
    text-shadow: 0 0 15px yellow, 0 0 25px yellow;
    animation: ${() =>
      css`
        ${glow} 3s linear infinite
      `};
  }
`;

export const Title = styled.div`
  display: flex;
  flex: row;
`;

export const Text = styled.p`
  max-width: 415px;
  color: white;
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 1.5rem;
  font-family: 'Open Sans', cursive;
`;
