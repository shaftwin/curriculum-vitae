import styled from '@emotion/styled';

export const Container = styled.div`
  width: 415px;
  max-width: 415px;
`;

export const CustomForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const CustomInput = styled.input`
  height: 50px;
  background: ${({ theme }) => theme.backgroundColors.grey2};
  color: ${({ theme }) => theme.fontColors.contactInput};
  font-size: ${({ theme }) => theme.fontSize[16]};
  border: 0;
  padding: 0 20px;
  &:nth-child(-n + 3) {
    margin-bottom: 20px;
  }
`;

export const CustomTextarea = styled.textarea`
  height: 50px;
  background: ${({ theme }) => theme.backgroundColors.grey2};
  color: ${({ theme }) => theme.fontColors.contactInput};
  font-size: ${({ theme }) => theme.fontSize[16]};
  border: 0;
  padding: 20px;
  min-height: 150px;
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
`;
