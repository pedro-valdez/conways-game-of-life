import GolSketch from "./GolSketch"
import Title from "./Title"

export default function () {
	return (
		<section className="h-screen py-4">
			<div className="h-full grid grid-rows-[auto_1fr] gap-y-4">
				<Title />
				<GolSketch />
			</div>
		</section>
	)
}
