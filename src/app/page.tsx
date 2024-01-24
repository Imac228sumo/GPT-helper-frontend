import { Metadata } from 'next'

import { Home } from '@/components/screens/home/Home'

//статические метаданные
export const metadata: Metadata = {
	title: 'HomePage',
	description: 'HomePage my home page metadata',
}

export default function HomePage() {
	return <Home />
}
