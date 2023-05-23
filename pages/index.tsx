import { Inter } from "next/font/google"
import GolSection from "@/components/GolSection"
import Tutorial from "@/components/Tutorial"

const inter = Inter({
	subsets: ['latin'],
})

export default function Home() {
  return (
		<main className={inter.className}>
			<Tutorial />
			<GolSection />
		</main>
  )
}
