import React, { useEffect } from 'react';
import { Container } from './styled';

const Paint = () => {
  useEffect(() => {
    const canvas = document.getElementById('c');
    const ctx = canvas.getContext('2d');

    // let lastPoint;

    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function drawPixels(x, y) {
      for (let i = -10; i < 10; i += 4) {
        for (let j = -10; j < 10; j += 4) {
          if (Math.random() > 0.5) {
            ctx.fillStyle = [
              'red',
              'orange',
              'yellow',
              'green',
              'light-blue',
              'blue',
              'purple',
            ][getRandomInt(0, 6)];
            ctx.fillRect(x + i, y + j, 4, 4);
          }
        }
      }
    }

    // let lastX = 0;
    // let lastY = 0;

    canvas.width = 600;
    canvas.height = 600;

    canvas.onmousemove = function onmousemove(e) {
      drawPixels(e.clientX, e.clientY);

      // lastPoint = { x: e.clientX, y: e.clientY };

      // const mouseX = e.pageX - this.offsetLeft;
      // const mouseY = e.pageY - this.offsetTop;

      // ctx.beginPath();
      // ctx.moveTo(lastX, lastY);
      // ctx.lineTo(mouseX, mouseY);
      // ctx.stroke();

      // lastX = mouseX;
      // lastY = mouseY;
    };

    const fadeOut = () => {
      ctx.fillStyle = 'rgba(255,255,255,0.3)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      setTimeout(fadeOut, 150);
    };

    fadeOut();
  }, []);

  return (
    <Container>
      <canvas id="c" width="500" height="500"></canvas>
    </Container>
  );
};

Paint.propTypes = {};

export default Paint;
