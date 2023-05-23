export default function HowToPlay() {
	return (
		<section className="carousel-item w-full" id="slide2">
			<div>
				<h3>How to Play</h3>
				<p>Since Life is a zero player game, it is quite simple! Here are some things to do:</p>
				<ul>
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
			</div>
		</section>
	)
}
