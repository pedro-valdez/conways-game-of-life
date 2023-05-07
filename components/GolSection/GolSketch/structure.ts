import p5Types from "p5"
import { game } from "."
import { squareArrayApply } from "@/lib/gol"
import World from "@/lib/world"

export let world: World

export const movement = (p5: p5Types) => {
	const W_KEY = 87
	const A_KEY = 65
	const S_KEY = 83
	const D_KEY = 68
	if (p5.keyIsDown(W_KEY)) { world.camera.move(0, -world.scale / 5, 0) }
	if (p5.keyIsDown(A_KEY)) { world.camera.move(-world.scale / 5, 0, 0) }
	if (p5.keyIsDown(S_KEY)) { world.camera.move(0, world.scale / 5, 0) }
	if (p5.keyIsDown(D_KEY)) { world.camera.move(world.scale / 5, 0, 0) }
}

export const setup = (p5: p5Types, canvasParent: Element) => {
	canvasParent.id = "gol-container"
	const canvas = p5.createCanvas(canvasParent.clientWidth, canvasParent.clientHeight, p5.WEBGL).parent(canvasParent)
	canvas.attribute("oncontextmenu", "return false;")

	world = new World(p5)
	const centerOfLife = world.scale * game.life.length / 2
	world.camera.move(centerOfLife, centerOfLife, 0)

	p5.stroke(world.colors.schrodingers)
	p5.background(world.colors.dead)
	p5.strokeWeight(world.scale / 10)

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
	p5.background(world.colors.dead)
	movement(p5)
	squareArrayApply(0, game.size, (row, col) => {
		const fillColor = game.life[row][col] === 1 ? world.colors.alive : world.colors.dead
		p5.fill(fillColor)

		const x = col * world.scale
		const y = row * world.scale
		p5.square(x, y, world.scale)
	})

	if (world.isCycling) { game.cycle() }
}
