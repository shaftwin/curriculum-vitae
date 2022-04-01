import { css } from '@emotion/react';
import styled from '@emotion/styled';
import TagCloud from 'src/components/TagCloud';
import TextInfo from 'src/components/TextInfo';
import rise from 'src/domains/core/animations/rise/styled';

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 40px 30px 200px 30px;
  overflow: auto;
  @media screen and (min-width: 1200px) {
    flex-direction: row;
    justify-content: center;
    align-items: unset;
    padding: 40px 20px 40px 20px;
    @media screen and (min-height: 700px) {
      align-items: center;
      padding: 20px 20px 20px 20px;
    }
  }
`;

export const CustomTagCloud = styled(TagCloud)`
  margin-top: 200px;
  animation: ${({ displayModal }) => {
    return (
      displayModal === undefined &&
      css`
        ${rise} 2s forwards
      `
    );
  }};
  @media screen and (min-width: 760px) {
    margin-top: 250px;
  }
  @media screen and (min-width: 1200px) {
    margin-top: 100px;
    margin-left: 25%;
  }
  @media screen and (min-width: 1350px) {
    margin-left: 20%;
  }
  @media screen and (max-height: 500px) and (min-width: 1200px) {
    margin-top: 400px;
  }
  @media screen and (min-height: 500px) and (min-width: 1200px) {
    margin-top: 300px;
  }
  @media screen and (min-height: 700px) and (min-width: 1200px) {
    margin-top: 200px;
  }
`;

export const CustomTextInfo = styled(TextInfo)`
  @media screen and (min-width: 1200px) {
    max-width: 450px;
    margin-left: -10%;
    min-height: 685px;
    @media screen and (min-height: 700px) {
      min-height: unset;
    }
  }
`;
