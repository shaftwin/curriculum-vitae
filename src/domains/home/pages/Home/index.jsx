import React, { useState } from 'react';
import { CgMenuGridR } from 'react-icons/cg';
import About from 'src/domains/home/pages/About';
import Contact from 'src/domains/home/pages/Contact';
// import CellAnimation from 'src/components/CellAnimation';
import Skills from 'src/domains/home/pages/Skills';
import {
  CircleLoader,
  Container,
  CustomFloatingCube,
  MenuIcon,
} from './styled';

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(undefined);
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
      <MenuIcon
        isMenuOpen={isMenuOpen}
        onClick={() =>
          setIsMenuOpen(!!(isMenuOpen === undefined || isMenuOpen === false))
        }
      >
        <CgMenuGridR color="#909096" size="3.5em" />
      </MenuIcon>
      <CustomFloatingCube
        cubeType={0}
        setDragging={setDragging}
        displayCube={displayCube[0]}
        shouldHide={shouldHide}
        color={[8, 253, 216]}
        isMenuOpen={isMenuOpen}
      />
      <CustomFloatingCube
        cubeType={1}
        setDragging={setDragging}
        displayCube={displayCube[1]}
        shouldHide={shouldHide}
        color={[210, 108, 213]}
        isMenuOpen={isMenuOpen}
      />
      <CustomFloatingCube
        cubeType={2}
        setDragging={setDragging}
        displayCube={displayCube[2]}
        shouldHide={shouldHide}
        color={[255, 34, 83]}
        isMenuOpen={isMenuOpen}
      />
      <CircleLoader dragging={dragging} />
    </Container>
  );
}

Home.propTypes = {};

export default Home;
