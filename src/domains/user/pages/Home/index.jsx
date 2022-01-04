import PropTypes from 'prop-types';
import React from 'react';
import { Container } from './styled';

function Home() {
  return (
    <Container>
      <p>navigation</p>
      <p>coucou</p>
      <p>comp</p>
    </Container>
  );
}

Home.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Home;
