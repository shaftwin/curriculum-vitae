import React from 'react';
import About from 'src/domains/home/pages/About';
// import Contact from 'src/domains/home/pages/Contact';
// import CellAnimation from 'src/components/CellAnimation';
// import TextInfo from 'src/components/TextInfo';
// import About from 'src/domains/home/pages/About';
// import Skills from 'src/domains/home/pages/Skills';
import {
  Container,
  // CustomFloatingCube,
  // CustomTagCloud,
  // CircleLoader,
} from './styled';

function Home() {
  // const [dragging, setDragging] = useState(false);
  // const centerX = window.innerWidth / 2;
  // const centerY = window.innerHeight * 0.1;
  // const [displayCube, setDisplayCube] = useState('visible');
  // const [displayTagCloud, setDisplayTagCloud] = useState('none');
  // const [zone] = useState({
  //   xmin: centerX - 100 / 2,
  //   xmax: centerX + 100 / 2,
  //   ymin: centerY - 100 / 2,
  //   ymax: centerY + 100 / 2,
  // });

  // const shouldHide = (cubeX, cubeY) => {
  //   if (
  //     cubeX > zone.xmin &&
  //     cubeX < zone.xmax &&
  //     cubeY > zone.ymin &&
  //     cubeY < zone.ymax
  //   ) {
  //     setDisplayTagCloud('visible');
  //     setDisplayCube('none');
  //   }
  // };

  return (
    <Container
      onClick={() => {
        // setDisplayTagCloud('none');
        // setDisplayCube('visible');
      }}
    >
      <About />
      {/* <Skills /> */}
      {/* <Contact /> */}
      {/* <CellAnimation /> */}
      {/* <CustomFloatingCube
        setDragging={setDragging}
        displayCube={displayCube}
        shouldHide={shouldHide}
      /> */}
      {/* <CircleLoader dragging={dragging} /> */}
    </Container>
  );
}

Home.propTypes = {};

export default Home;
