import styled from '@emotion/styled';
import TextInfo from 'src/components/TextInfo';

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
  margin-top: 30px;
`;

export const CustomTextInfo = styled(TextInfo)`
  min-height: 200px;
`;
