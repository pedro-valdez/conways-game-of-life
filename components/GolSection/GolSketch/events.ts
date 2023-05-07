import p5Types from "p5"
import { game } from "."
import { world } from "./structure"

export const keyPressed = (p5: p5Types) => {
	const isRightArrow = p5.keyCode === p5.RIGHT_ARROW
	if (isRightArrow) { game.cycle() }

	const SPACEBAR = 32
	const isSpace = p5.keyCode === SPACEBAR
	if (isSpace) { world.isCycling = !world.isCycling }

	const R_KEY = 82
	const isRKey = p5.keyCode === R_KEY
	if (isRKey) { game.reset() }
}

export const mousePressed = (p5: p5Types) => {
	const isMouseXInCanvas = p5.mouseX >= 0 && p5.mouseX < p5.width
	const isMouseYInCanvas = p5.mouseY >= 0 && p5.mouseY < p5.height
	const isMouseInCanvas = isMouseXInCanvas && isMouseYInCanvas

	const col = Math.floor(p5.mouseX / world.scale)
	const row = Math.floor(p5.mouseY / world.scale)

	const isLeftMouse = p5.mouseButton === p5.LEFT
	const isRightMouse = p5.mouseButton === p5.RIGHT
	if (isMouseInCanvas) {
		if (isLeftMouse) { game.life[row][col] = 1 }
		else if (isRightMouse) { game.life[row][col] = 0 }
	}
}
