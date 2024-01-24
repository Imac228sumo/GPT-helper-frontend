import { saveToCookiesStorage, saveToLocalStorage } from './auth.helper'
import { IAuthResponse, IFormData } from './auth.interface'
import { axiosClassic } from '@/api/axios'

export enum EnumTokens {
	'ACCESS_TOKEN' = 'accessToken',
	'REFRESH_TOKEN' = 'refreshToken',
}

export const authService = {
	async main(type: 'login' | 'register', data: IFormData) {
		const response = await axiosClassic.post<IAuthResponse>(
			`/auth/${type}`,
			data
		)

		if (response.data.accessToken) {
			saveToCookiesStorage(response.data.accessToken)
			saveToLocalStorage(response.data)
		}

		return response
	},

	async getNewTokens() {
		// const response = await axiosClassic.post<IAuthResponse>(
		// 	'/auth/login/access-token'
		// )
		// if (response.data.accessToken) {
		// 	saveToCookiesStorage(response.data.accessToken)
		// 	saveToLocalStorage(response.data)
		// }
		// return response
	},

	async logout() {
		//const response = await axiosClassic.post<boolean>('/auth/logout')
		// if (response.data) {
		// 	removeFromCookiesStorage()
		// 	removeFromLocalStorage('user')
		// }
		// return response
	},
}
