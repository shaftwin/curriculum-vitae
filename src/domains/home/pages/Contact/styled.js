import styled from '@emotion/styled';
import TextInfo from 'src/components/TextInfo';
import beforeAfter from 'src/domains/core/styles/beforeAfter/styled';

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const TextContainer = styled.div`
  margin-right: 50px;
`;

export const NetworkContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 45px;
  /* Align with title */
  margin-left: 21px;
`;

export const CustomTextInfo = styled(TextInfo)`
  min-height: 200px;
`;

export const CustomContactForm = styled(beforeAfter)`
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
`;
