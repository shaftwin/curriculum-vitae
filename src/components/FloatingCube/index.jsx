import React, { useEffect, useRef, useState } from 'react';
// import Cube, { Palette } from 'react-cube3d';
import Cube from 'react-cube3d';
import { Container, AbsoluteContainer } from './styled';

const size = 35;
const offsets = [-150, -50, 50, 150];

function getRandomFloat(min, max) {
  return Math.random() * (max - min) + min;
}

const FloatingCube = ({
  className,
  shouldHide,
  setDragging,
  cubeType,
  color,
  displayCube,
}) => {
  const defaultCubePos = window.innerHeight / 2 - size / 2 + offsets[cubeType];
  const [cubeRotationX, setCubeRotationX] = useState(0);
  const [cubeRotationY, setCubeRotationY] = useState(0);
  const [cubeX, setCubeX] = useState(65);
  // const [cubeY, setCubeY] = useState(1 + (cubeType + 1) * 100);
  const [cubeY, setCubeY] = useState(defaultCubePos);
  const [deltaX, setDeltaX] = useState(0);
  const [deltaY, setDeltaY] = useState(0);
  const [previousState, setPreviousState] = useState('visible');
  const dragImage = useRef(null);

  useEffect(() => {
    if (displayCube === 'none') {
      setPreviousState(displayCube);
    } else if (displayCube === 'visible' && previousState === 'none') {
      setCubeX(65);
      setCubeY(defaultCubePos);
      setPreviousState('visible');
    }
  }, [cubeType, displayCube, previousState]);

  useEffect(() => {
    const onResize = () => {
      setCubeY(window.innerHeight / 2 - size / 2 + offsets[cubeType]);
    };

    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    dragImage.current = new Image();
    dragImage.current.src =
      // eslint-disable-next-line max-len
      'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';
  }, []);

  useEffect(() => {
    const loop = setInterval(() => {
      setCubeRotationX(getRandomFloat(0, 359));
      setCubeRotationY(getRandomFloat(0, 359));
    }, 10);
    return () => clearInterval(loop);
  }, []);

  function startDrag(e) {
    setDragging(true);
    e.dataTransfer.setDragImage(dragImage.current, 0, 0);
  }

  const onMouseDown = (e) => {
    setDeltaX(e.clientX - cubeX);
    setDeltaY(e.clientY - cubeY);
  };

  const onDrag = (e) => {
    if (e.clientX === 0 && e.clientY === 0) return null;
    if (e.clientX - deltaX < 0) {
      setCubeX(1);
    } else {
      setCubeX(e.clientX - deltaX);
    }
    if (e.clientY - deltaY < 0) {
      setCubeY(1);
    } else {
      setCubeY(e.clientY - deltaY);
    }
    return true;
  };

  return (
    <Container className={className}>
      <AbsoluteContainer
        onMouseDown={onMouseDown}
        cubeX={cubeX}
        cubeY={cubeY}
        draggable
        onDragStart={startDrag}
        onDrag={onDrag}
        onDragEnd={(e) => {
          shouldHide(e.clientX, e.clientY, cubeType);
          setDragging(false);
        }}
      >
        <Cube
          // noShadow
          shadow={{
            x: '35%',
            y: '70%',
          }}
          size={size}
          speed={{
            x: 0.0,
            y: 0.0,
          }}
          x={cubeRotationX}
          y={cubeRotationY}
          palette={{
            color: color || [190, 10, 0],
            shading: [200, 250, 200],
          }}
        />
      </AbsoluteContainer>
    </Container>
  );
};

FloatingCube.propTypes = {};

export default FloatingCube;
