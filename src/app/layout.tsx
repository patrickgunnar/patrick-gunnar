import CanvasTemplate from '@/components/background/canvas-template'
import './globals.css'
import type { Metadata } from 'next'


export const metadata: Metadata = {
	title: 'Patrick Gunnar',
	description: 'Architecting Innovation, Crafting Brilliance: The Epic Journey of a Masterful Full-Stack Web Artisan!',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body>
				<CanvasTemplate />
				<main>
					{children}
				</main>
			</body>
		</html>
	)
}
