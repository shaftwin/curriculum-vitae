import React, { useState } from 'react';
import About from 'src/domains/home/pages/About';
import Contact from 'src/domains/home/pages/Contact';
// import CellAnimation from 'src/components/CellAnimation';
import Skills from 'src/domains/home/pages/Skills';
import { Container, CustomFloatingCube, CircleLoader } from './styled';

function Home() {
  const [dragging, setDragging] = useState(false);
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight * 0.1;
  const [displayCube, setDisplayCube] = useState([
    'visible',
    'visible',
    'visible',
  ]);
  const [displaySection, setDisplaySection] = useState(null);
  const [zone] = useState({
    xmin: centerX - 100 / 2,
    xmax: centerX + 100 / 2,
    ymin: centerY - 100 / 2,
    ymax: centerY + 100 / 2,
  });

  const shouldHide = (cubeX, cubeY, type) => {
    if (
      cubeX > zone.xmin &&
      cubeX < zone.xmax &&
      cubeY > zone.ymin &&
      cubeY < zone.ymax
    ) {
      const newArr = displayCube.map((cube, index) =>
        index === type ? 'none' : 'visible',
      );

      setDisplayCube(newArr);
      setDisplaySection(type);
    }
  };

  return (
    <Container
      onClick={() => {
        // setDisplayCube(['visible', 'visible', 'visible']);
        // setDisplaySection(null);
      }}
    >
      {displaySection === 0 && <About />}
      {displaySection === 1 && <Skills />}
      {displaySection === 2 && <Contact />}
      <CustomFloatingCube
        cubeType={0}
        setDragging={setDragging}
        displayCube={displayCube[0]}
        shouldHide={shouldHide}
        color={[0, 255, 196]}
      />
      <CustomFloatingCube
        cubeType={1}
        setDragging={setDragging}
        displayCube={displayCube[1]}
        shouldHide={shouldHide}
        color={[145, 2, 102]}
      />
      <CustomFloatingCube
        cubeType={2}
        setDragging={setDragging}
        displayCube={displayCube[2]}
        shouldHide={shouldHide}
        color={[255, 255, 0]}
      />
      <CircleLoader dragging={dragging} />
    </Container>
  );
}

Home.propTypes = {};

export default Home;
