import { Inter } from "next/font/google"
import GolSection from "@/components/GolSection"
import Explanation from "@/components/Explanation"
import HowToPlay from "@/components/HowToPlay"

const inter = Inter({
	subsets: ['latin'],
})

export default function Home() {
  return (
		<main className={`text-white ${inter.className}`}>
			<div className="px-4">
				<GolSection />

				<Explanation />

				<HowToPlay />
			</div>
		</main>
  )
}
