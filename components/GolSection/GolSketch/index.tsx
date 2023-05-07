import dynamic from "next/dynamic"
import Gol from "@/lib/gol"
import { setup, draw } from "./structure"
import { keyPressed, mousePressed } from "./events"
import World from "@/lib/world"


export const game = new Gol(32, true)
export const world = new World()

const Sketch = dynamic(() => import('react-p5').then(mod => mod.default), {
	ssr: false,
})

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
