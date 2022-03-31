import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';
import Cube from 'react-cube3d';
import { Container, AbsoluteContainer } from './styled';

const size = 35;
const offsets = [-150, -50, 50, 150];

function getRandomFloat(min, max) {
  return Math.random() * (max - min) + min;
}

const FloatingCube = ({
  className,
  dragEndCallback,
  setDragging,
  cubeIndex,
  color,
  displayCube,
  setCircleColor,
}) => {
  const defaultCubePos =
    (window.innerHeight > 910 ? window.innerHeight : 910) / 2 -
    size / 2 +
    offsets[cubeIndex];
  const [cubeRotationX, setCubeRotationX] = useState(0);
  const [cubeRotationY, setCubeRotationY] = useState(0);
  const [cubeX, setCubeX] = useState(57);
  const [cubeY, setCubeY] = useState(defaultCubePos);
  const [deltaX, setDeltaX] = useState(0);
  const [deltaY, setDeltaY] = useState(0);
  const [previousState, setPreviousState] = useState('visible');
  const dragImage = useRef(null);

  useEffect(() => {
    if (displayCube === 'none') {
      setPreviousState(displayCube);
    } else if (displayCube === 'visible' && previousState === 'none') {
      setCubeX(57);
      setCubeY(defaultCubePos);
      setPreviousState('visible');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cubeIndex, displayCube, previousState]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerHeight < 910) return null;
      setCubeY(window.innerHeight / 2 - size / 2 + offsets[cubeIndex]);
      return null;
    };

    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [cubeIndex]);

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
    }, 500);
    return () => clearInterval(loop);
  }, []);

  function startDrag(e) {
    setDragging(true);
    setCircleColor(color || null);
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
          dragEndCallback(e.clientX, e.clientY, cubeIndex);
          setDragging(false);
          setCircleColor(null);
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

FloatingCube.propTypes = {
  /**
   * Required setDragging
   */
  setDragging: PropTypes.func.isRequired,
  /**
   * Required displayCube
   */
  displayCube: PropTypes.string.isRequired,
  /**
   * Required cubeIndex
   */
  cubeIndex: PropTypes.number.isRequired,
  /**
   * Optional color
   */
  color: PropTypes.arrayOf(PropTypes.number),
  /**
   * Optional setCircleColor
   */
  setCircleColor: PropTypes.func,
  /**
   * Optional dragEndCallback
   */
  dragEndCallback: PropTypes.func,
  /**
   * Optional custom style
   */
  className: PropTypes.string,
};

FloatingCube.defaultProps = {
  className: null,
  color: null,
  dragEndCallback: () => null,
  setCircleColor: () => null,
};

export default FloatingCube;
