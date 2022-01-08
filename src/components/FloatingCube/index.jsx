import React, { useEffect, useRef, useState } from 'react';
import Cube, { Palette } from 'react-cube3d';
import { Container, Test } from './styled';

const size = 35;

function getRandomFloat(min, max) {
  return Math.random() * (max - min) + min;
}

const FloatingCube = () => {
  const [cubeRotationX, setCubeRotationX] = useState(0);
  const [cubeRotationY, setCubeRotationY] = useState(0);
  const [cubeX, setCubeX] = useState(1);
  const [cubeY, setCubeY] = useState(1);
  const [deltaX, setDeltaX] = useState(0);
  const [deltaY, setDeltaY] = useState(0);
  const dragImage = useRef(null);

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
    <Container>
      <Test
        onMouseDown={onMouseDown}
        cubeX={cubeX}
        cubeY={cubeY}
        draggable
        onDragStart={startDrag}
        onDrag={onDrag}
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
          palette={Palette.green}
        />
      </Test>
    </Container>
  );
};

FloatingCube.propTypes = {};

export default FloatingCube;
