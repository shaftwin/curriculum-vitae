/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import AppNavigationMenu from 'src/components/AppNavigationMenu';
import NavigationMenu from 'src/components/NavigationMenu';
import About from 'src/domains/home/pages/About';
import Contact from 'src/domains/home/pages/Contact';
import Jobs from 'src/domains/home/pages/Jobs';
// import CellAnimation from 'src/components/CellAnimation';
import Skills from 'src/domains/home/pages/Skills';
import { Container } from './styled';

function Home() {
  const [currentPage, setCurrentPage] = useState(-1);
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  useEffect(() => {
    const onResize = () => {
      setInnerWidth(window.innerWidth);
    };

    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <Container>
      {currentPage === 0 && <About />}
      {currentPage === 1 && <Skills />}
      {currentPage === 2 && <Jobs />}
      {currentPage === 3 && <Contact />}
      {innerWidth >= 1200 && (
        <NavigationMenu
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}
      {innerWidth < 1200 && (
        <AppNavigationMenu
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}
    </Container>
  );
}

Home.propTypes = {};

export default Home;
