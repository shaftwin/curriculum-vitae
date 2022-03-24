import { css } from '@emotion/react';
import styled from '@emotion/styled';
import TagCloud from 'src/components/TagCloud';
import TextInfo from 'src/components/TextInfo';
import rise from 'src/domains/core/animations/rise/styled';

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 40px 20px 200px 20px;
  overflow: auto;
`;

export const CustomTagCloud = styled(TagCloud)`
  margin-top: 175px;
  animation: ${({ displayModal }) => {
    return (
      displayModal === undefined &&
      css`
        ${rise} 2s forwards
      `
    );
  }};
`;

export const CustomTextInfo = styled(TextInfo)`
  /* max-width: 475px; */
  /* margin-left: -10%; */
`;
