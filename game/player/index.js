import { gameboard } from '../board/index.js'
import { getInputDirection, clearInputDirection } from './input.js'

export const PLAYER_SPEED = 20;

const playerBody = { x: 11, y: 11 };

export function update() {
	const inputDirection = getInputDirection();

	playerBody.x += inputDirection.x;
	playerBody.y += inputDirection.y;

	clearInputDirection()
};

export function draw() {
	//crate Element
	const playerElement = document.createElement('div');

	//config css
	playerElement.classList.add('player')

	//position
	playerElement.style.gridRowStart = playerBody.y;
	playerElement.style.gridColumnStart = playerBody.x;

	// append on DOM 
	gameboard.appendChild(playerElement);
};

export function colision (position) {
	return playerBody.x === position.x && playerBody.y === position.y; 
};