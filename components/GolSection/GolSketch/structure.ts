import p5Types from "p5"
import { game } from "."
import { squareArrayApply } from "@/lib/gol"
import World from "@/lib/world"

export let world: World

export const setup = (p5: p5Types, canvasParent: Element) => {
	canvasParent.id = "gol-container"
	p5.createCanvas(canvasParent.clientWidth, canvasParent.clientHeight, p5.WEBGL).parent(canvasParent)

	world = new World(p5)

	world.scale = p5.width / game.size

	p5.stroke(world.colors.schrodingers)
	p5.frameRate(8)
	p5.background(world.colors.dead)

	// Element creation
	const buttonContainer = p5.createDiv()
	buttonContainer.parent(canvasParent)
	buttonContainer.id("game-config-container")

	const resetButton = p5.createButton('Reset')
	resetButton.mousePressed(() => game.reset())
	resetButton.parent(buttonContainer)

	const loopButton = p5.createButton('Loop')
	loopButton.mousePressed(() => world.isCycling = !world.isCycling)
	loopButton.parent(buttonContainer)

	const cycleButton = p5.createButton('Next')
	cycleButton.mousePressed(() => game.cycle())
	cycleButton.parent(buttonContainer)
}

export const draw = (p5: p5Types) => {
	squareArrayApply(0, game.size, (row, col) => {
		const fillColor = game.life[row][col] === 1 ? world.colors.alive : world.colors.dead
		p5.fill(fillColor)

		const x = col * world.scale
		const y = row * world.scale
		p5.square(x, y, world.scale)
	})

	if (world.isCycling) { game.cycle() }
}
