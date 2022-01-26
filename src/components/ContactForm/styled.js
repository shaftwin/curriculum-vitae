import styled from '@emotion/styled';

export const Container = styled.div``;

export const NetworkContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
`;

export const CustomForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const CustomInput = styled.input`
  width: 500px;
  max-width: 500px;
  height: 50px;
  background: #2b2b2b;
  color: #8d8d8d;
  font-size: 16px;
  border: 0;
  padding: 0 20px;
  &:nth-child(-n + 3) {
    margin-bottom: 20px;
  }
`;

export const CustomTextarea = styled.textarea`
  width: 500px;
  max-width: 500px;
  height: 50px;
  background: #2b2b2b;
  color: #8d8d8d;
  font-size: 16px;
  border: 0;
  padding: 20px;
  min-height: 150px;
`;

export const SendButton = styled.input`
  width: 100%;
  max-width: 220px;
  height: 50px;
  background-color: black;
  color: #08fdd8;
  border: 1px solid #08fdd8;
  font-size: 14px;
  letter-spacing: 4px;
  line-height: 50px;
  text-align: center;
  margin-top: 20px;
  &:hover {
    transition: 0.5s ease-in all;
    background-color: #08fdd8;
    color: black;
  }
`;
