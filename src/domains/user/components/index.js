import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';
import { Container, FloatingContainer, FloatingText } from './styled';

const config = {
  radius: 100,
  size: 1.5 * 100, // * radius
  depth: 1.5 * 100, // * radius
  direction: 135,
  initSpeed: 32,
  maxSpeed: 1,
};

const Skills = ({
  words = ['toto', 'coucou', 'cloup'],
  wordsCallback = [
    'https://www.google.fr/search?q=toto',
    'https://www.google.fr/search?q=coucou',
    'https://www.google.fr/search?q=cloup',
  ],
}) => {
  const refArray = useRef([]);
  const [items, setItems] = useState(() => {
    const newArray = [];

    words.forEach((word, index) => {
      const phi = Math.acos(-1 + (2 * index + 1) / words.length);
      const theta = Math.sqrt((words.length + 1) * Math.PI) * phi;

      newArray.push({
        x: (config.size * Math.cos(theta) * Math.sin(phi)) / 2,
        y: (config.size * Math.sin(theta) * Math.sin(phi)) / 2,
        z: (config.size * Math.cos(phi)) / 2,
      });
    });

    return newArray;
  });
  const [mouseX0] = useState(
    config.initSpeed * Math.sin(config.direction * (Math.PI / 180)),
  );
  // const mouseX0 =
  //   config.initSpeed * Math.sin(config.direction * (Math.PI / 180)); // init distance between the mouse and rolling center x axis
  const [mouseY0] = useState(
    -config.initSpeed * Math.cos(config.direction * (Math.PI / 180)),
  );
  // const mouseY0 =
  //   -config.initSpeed * Math.cos(config.direction * (Math.PI / 180)); // init distance between the mouse and rolling center y axis
  const [mouseX, setMouseX] = useState(
    config.initSpeed * Math.cos(config.direction * (Math.PI / 180)),
  ); // current distance between the mouse and rolling center x axis
  const [mouseY, setMouseY] = useState(
    -config.initSpeed * Math.cos(config.direction * (Math.PI / 180)),
  ); // current distance between the mouse and rolling center y axis

  const resetMousePos = (event) => {
    // console.log(event);
    const containerPos = document
      .getElementById('container')
      .getBoundingClientRect();
    setMouseX(
      (event.clientX - (containerPos.left + containerPos.width / 2)) / 5,
    );
    setMouseY(
      (event.clientY - (containerPos.top + containerPos.height / 2)) / 5,
    );
  };

  useEffect(() => {
    const test = setInterval(() => {
      const mX =
        Math.abs(mouseX - mouseX0) < 1 ? mouseX0 : (mouseX + mouseX0) / 2; // reset distance between the mouse and rolling center x axis
      const mY =
        Math.abs(mouseY - mouseY0) < 1 ? mouseY0 : (mouseY + mouseY0) / 2; // reset distance between the mouse and rolling center y axis

      const a =
        -(Math.min(Math.max(-mY, -config.size), config.size) / config.radius) *
        config.maxSpeed;
      const b =
        (Math.min(Math.max(-mX, -config.size), config.size) / config.radius) *
        config.maxSpeed;

      const l = Math.PI / 180;
      const sc = [
        Math.sin(a * l),
        Math.cos(a * l),
        Math.sin(b * l),
        Math.cos(b * l),
      ];

      const newArray = [];
      items.forEach((item, index) => {
        const currentRef = refArray.current[index];
        const rx1 = item.x;
        const ry1 = item.y * sc[1] + item.z * -sc[0]; // + pos.z * -sc[0];
        const rz1 = item.y * sc[0] + item.z * sc[1]; // + pos.z * sc[1];

        const rx2 = rx1 * sc[3] + rz1 * sc[2]; // + rz1 * sc[2];
        const ry2 = ry1;
        const rz2 = rz1 * sc[3] - rx1 * sc[2];

        const per = (2 * config.depth) / (2 * config.depth + rz2); // todo

        // item.x = rx2;
        // item.y = ry2;
        // item.z = rz2;
        newArray.push({
          x: rx2,
          y: ry2,
          z: rz2,
        });
        const scale = per.toFixed(3);

        let alpha = per * per - 0.25;
        alpha = (alpha > 1 ? 1 : alpha).toFixed(3);
        const left = (rx2 - currentRef.offsetWidth / 2).toFixed(2);
        const top = (ry2 - currentRef.offsetHeight / 2).toFixed(2);

        currentRef.style.willChange = 'transform, opacity, filter';
        // eslint-disable-next-line max-len
        currentRef.style.transform = `translate3d(${left}px, ${top}px, 0) scale(${scale})`;
        currentRef.style.filter = `alpha(opacity=${100 * alpha})`;
        currentRef.style.opacity = alpha;
        currentRef.style.zIndex = index + 1;
      });
      setItems(newArray);
    }, 1);

    return () => clearTimeout(test);
  }, [items, mouseX, mouseX0, mouseY, mouseY0]);

  return (
    <Container onMouseMove={resetMousePos} id="container">
      {words.map((word, index) => {
        return (
          <FloatingContainer
            id={index}
            key={index}
            ref={(el) => {
              refArray.current[index] = el;
            }}
            onClick={() => window.open(wordsCallback[index], '_blank')}
          >
            <FloatingText>{word}</FloatingText>
          </FloatingContainer>
        );
      })}
    </Container>
  );
};

Skills.propTypes = {
  words: PropTypes.arrayOf(PropTypes.string),
};

export default Skills;
