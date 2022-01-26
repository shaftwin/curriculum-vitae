import styled from '@emotion/styled';
import TagCloud from 'src/components/TagCloud';
import TextInfo from 'src/components/TextInfo';

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const CustomTagCloud = styled(TagCloud)`
  margin-left: 20%;
`;

export const CustomTextInfo = styled(TextInfo)`
  max-width: 475px;
  margin-left: -10%;
`;
