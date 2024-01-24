import { getAccessToken } from '../auth/auth.helper'

import { IChatOpenAi } from './openai.interface'
import { instance } from '@/api/axios'
import { API_SERVER_URL } from '@/configs/api.config'
import { toastError } from '@/utils/toast-error/toast-error'

export const OpenAiService = {
	async generateResponseStream(message: string) {
		const messages = {
			messages: [
				{
					role: 'system',
					content: 'Ты ассистент помощник',
				},
				{
					role: 'user',
					content: message,
				},
			],
		}
		try {
			const response = await fetch(
				`${API_SERVER_URL}/openai/generateResponseStream`,
				{
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${getAccessToken()}`,
					},
					method: 'POST',
					body: JSON.stringify(messages),
				}
			)
			return response
		} catch (error) {
			console.log(123)
			toastError(error, 'pizda')
		}
	},

	async SendMessageStream(message: string, chatId: string) {
		const data = {
			message: message,
		}
		const response = await fetch(
			`${API_SERVER_URL}/openai-chats/send-message-stream/${chatId}`,
			{
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${getAccessToken()}`,
				},
				method: 'PUT',
				body: JSON.stringify(data),
			}
		)
		return response
	},

	async getChat(chatId: string) {
		return instance.get<IChatOpenAi>(`/openai-chats/${chatId}`)
	},

	// Admin section
}
