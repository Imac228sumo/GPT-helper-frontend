import { Metadata } from 'next'
import { Raleway } from 'next/font/google'

import '@/assets/styles/globals.scss'
import MainProvider from '@/providers/MainProvider'

const inter = Raleway({ subsets: ['cyrillic', 'latin'], weight: '600' })

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<MainProvider>{children}</MainProvider>
			</body>
		</html>
	)
}
