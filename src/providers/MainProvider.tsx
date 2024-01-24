'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { FC, PropsWithChildren, useState } from 'react'
import { Provider } from 'react-redux'

import ReduxToast from './ReduxToast'
import Layout from '@/components/layout/Layout'
import { store } from '@/store/store'

const MainProvider: FC<PropsWithChildren> = ({ children }) => {
	const [client] = useState(
		new QueryClient({
			defaultOptions: {
				queries: {
					refetchOnWindowFocus: false,
				},
			},
		})
	)

	return (
		<Provider store={store}>
			<QueryClientProvider client={client}>
				<ReduxToast />
				<Layout>{children}</Layout>
			</QueryClientProvider>
		</Provider>

		// <HeadProvider>
		// 	<Provider store={store}>
		// 		<QueryClientProvider client={queryClient}>
		// 			<ReduxToast />
		// 			<AuthProvider Component={Component}>
		// 				<Layout>{children}</Layout>
		// 			</AuthProvider>
		// 		</QueryClientProvider>
		// 	</Provider>
		// </HeadProvider>
	)
}
export default MainProvider
