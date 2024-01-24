'use client'

import { useRouter } from 'next/navigation'
import { FC } from 'react'

import { Chat } from '../chats/chat/Chat'

import styles from './Home.module.scss'
import { useActions } from '@/hooks/useActions'

export const Home: FC = () => {
	const { push } = useRouter()
	// const { isLoading: isLogoutPending } = useAuth()
	const { logout } = useActions()

	return (
		<div className={styles.wrapper}>
			<button
				style={{ fontSize: '25px', marginBottom: '20px' }}
				// onClick={() => {
				// 	logout()
				// 	push('/login')
				// }}
				// disabled={isLogoutPending}
			>
				Logout
			</button>
			<Chat chatId='1' />
		</div>
	)
}

// //проверка на стороне клиента
// useEffect(() => {
// 	const token = getAccessToken()
// 	if (!token) push('/login')
// }, [push])

// const { data, isLoading } = useQuery({
// 	queryKey: ['users'],
// 	queryFn: () => userService.getProfile(),
// })

// const getData = async () => {
// 	var myHeaders = new Headers()
// 	myHeaders.append('Content-Type', 'application/json')

// 	var raw = JSON.stringify({
// 		key: 'IbMLmxT0A5icc55MUWP9lwmOUDuRK3imDtB1ZMcGKfoJaPJXm39UVg1fefE0',
// 		prompt: 'man walking on the road, ultra HD video',
// 		negative_prompt: 'Low Quality',
// 		scheduler: 'UniPCMultistepScheduler',
// 		seconds: 3,
// 	})

// 	var requestOptions: RequestInit = {
// 		method: 'POST',
// 		headers: myHeaders,
// 		body: raw,
// 		redirect: 'follow',
// 	}

// 	fetch('https://stablediffusionapi.com/api/v5/text2video', requestOptions)
// 		.then(response => response.text())
// 		.then(result => console.log(result))
// 		.catch(error => console.log('error', error))
// }

// const response = (await fetch(
// 	`${API_SERVER_URL}/openai/generateResponseStream`,
// 	{
// 		headers: {
// 			'Content-Type': 'application/json',
// 			Authorization: `Bearer ${getAccessToken()}`,
// 		},
// 		method: 'POST',
// 		body: JSON.stringify(data),
// 	}
// ).then(res => res.json())) as responseData

// return (
// 	<div className={styles.wrapper}>
// 		{/* home
// 		<button
// 			onClick={() => {
// 				logout()
// 				push('/login')
// 			}}
// 			disabled={isLogoutPending}
// 		>
// 			Logout
// 		</button>
// 		<button onClick={() => fetchUser()}>запрос</button>
// 		<div>{message ? message : loading ? 'loading' : ''}</div> */}
// 		<Chat id='1' />
// 	</div>
// )
