import p5Types from "p5"
import { game } from "."
import { squareArrayApply } from "@/lib/gol"
import settings from "@/lib/settings"

let buttonContainer
let resetButton
let loopButton
let cycleButton
export const setup = (p5: p5Types, canvasParent: Element) => {
	canvasParent.id = "gol-container"
	p5.createCanvas(canvasParent.clientWidth, canvasParent.clientHeight).parent(canvasParent)
	settings.scale = p5.width / game.size

	p5.noStroke()
	p5.frameRate(8)

	// Element creation
	buttonContainer = p5.createDiv()
	buttonContainer.parent(canvasParent)
	buttonContainer.id("game-config-container")

	resetButton = p5.createButton('Reset')
	resetButton.mousePressed(() => game.reset())
	resetButton.parent(buttonContainer)

	loopButton = p5.createButton('Loop')
	loopButton.mousePressed(() => settings.isCycling = !settings.isCycling)
	loopButton.parent(buttonContainer)

	cycleButton = p5.createButton('Next')
	cycleButton.mousePressed(() => game.cycle())
	cycleButton.parent(buttonContainer)
}

export const draw = (p5: p5Types) => {
	squareArrayApply(0, game.size, (row, col) => {
		const fillColor = game.life[row][col] === 1 ? 255 : 0
		p5.fill(fillColor)

		const x = col * settings.scale
		const y = row * settings.scale
		p5.square(x, y, settings.scale)
	})

	if (settings.isCycling) { game.cycle() }
}
