import { Colors } from './classes/data';
import Circle from './classes/circles';

const canvas: HTMLCanvasElement = document.querySelector('#scene');
const ctx: CanvasRenderingContext2D = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2,
};

const gravity = 1;

addEventListener('mousemove', e => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  init();
});

let circles: Circle[];
let radius: number = 30;

function init(): void {
  circles = [];

  for (let i = 0; i < 5000; i++) {
    circles = [
      ...circles,
      new Circle(
        canvas.width,
        canvas.height,
        Math.random() * canvas.width,
        Math.random() * canvas.height - canvas.height,
        Math.floor(Math.random() * 0 + 10),
        Colors[Math.random() * 4],
        Math.random() * 3,
        Math.random() * 2 - 1,
        gravity
      ),
    ];
  }
}

function animationLoop(): void {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  circles.forEach(circle => {
    circle.draw(ctx);
    circle.update();
  });
  requestAnimationFrame(animationLoop);
}

init();
animationLoop();
setInterval(init, 12000);
