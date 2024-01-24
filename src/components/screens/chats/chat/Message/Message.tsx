'use client'

// import { getImageUrl } from '@/app/config/get-image-url.config'
// import dayjs from 'dayjs'
import Image from 'next/image'
import { FC, useEffect, useState } from 'react'

import img from '../../../../../../public/ava.png'

import styles from './Message.module.scss'
import { IMessageOpenAi } from '@/services/chat-openai/openai.interface'
import { OpenAiService } from '@/services/chat-openai/openai.service'
import { readStream } from '@/utils/openai/read-stream'

export const Message: FC<{
	message: IMessageOpenAi
	chatId: string
	scrollToBottom: () => void
}> = ({ message, chatId, scrollToBottom }) => {
	// const { user } = useAuth()
	const [response, setResponse] = useState('')
	const [isLoading, setIsLoading] = useState(false)
	let isSend = false

	const sendMessage = async (message: string) => {
		isSend = true
		setIsLoading(true)
		const stream = await OpenAiService.SendMessageStream(message, chatId)
		setIsLoading(false)
		await readStream(stream, setResponse)
	}

	useEffect(() => {
		if (!isSend && message.question) {
			sendMessage(message.question)
		}
	}, [])

	useEffect(() => {
		if (message.role === 'assistant' && message.content.trim()) {
			setResponse(message.content)
		}
	}, [message])

	useEffect(() => {
		scrollToBottom()
	}, [response])

	const isSender = message.role === 'user'
	return (
		<div
			className={styles.wrapper}
			style={
				isSender
					? { justifyContent: 'flex-end' }
					: response.trim()
						? { justifyContent: 'flex-start', display: 'flex' }
						: { display: 'none' }
			}
		>
			<div style={isSender ? { flexDirection: 'row-reverse' } : {}}>
				{!isSender && (
					<Image
						src={img}
						alt='Avatar'
						className='rounded-full'
						width={50}
						height={50}
					/>
				)}

				<div
					style={
						isSender
							? { marginRight: '5px', marginLeft: '15%' }
							: { marginLeft: '5px', marginRight: '15%' }
					}
				>
					<div
						style={
							isSender
								? {
										borderTopRightRadius: '0px',
										backgroundColor: 'rgb(111 58 255 / 1)',
									}
								: {
										borderTopLeftRadius: '0px',
										backgroundColor: '#363636',
									}
						}
					>
						{isSender ? message.content : response}
					</div>
					<div
						style={isSender ? { textAlign: 'right' } : { textAlign: 'left' }}
					>
						{/* {dayjs(message.createdAt).format('HH:mm')} */}
					</div>
				</div>
			</div>
		</div>
	)
}
