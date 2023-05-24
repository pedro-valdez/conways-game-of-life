export default function HowToPlay() {
	return (
		<section className="carousel-item w-full" id="slide2">
			<div>
				<h3>How to Play</h3>
				<p>Since Life is a zero player game, it is quite simple! Here are some things to do:</p>
				<ul>
					<li>
						<span className="font-bold text-primary">Left click </span>
						a cell to mark it as alive.
					</li>
					<li>
						<span className="font-bold text-primary">Right click </span>
						a cell to mark it as dead.
					</li>
					<li>
						<span className="font-bold text-primary">Spacebar </span>
						to play/pause Life.
					</li>
					<li>
						<span className="font-bold text-primary">R </span>
						to reset Life.
					</li>
					<li>
						<span className="font-bold text-primary">N </span>
						while paused to go forward one cycle.
					</li>
					<li>
						<span className="font-bold text-primary">WASD keys </span>
						to pan the camera around.
					</li>
					<li>
						<span className="font-bold text-primary">Mouse wheel </span>
						to zoom in/out.
					</li>
				</ul>
			</div>
		</section>
	)
}
