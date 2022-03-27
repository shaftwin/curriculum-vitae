import styled from '@emotion/styled';
import TextInfo from 'src/components/TextInfo';
import beforeAfter from 'src/domains/core/styles/beforeAfter/styled';

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 40px 20px 60px 20px;
  overflow: auto;
  @media screen and (min-width: 1024px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 20px 20px 20px 20px;
  }
`;

export const TextContainer = styled.div`
  @media screen and (min-width: 1024px) {
    margin-right: 50px;
  }
`;

export const NetworkContainer = styled.div`
  display: flex;
  flex-direction: row;
  /* Align with title */
  margin: 30px 0 0 21px;
`;

export const CustomTextInfo = styled(TextInfo)`
  min-height: 200px;
  @media screen and (min-width: 1024px) {
    max-width: 415px;
  }
`;

export const CustomContactForm = styled(beforeAfter)`
  margin: 40px 20px 20px 20px;
  &:before {
    content: '<form>';
    top: -2.5rem;
    left: -1rem;
  }
  &:after {
    content: '</form>';
    bottom: -2.5rem;
    left: -1rem;
  }
  @media screen and (min-width: 1024px) {
    min-width: 415px;
  }
`;
