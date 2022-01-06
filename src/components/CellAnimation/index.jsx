import React, { useEffect } from 'react';
import { Container } from './styled';

const opts = {
  len: 20,
  count: 50,
  baseTime: 10,
  addedTime: 10,
  dieChance: 0.05,
  spawnChance: 1,
  sparkChance: 0.1,
  sparkDist: 10,
  sparkSize: 2,

  color: 'hsl(hue, 100%, light%)',
  baseLight: 50,
  addedLight: 10, // [50-10,50+10]
  shadowToTimePropMult: 6,
  baseLightInputMultiplier: 0.01,
  addedLightInputMultiplier: 0.02,

  // cx and cy aim screen center
  cx: window.innerWidth / 2,
  cy: window.innerHeight / 2,

  repaintAlpha: 0.04,
  hueChange: 0.1,

  // angle in rad
  baseRad: Math.PI / 2, // Hexagonal = Math.PI * 2 / 6
  tick: 0,

  dieX: window.innerWidth,
  dieY: window.innerHeight,

  // Mouse
  mouseX: null,
  mouseY: null,
};

// TODO resize is broken
class LivingCell {
  constructor(ctx) {
    this.reset();
    this.ctx = ctx;

    window.addEventListener('resize', () => {
      const canvas = document.getElementById('LivingHexagone');
      const w = window.innerWidth;
      canvas.width = window.innerWidth;
      const h = window.innerHeight;
      canvas.height = window.innerHeight;
      ctx.fillStyle = 'black';
      ctx.fillRect(0, 0, w, h);

      opts.cx = w / 2;
      opts.cy = h / 2;

      // opts.dieX = w / 2 / opts.len;
      // opts.dieY = h / 2 / opts.len;
      opts.dieX = window.innerWidth;
      opts.dieY = window.innerHeight;
    });
  }

  findXPath() {
    // go Left
    if (opts.mouseX < this.absoluteX) return -1;
    // go Right
    if (opts.mouseX > this.absoluteX) return 1;

    return 0;
  }

  findYPath() {
    // go Top
    if (opts.mouseY < this.absoluteY) return -1;
    // go Bottom
    if (opts.mouseY > this.absoluteY) return 1;

    return 0;
  }

  reset() {
    this.spawnX = Math.floor(Math.random() * window.innerWidth) + 1;
    this.spawnY = Math.floor(Math.random() * window.innerHeight) + 1;
    this.absoluteX = 0;
    this.absoluteY = 0;
    this.x = 0;
    this.y = 0;
    this.addedX = 0;
    this.addedY = 0;

    this.rad = 0;

    this.lightInputMultiplier =
      opts.baseLightInputMultiplier +
      opts.addedLightInputMultiplier * Math.random();

    this.color = opts.color.replace('hue', opts.tick * opts.hueChange);
    this.cumulativeTime = 0;

    this.beginPhase();
  }

  beginPhase() {
    this.x += this.addedX;
    this.y += this.addedY;

    this.time = 0;
    // eslint-disable-next-line no-bitwise
    this.targetTime = (opts.baseTime + opts.addedTime * Math.random()) | 0;

    this.rad += opts.baseRad * (Math.random() < 0.5 ? 1 : -1);

    // Generate next position
    if (!opts.mouseX || !opts.mouseY) {
      this.addedX = Math.cos(this.rad);
      this.addedY = Math.sin(this.rad);
    } else if (
      Math.abs(opts.mouseX - this.absoluteX) >
      Math.abs(opts.mouseY - this.absoluteY)
    ) {
      this.addedX = this.findXPath();
      this.addedY = 0;
    } else {
      this.addedX = 0;
      this.addedY = this.findYPath();
    }

    if (
      Math.random() < opts.dieChance ||
      this.absoluteX > opts.dieX ||
      this.absoluteX < -opts.dieX ||
      this.absoluteY > opts.dieY ||
      this.absoluteY < -opts.dieY
    )
      this.reset();
  }

  step() {
    this.time += 1;
    this.cumulativeTime += 1;

    if (this.time >= this.targetTime) this.beginPhase();

    const prop = this.time / this.targetTime;
    const wave = Math.sin((prop * Math.PI) / 2);
    const newX = this.addedX * wave;
    const newY = this.addedY * wave;
    // Reset coordinates in canvas of the cell point
    this.absoluteX = this.spawnX + (this.x + newX) * opts.len;
    this.absoluteY = this.spawnY + (this.y + newY) * opts.len;

    this.ctx.shadowBlur = prop * opts.shadowToTimePropMult;
    this.ctx.fillStyle = this.color.replace(
      'light',
      opts.baseLight +
        opts.addedLight *
          Math.sin(this.cumulativeTime * this.lightInputMultiplier),
    );
    this.ctx.shadowColor = this.color.replace(
      'light',
      opts.baseLight +
        opts.addedLight *
          Math.sin(this.cumulativeTime * this.lightInputMultiplier),
    );
    this.ctx.fillRect(this.absoluteX, this.absoluteY, 2, 2);

    if (Math.random() < opts.sparkChance)
      this.ctx.fillRect(
        this.absoluteX +
          Math.random() * opts.sparkDist * (Math.random() < 0.5 ? 1 : -1) -
          opts.sparkSize / 2,
        this.absoluteY +
          Math.random() * opts.sparkDist * (Math.random() < 0.5 ? 1 : -1) -
          opts.sparkSize / 2,
        opts.sparkSize,
        opts.sparkSize,
      );
  }
}

const CellAnimation = () => {
  useEffect(() => {
    const canvas = document.getElementById('CellAnimation');

    // TODO can be improved / Refactored with resize event
    const w = window.innerWidth;
    canvas.width = window.innerWidth;
    const h = window.innerHeight;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext('2d');
    const lines = [];

    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, w, h);

    const loop = () => {
      window.requestAnimationFrame(loop);

      opts.tick += 1;

      ctx.globalCompositeOperation = 'source-over';
      ctx.shadowBlur = 0;
      ctx.fillStyle = 'rgba(0,0,0,alp)'.replace('alp', opts.repaintAlpha);
      ctx.fillRect(0, 0, w, h);
      ctx.globalCompositeOperation = 'lighter';

      if (lines.length < opts.count && Math.random() < opts.spawnChance)
        lines.push(new LivingCell(ctx));

      lines.forEach((line) => {
        line.step();
      });
    };

    loop();

    canvas.onmousemove = function onmousemove(e) {
      opts.mouseX = e.clientX;
      opts.mouseY = e.clientY;
    };

    canvas.onmouseleave = function onmouseleave() {
      opts.mouseX = null;
      opts.mouseY = null;
    };
  }, []);

  return (
    <Container>
      <canvas id="CellAnimation"></canvas>
    </Container>
  );
};

CellAnimation.propTypes = {};

export default CellAnimation;
