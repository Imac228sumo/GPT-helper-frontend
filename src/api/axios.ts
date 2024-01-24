import axios, { CreateAxiosDefaults } from 'axios'

import { errorCatch, getContentType } from './api.helper'
import { API_URL } from '@/configs/api.config'
import { IS_PRODUCTION } from '@/constants/constants'
import {
	getAccessToken,
	removeFromCookiesStorage,
} from '@/services/auth/auth.helper'
import { authService } from '@/services/auth/auth.service'

const axiosClassicOptions: CreateAxiosDefaults = {
	baseURL: IS_PRODUCTION ? API_URL : API_URL,
	headers: getContentType(),
	withCredentials: true,
}

const axiosInstanceOptions: CreateAxiosDefaults = {
	baseURL: API_URL,
	headers: getContentType(),
	withCredentials: true,
}

export const axiosClassic = axios.create(axiosClassicOptions)
export const instance = axios.create(axiosInstanceOptions)

instance.interceptors.request.use(config => {
	const accessToken = getAccessToken()

	if (config?.headers && accessToken)
		config.headers.Authorization = `Bearer ${accessToken}`

	return config
})

instance.interceptors.response.use(
	config => config,
	async error => {
		const originalRequest = error.config

		if (
			(error?.response?.status === 401 ||
				errorCatch(error) === 'jwt expired' ||
				errorCatch(error) === 'jwt must be provided') &&
			error.config &&
			!error.config._isRetry
		) {
			originalRequest._isRetry = true
			try {
				await authService.getNewTokens()
				return instance.request(originalRequest)
			} catch (error) {
				if (errorCatch(error) === 'jwt expired') removeFromCookiesStorage()
			}
		}

		throw error
	}
)
