import { css } from '@emotion/react';
import styled from '@emotion/styled';
import TagCloud from 'src/components/TagCloud';
import TextInfo from 'src/components/TextInfo';
import rise from 'src/domains/core/animations/rise/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const CustomTagCloud = styled(TagCloud)`
  margin-left: 20%;
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
  max-width: 475px;
  margin-left: -10%;
`;
