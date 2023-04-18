import p5Types from "p5"
import { game } from "."
import settings from "./settings"

export const keyPressed = (p5: p5Types) => {
	const isRightArrow = p5.keyCode === p5.RIGHT_ARROW
	if (isRightArrow) { game.cycle() }
}

export const mousePressed = (p5: p5Types) => {
	const isMouseXInCanvas = p5.mouseX >= 0 && p5.mouseX < p5.width
	const isMouseYInCanvas = p5.mouseY >= 0 && p5.mouseY < p5.height
	const isMouseInCanvas = isMouseXInCanvas && isMouseYInCanvas

	const col = Math.floor(p5.mouseX / settings.scale)
	const row = Math.floor(p5.mouseY / settings.scale)

	const isLeftMouse = p5.mouseButton === p5.LEFT
	const isRightMouse = p5.mouseButton === p5.RIGHT
	if (isMouseInCanvas) {
		if (isLeftMouse) { game.life[row][col] = 1 }
		else if (isRightMouse) { game.life[row][col] = 0 }
	}
}
