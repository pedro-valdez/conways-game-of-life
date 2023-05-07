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
	zoomOriginal: number
	zoom: number
	projectedScale: number
	constructor(p5: p5Types) {
		this.scale = 100
		this.isCycling = false
		this.colors = {
			dead: colors.emerald["900"],
			schrodingers: colors.emerald["700"],
			alive: colors.emerald["500"],
		}
		this.camera = p5.createCamera()
		this.zoomOriginal = (p5.height / 2) / p5.tan(p5.PI / 6)
		this.zoom = this.zoomOriginal
		this.projectedScale = (this.zoomOriginal / this.zoom) / this.scale
	}

	offsetZoom(zoomOffset: number) {
		this.zoom += zoomOffset
		this.camera.move(0, 0, zoomOffset)
		this.updateProjectedScale(this.zoom)
	}

	updateProjectedScale(zoom: number) {
		this.projectedScale = (this.zoomOriginal / zoom) * this.scale
	}
}
