import React from 'react';
import FloatingCube from 'src/components/FloatingCube';
import { Container } from './styled';

function Home() {
  return (
    <Container>
      {/* <CellAnimation /> */}
      <FloatingCube />
    </Container>
  );
}

Home.propTypes = {};

export default Home;
