import React from 'react';
import LivingCell from 'src/components/LivingCell';
import { Container } from './styled';

function Home() {
  return (
    <Container>
      <LivingCell />
    </Container>
  );
}

Home.propTypes = {};

export default Home;
