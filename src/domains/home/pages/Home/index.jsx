import React, { useState } from 'react';
import NavigationMenu from 'src/components/NavigationMenu';
import About from 'src/domains/home/pages/About';
import Contact from 'src/domains/home/pages/Contact';
import Jobs from 'src/domains/home/pages/Jobs';
// import CellAnimation from 'src/components/CellAnimation';
import Skills from 'src/domains/home/pages/Skills';
import { Container } from './styled';

function Home() {
  const [currentPage, setCurrentPage] = useState(null);

  return (
    <Container>
      <Skills />
      {currentPage === 0 && <About />}
      {currentPage === 1 && <Skills />}
      {currentPage === 2 && <Jobs />}
      {currentPage === 3 && <Contact />}
      <NavigationMenu setCurrentPage={setCurrentPage} />
    </Container>
  );
}

Home.propTypes = {};

export default Home;
