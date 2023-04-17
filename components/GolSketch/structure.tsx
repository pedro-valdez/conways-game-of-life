import p5Types from "p5"
import { game } from "."
import { squareArrayApply } from "@/lib/gol"

export const setup = (p5: p5Types, canvasParent: Element) => {
	p5.createCanvas(512, 512).parent(canvasParent)
	game.setScale(p5.width / game.size)

	p5.noStroke()
}

export const draw = (p5: p5Types) => {
	squareArrayApply(0, game.size, (row, col) => {
		const fillColor = game.life[row][col] === 1 ? 255 : 0
		p5.fill(fillColor)

		const x = col * game.getScale()
		const y = row * game.getScale()
		p5.square(x, y, game.getScale())
	})
}
