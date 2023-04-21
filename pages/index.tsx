import GolSketch from "@/components/GolSketch"

export default function Home() {
  return (
		<main className="">
			<section>
				<div className="grid grid-rows-[auto_1fr] h-screen">
					<h1>Conway's Game of Life</h1>
					<GolSketch />
				</div>
			</section>
		</main>
  )
}
