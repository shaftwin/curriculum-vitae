import styled from '@emotion/styled';
import FloatingCube from 'src/components/FloatingCube';
import TagCloud from 'src/components/TagCloud';

export const Container = styled.div``;

export const CustomFloatingCube = styled(FloatingCube)`
  display: ${({ displayCube }) => displayCube};
  position: absolute;
  top: 0;
  left: 0;
`;

export const CustomTagCloud = styled(TagCloud)`
  display: ${({ displayTagCloud }) => displayTagCloud};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const WhiteSquare = styled.div`
  width: ${() => window.innerWidth / 3}px;
  height: ${() => window.innerHeight / 6}px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotateX(60deg) rotateY(0deg) rotateZ(-45deg);
  border: 0px;
  border-radius: 20px;
  box-shadow: 0px 0px 40px 10px #0ff;
  z-index: 0;
`;
