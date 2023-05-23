import { Inter } from "next/font/google"
import GolSection from "@/components/GolSection"

const inter = Inter({
	subsets: ['latin'],
})

export default function Home() {
  return (
		<main className={inter.className}>
			<GolSection />
		</main>
  )
}
