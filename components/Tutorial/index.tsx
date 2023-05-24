import { useState } from "react"
import Explanation from "./Explanation"
import HowToPlay from "./HowToPlay"
import { HiXCircle } from "react-icons/hi2"

export default function Tutorial() {
	const [isTutorialOpen, setIsTutorialOpen] = useState(true)

	return (
		<section className={`fixed top-0 left-0 h-screen w-screen p-4 bg-base-100 ${isTutorialOpen ? "z-50" : "invisible -z-50"}`}>
			<h2 className="sr-only">Tutorial</h2>
			<div className="h-full prose lg:prose-lg xl:prose-xl 2xl:prose-2xl mx-auto relative">
				<button
					className="absolute"
					onClick={() => setIsTutorialOpen(false)}
				>
					<HiXCircle />
				</button>
				<div className="carousel w-full h-full items-center gap-x-[4em]">
					<Explanation />
					<HowToPlay />
				</div>
			</div>
		</section>
	)
}
