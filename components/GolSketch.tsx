import dynamic from "next/dynamic"
import p5Types from "p5"
import Gol, { squareArrayApply } from "@/lib/gol"

const game = new Gol(16, true)
let scale: number

const Sketch = dynamic(() => import('react-p5').then(mod => mod.default), {
	ssr: false,
})

const setup = (p5: p5Types, canvasParent: Element) => {
	p5.createCanvas(512, 512).parent(canvasParent)
	scale = p5.width / game.size

	p5.noStroke()
}

const draw = (p5: p5Types) => {
	squareArrayApply(0, game.size, (row, col) => {
		p5.fill(game.life[row][col] === 1 ? 255 : 0)
		p5.square(col * scale, row * scale, scale)
	})
}

const keyPressed = (p5: p5Types) => {
	if (p5.keyCode === p5.RIGHT_ARROW) {
		game.cycle()
	}
}

const mousePressed = (p5: p5Types) => {
	const isMouseXInCanvas = p5.mouseX >= 0 && p5.mouseX < p5.width
	const isMouseYInCanvas = p5.mouseY >= 0 && p5.mouseY < p5.height
	const isMouseInCanvas = isMouseXInCanvas && isMouseYInCanvas

	const col = Math.floor(p5.mouseX / scale)
	const row = Math.floor(p5.mouseY / scale)

	if (isMouseInCanvas) {
		if (p5.mouseButton === p5.LEFT) {
			game.life[row][col] = 1
		} else if (p5.mouseButton === p5.RIGHT) {
			game.life[row][col] = 0
		}
	}
}

export default function GolSketch() {
	return (
		<Sketch
			setup={setup}
			draw={draw}
			keyPressed={keyPressed}
			mousePressed={mousePressed}
		/>
	)
}
