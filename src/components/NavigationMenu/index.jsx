import { useTheme } from '@emotion/react';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { CgMenuGridR } from 'react-icons/cg';
import { CircleLoader, CustomFloatingCube, MenuIcon } from './styled';

function NavigationMenu({ setCurrentPage }) {
  const theme = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(undefined);
  const [dragging, setDragging] = useState(false);
  const [circleColor, setCircleColor] = useState(null);
  const [displayCube, setDisplayCube] = useState([
    'visible',
    'visible',
    'visible',
    'visible',
  ]);
  // this is for center position
  // const centerX = window.innerWidth / 2;
  // const centerY = window.innerHeight * 0.1;
  const centerX = 93;
  const centerY = 190;

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
        onClick={() =>
          setIsMenuOpen(isMenuOpen === undefined || isMenuOpen === false)
        }
      >
        <CgMenuGridR color={theme.colors.lightGrey} size="3.5em" />
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
        color={theme.colors.lightBlueRGB}
        isMenuOpen={isMenuOpen}
        setCircleColor={setCircleColor}
      />
      <CustomFloatingCube
        cubeIndex={1}
        setDragging={setDragging}
        displayCube={displayCube[1]}
        dragEndCallback={dragEndCallback}
        color={theme.colors.pinkRGB}
        isMenuOpen={isMenuOpen}
        setCircleColor={setCircleColor}
      />
      <CustomFloatingCube
        cubeIndex={2}
        setDragging={setDragging}
        displayCube={displayCube[2]}
        dragEndCallback={dragEndCallback}
        color={theme.colors.turquoiseRGB}
        isMenuOpen={isMenuOpen}
        setCircleColor={setCircleColor}
      />
      <CustomFloatingCube
        cubeIndex={3}
        setDragging={setDragging}
        displayCube={displayCube[3]}
        dragEndCallback={dragEndCallback}
        color={theme.colors.blueRGB}
        isMenuOpen={isMenuOpen}
        setCircleColor={setCircleColor}
      />
    </>
  );
}

NavigationMenu.propTypes = {
  setCurrentPage: PropTypes.func.isRequired,
};

export default NavigationMenu;
