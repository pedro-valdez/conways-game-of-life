import { Inter } from "next/font/google"
import GolSection from "@/components/GolSection"

const inter = Inter({
	subsets: ['latin'],
})

export default function Home() {
  return (
		<main className={`bg-emerald-950 text-white ${inter.className}`}>
			<div className="px-4">
				<GolSection />
			</div>
		</main>
  )
}
