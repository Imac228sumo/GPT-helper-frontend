'use client'

import { useQuery } from '@tanstack/react-query'
import { useEffect, useRef, useState } from 'react'

import styles from './Chat.module.scss'
import { Message } from './Message/Message'
import { MessageField } from './MessageField/MessageField'
// import { $fetch } from '@/$api/api.fetch'
import { Loader } from '@/components/ui/loader/Loader'
import { IMessageOpenAi } from '@/services/chat-openai/openai.interface'
import { OpenAiService } from '@/services/chat-openai/openai.service'

export function Chat({ chatId }: { chatId: string }) {
	const messagesContainerRef = useRef<HTMLDivElement>(null)
	const [messages, setMessages] = useState<IMessageOpenAi[]>([])
	const [messageId, setMessageId] = useState(0)
	const [message, setMessage] = useState('')
	const [messagePrev, setMessagePrev] = useState('')
	const [stream, setStream] = useState<Response | undefined>(undefined)

	const { data, isLoading } = useQuery({
		queryKey: ['chat', chatId],
		queryFn: () => OpenAiService.getChat(chatId),
		select: data => data.data,
		enabled: !!chatId,
	})

	useEffect(() => {
		if (data && data.messages && data.messages.length) {
			setMessages(data.messages)
		}
	}, [data])

	const addUserAiMessages = async () => {
		const userMessage: IMessageOpenAi = {
			id: 0,
			role: 'user',
			content: message,
		}
		const aiMessage: IMessageOpenAi = {
			id: 1,
			role: 'assistant',
			content: '',
			question: message,
		}
		const newMessages: IMessageOpenAi[] = [...messages, userMessage, aiMessage]
		setMessages(newMessages)
		setMessage('')
	}

	const onSubmit = async () => {
		await addUserAiMessages()
		scrollToBottom()
	}

	const scrollToBottom = () => {
		messagesContainerRef.current?.scrollTo({
			top: messagesContainerRef.current.scrollHeight,
			left: 0,
			behavior: 'smooth',
		})
	}

	return (
		<div className={styles.wrapper}>
			<div>Chat GPT 4 Turbo</div>
			{isLoading ? (
				<div className={styles.loader}>
					<Loader />
				</div>
			) : (
				<div className={styles.messages} ref={messagesContainerRef}>
					{messages.map((message, index) => (
						<Message
							key={index}
							message={message}
							chatId={chatId}
							scrollToBottom={scrollToBottom}
						/>
					))}
				</div>
			)}

			<MessageField
				message={message}
				setMessage={setMessage}
				onSubmit={onSubmit}
				scrollToBottom={scrollToBottom}
			/>
		</div>
	)
}
