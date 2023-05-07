import colors from "tailwindcss/colors"

// Class for settings regarding how to draw the GoL.
export default class World {
	scale: number
	isCycling: boolean
	colors
	constructor() {
		this.scale = 10
		this.isCycling = false
		this.colors = {
			dead: colors.emerald["900"],
			schrodingers: colors.emerald["700"],
			alive: colors.emerald["500"],
		}
	}
}
