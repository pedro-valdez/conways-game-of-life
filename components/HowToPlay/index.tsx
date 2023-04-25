import Body from "./Body";
import Instructions from "./Instructions";
import Title from "./Title";

export default function HowToPlay() {
	return (
		<section id="how-to-lay" className="prose text-white mx-auto">
			<div>
				<Title />
				<Body />
				<Instructions />
			</div>
		</section>
	)
}
