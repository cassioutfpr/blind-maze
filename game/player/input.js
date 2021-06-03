const inputDirection = {
	x: 0,
	y: 0
};

window.addEventListener('keydown', e => {
	switch (e.key) {
		case 'ArrowUp':
			inputDirection.x = 0;
			inputDirection.y = -1;
			break;
		case 'ArrowDown':
			inputDirection.x = 0;
			inputDirection.y = 1;
			break;
		case 'ArrowLeft':
			inputDirection.x = -1;
			inputDirection.y = 0;
			break;
		case 'ArrowRight':
			inputDirection.x = 1;
			inputDirection.y = 0;
			break;
	}
});

export function getInputDirection() {
	let lastInput = inputDirection;
	inputDirection.x = 0;
	inputDirection.y = 0;

	return lastInput;
}