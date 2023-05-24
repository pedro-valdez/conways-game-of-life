export default function Explanation() {
	return (
		<section className="carousel-item w-full" id="slide1">
			<div>
				<h3>Explanation</h3>
				<p>Conway&apos;s Game of Life, often simply called Life, takes place in a two-dimensional grid of alive or dead cells. Life has rules comparable to death, survival and reproduction, hence the name of the game. The rules are:</p>
				<ul>
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
			</div>
		</section>
	)
}