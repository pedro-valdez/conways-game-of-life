export default function Instructions() {
	return (
		<ul className="list-none rules">
			<li>
				<span>Left click </span>
				 a cell to mark it as alive.
			</li>
			<li>
				<span>Right click </span>
				a cell to mark it as dead.
			</li>
			<li>
				<span>Spacebar </span>
				to play/pause Life.
			</li>
			<li>
				<span>R </span>
				to reset Life.
			</li>
			<li>
				<span>N </span>
				while paused to go forward one cycle.
			</li>
			<li>
				<span>WASD keys</span>
				to pan the camera around.
			</li>
		</ul>
	)
}
