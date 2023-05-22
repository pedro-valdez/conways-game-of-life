export default function Rules() {
	return (
		<ul className="rules">
			<li>
				<span>The Rule of Scarcity: </span>
				alive cells with fewer than two alive neighbors die.
			</li>
			<li>
				<span>The Rule of Survival: </span>
				alive cells with two or three alive neighbors survive.
			</li>
			<li>
				<span>The Rule of Overabundance: </span>
				alive cells with more than three alive neighbors die.
			</li>
			<li>
				<span>The Rule of Prosperity: </span>
				dead cells with three alive neighbors revive.
			</li>
		</ul>
	)
}
