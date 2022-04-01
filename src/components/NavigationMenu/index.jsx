import { useTheme } from '@emotion/react';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { CgMenuGridR } from 'react-icons/cg';
import {
  CircleLoader,
  CustomFloatingCube,
  MenuIcon,
  AbsoluteLanguage,
} from './styled';

function NavigationMenu({ setCurrentPage, currentPage }) {
  const theme = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(undefined);
  const [dragging, setDragging] = useState(false);
  const [circleColor, setCircleColor] = useState(null);
  const [displayCube, setDisplayCube] = useState([
    currentPage === 0 ? 'none' : 'visible',
    currentPage === 1 ? 'none' : 'visible',
    currentPage === 2 ? 'none' : 'visible',
    currentPage === 3 ? 'none' : 'visible',
  ]);
  const centerX = 78;
  const centerY = 190;
  const [zone, setZone] = useState({
    xmin: centerX - 75 / 2,
    xmax: centerX + 75 / 2,
    ymin: centerY - 75 / 2,
    ymax: centerY + 75 / 2,
  });

  useEffect(() => {
    const onScroll = () => {
      const newCenterX = 93 - window.pageXOffset;
      const newCenterY = 190 - window.pageYOffset;

      setZone({
        xmin: newCenterX - 75 / 2,
        xmax: newCenterX + 75 / 2,
        ymin: newCenterY - 75 / 2,
        ymax: newCenterY + 75 / 2,
      });
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const dragEndCallback = (cubeX, cubeY, type) => {
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
      setCurrentPage(type);
    }
  };

  return (
    <>
      <MenuIcon
        isMenuOpen={isMenuOpen}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <CgMenuGridR size="3.5em" />
      </MenuIcon>
      <CircleLoader
        color={circleColor}
        isMenuOpen={isMenuOpen}
        dragging={dragging}
      />
      <CustomFloatingCube
        cubeIndex={0}
        setDragging={setDragging}
        displayCube={displayCube[0]}
        dragEndCallback={dragEndCallback}
        color={theme.colors.pinkRGB}
        isMenuOpen={isMenuOpen}
        setCircleColor={setCircleColor}
      />
      <CustomFloatingCube
        cubeIndex={1}
        setDragging={setDragging}
        displayCube={displayCube[1]}
        dragEndCallback={dragEndCallback}
        color={theme.colors.purpleRGB}
        isMenuOpen={isMenuOpen}
        setCircleColor={setCircleColor}
      />
      <CustomFloatingCube
        cubeIndex={2}
        setDragging={setDragging}
        displayCube={displayCube[2]}
        dragEndCallback={dragEndCallback}
        color={theme.colors.blueRGB}
        isMenuOpen={isMenuOpen}
        setCircleColor={setCircleColor}
      />
      <CustomFloatingCube
        cubeIndex={3}
        setDragging={setDragging}
        displayCube={displayCube[3]}
        dragEndCallback={dragEndCallback}
        color={theme.colors.electricBlueRGB}
        isMenuOpen={isMenuOpen}
        setCircleColor={setCircleColor}
      />
      <AbsoluteLanguage isMenuOpen={isMenuOpen} />
    </>
  );
}

NavigationMenu.propTypes = {
  currentPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
};

export default NavigationMenu;
