import React, { useState } from 'react';
import CellAnimation from 'src/components/CellAnimation';
import {
  Container,
  CustomFloatingCube,
  CustomTagCloud,
  WhiteSquare,
} from './styled';

function Home() {
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;
  const [displayCube, setDisplayCube] = useState('visible');
  const [displayTagCloud, setDisplayTagCloud] = useState('none');
  const [zone] = useState({
    xmin: centerX - window.innerWidth / 3 / 2,
    xmax: centerX + window.innerWidth / 3 / 2,
    ymin: centerY - window.innerHeight / 6 / 2,
    ymax: centerY + window.innerHeight / 6 / 2,
  });

  const shouldHide = (cubeX, cubeY) => {
    if (
      cubeX > zone.xmin &&
      cubeX < zone.xmax &&
      cubeY > zone.ymin &&
      cubeY < zone.ymax
    ) {
      setDisplayTagCloud('visible');
      setDisplayCube('none');
    }
  };

  return (
    <Container
      onClick={() => {
        setDisplayTagCloud('none');
        setDisplayCube('visible');
      }}
    >
      <CellAnimation />
      <CustomFloatingCube displayCube={displayCube} shouldHide={shouldHide} />
      <CustomTagCloud displayTagCloud={displayTagCloud} />
      <WhiteSquare />
    </Container>
  );
}

Home.propTypes = {};

export default Home;
