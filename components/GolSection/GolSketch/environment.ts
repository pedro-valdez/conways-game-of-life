import p5Types from "p5"

export const windowResized = (p5: p5Types) => {
	p5.resizeCanvas(p5.windowWidth, p5.windowHeight)
}
