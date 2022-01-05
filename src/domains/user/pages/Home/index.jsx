import React from 'react';
import Skills from 'src/domains/user/components';
import { Container } from './styled';

function Home() {
  return (
    <Container>
      <Skills />
      <p>navigation</p>
      <p>coucou</p>
      <p>comp</p>
    </Container>
  );
}

Home.propTypes = {};

export default Home;
