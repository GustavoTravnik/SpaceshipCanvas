import { Player } from './Player.js';

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

let msPrev = window.performance.now();
const fps = 60;
const msPerFrame = 1000 / fps;
let frames = 0;

const player = new Player();

function animate() {
    window.requestAnimationFrame(animate);

    const msNow = window.performance.now();
    const msPassed = msNow - msPrev;

    if (msPassed < msPerFrame) return

    const excessTime = msPassed % msPerFrame;
    msPrev = msNow - excessTime;

    GameLogic();
    GameDraw();

    frames++
}

// setInterval(() => {
//   console.log(frames)
// }, 1000)

setTimeout(() => animate(), 2000);

function GameLogic() {
    player.GameLogic(ctx);
}

function GameDraw() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    player.GameDraw(ctx);
}