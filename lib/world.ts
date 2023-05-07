import p5Types from "p5"
import colors from "tailwindcss/colors"

// Class for settings regarding how to draw the GoL.
export default class World {
	scale: number
	isCycling: boolean
	colors
	/*
	 * I believe that the type p5Types.Camera is not defined correctly,
	 * because it doesn't let you access certail fields like eyeX.
	 */
	camera: any
	constructor(p5: p5Types) {
		this.scale = 10
		this.isCycling = false
		this.colors = {
			dead: colors.emerald["900"],
			schrodingers: colors.emerald["700"],
			alive: colors.emerald["500"],
		}
		this.camera = p5.createCamera()
	}
}
