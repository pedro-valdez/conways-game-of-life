import ExplanationBody from "./ExplanationBody";
import Rules from "./Rules";
import Title from "./Title";

export default function Explanation() {
	return (
		<section id="explanation" className="prose text-white mx-auto">
			<div>
				<Title />
				<ExplanationBody />
				<Rules />
			</div>
		</section>
	)
}
