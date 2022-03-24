import { css } from '@emotion/react';
import styled from '@emotion/styled';
import rise from 'src/domains/core/animations/rise/styled';

export const Container = styled.div`
  max-width: 80%;
  /* max-width: 415px; */
`;

export const CustomForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const CustomInput = styled.input`
  /* Mobile */
  width: 100%;
  height: 50px;
  background: ${({ theme }) => theme.backgroundColors.grey2};
  color: ${({ theme }) => theme.fontColors.contactInput};
  font-size: ${({ theme }) => theme.fontSize[16]};
  border: 0;
  padding: 0 20px;
  &:nth-child(-n + 3) {
    margin-bottom: 20px;
  }
  animation: ${({ displayModal }) => {
    return (
      displayModal === undefined &&
      css`
        ${rise} 2s forwards
      `
    );
  }};
`;

export const CustomTextarea = styled.textarea`
  /* Mobile */
  width: 100%;
  height: 50px;
  background: ${({ theme }) => theme.backgroundColors.grey2};
  color: ${({ theme }) => theme.fontColors.contactInput};
  font-size: ${({ theme }) => theme.fontSize[16]};
  border: 0;
  padding: 0 20px;
  min-height: 150px;
  animation: ${({ displayModal }) => {
    return (
      displayModal === undefined &&
      css`
        ${rise} 2s forwards
      `
    );
  }};
`;

export const SendButton = styled.input`
  width: 100%;
  max-width: 220px;
  height: 50px;
  background-color: #1d1d1d;
  color: ${({ theme }) => theme.fontColors.secondary};
  border: 1px solid ${({ theme }) => theme.colors.turquoise};
  font-size: ${({ theme }) => theme.fontSize[14]};
  letter-spacing: 4px;
  line-height: 50px;
  text-align: center;
  margin-top: 20px;
  cursor: pointer;
  &:hover {
    transition: 0.5s ease-in all;
    background-color: ${({ theme }) => theme.backgroundColors.turquoise};
    color: ${({ theme }) => theme.colors.black};
  }
  animation: ${({ displayModal }) => {
    return (
      displayModal === undefined &&
      css`
        ${rise} 2s forwards
      `
    );
  }};
`;
