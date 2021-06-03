import { PLAYER_SPEED, draw as playerDraw, update as playerUpdate } from './player/index.js'
import { gameboard } from './board/index.js'

let lastTimeRendered = 0;


//currentTime (ms)
function main(currentTime) {

	window.requestAnimationFrame(main);

	const secondsSinceLastRender = (currentTime - lastTimeRendered) / 1000;

	if (secondsSinceLastRender < (1 / PLAYER_SPEED)) return;

	lastTimeRendered = currentTime;

	update();

	draw();

}

function update() {
	gameboard.innerHTML = '';
	playerUpdate();
};

function draw() {
	playerDraw();
};


window.requestAnimationFrame(main)

