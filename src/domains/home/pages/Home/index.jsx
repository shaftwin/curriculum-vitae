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
  const [innerHeight, setInnerHeight] = useState(window.innerHeight);

  useEffect(() => {
    const onResize = () => {
      setInnerWidth(window.innerWidth);
      setInnerHeight(window.innerHeight);
    };

    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <Container currentPage={currentPage} innerWidth={innerWidth}>
      {currentPage === 0 && <About />}
      {currentPage === 1 && <Skills />}
      {currentPage === 2 && <Jobs />}
      {currentPage === 3 && <Contact />}
      {/* TODO Ternary had trigger an arror about  */}
      {/* Can't perform a React state update on an unmounted component. */}
      {innerWidth >= 1200 && innerHeight >= 650 ? (
        <NavigationMenu
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      ) : (
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
