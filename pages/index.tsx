import { Inter } from "next/font/google"
import GolSketch from "@/components/GolSketch"

const inter = Inter({
	subsets: ['latin'],
})

export default function Home() {
  return (
		<main className={`bg-emerald-950 text-white ${inter.className}`}>
			<div className="px-4">
				<section className="h-screen py-4">
					<div className="h-full grid grid-rows-[auto_1fr] gap-y-4">
						<h1 className="font-black text-4xl text-emerald-500">
							Conway's<br className="sm:hidden"/> Game of Life
						</h1>
						<GolSketch />
					</div>
				</section>
			</div>
		</main>
  )
}
