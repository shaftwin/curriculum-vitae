import React, { useEffect, useState } from 'react';
import { CgMenuGridR } from 'react-icons/cg';
import About from 'src/domains/home/pages/About';
import Contact from 'src/domains/home/pages/Contact';
import Jobs from 'src/domains/home/pages/Jobs';
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
    'visible',
  ]);
  const [displaySection, setDisplaySection] = useState(null);
  const [zone, setZone] = useState({
    xmin: centerX - 100 / 2,
    xmax: centerX + 100 / 2,
    ymin: centerY - 100 / 2,
    ymax: centerY + 100 / 2,
  });

  useEffect(() => {
    const onResize = () => {
      const newCenterX = window.innerWidth / 2;
      const newCenterY = window.innerHeight * 0.1;
      setZone({
        xmin: newCenterX - 100 / 2,
        xmax: newCenterX + 100 / 2,
        ymin: newCenterY - 100 / 2,
        ymax: newCenterY + 100 / 2,
      });
    };

    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

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
      {displaySection === 2 && <Jobs />}
      {displaySection === 3 && <Contact />}
      <Jobs />
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
        color={[129, 216, 247]}
        isMenuOpen={isMenuOpen}
      />
      <CustomFloatingCube
        cubeType={1}
        setDragging={setDragging}
        displayCube={displayCube[1]}
        shouldHide={shouldHide}
        color={[197, 113, 208]}
        isMenuOpen={isMenuOpen}
      />
      <CustomFloatingCube
        cubeType={2}
        setDragging={setDragging}
        displayCube={displayCube[2]}
        shouldHide={shouldHide}
        color={[8, 253, 216]}
        isMenuOpen={isMenuOpen}
      />
      <CustomFloatingCube
        cubeType={3}
        setDragging={setDragging}
        displayCube={displayCube[3]}
        shouldHide={shouldHide}
        color={[3, 164, 241]}
        isMenuOpen={isMenuOpen}
      />
      <CircleLoader dragging={dragging} />
    </Container>
  );
}

Home.propTypes = {};

export default Home;
