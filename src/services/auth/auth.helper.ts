import Cookies from 'js-cookie'

import { EnumTokens } from './auth.service'
import { IAuthResponse } from '@/store/user/user.interface'

export const getAccessToken = () => {
	const accessToken = Cookies.get(EnumTokens.ACCESS_TOKEN)
	return accessToken || null
}

export const saveToCookiesStorage = (accessToken: string) => {
	Cookies.set(EnumTokens.ACCESS_TOKEN, accessToken, {
		domain: process.env.DOMAIN,
		sameSite: 'strict',
		expires: 1,
	})
}

export const saveToLocalStorage = (data: IAuthResponse) => {
	const user = {
		id: data.user.id,
		name: data.user.name,
		email: data.user.email,
	}
	localStorage.setItem('user', JSON.stringify(user))
}

export const removeFromCookiesStorage = () => {
	Cookies.remove(EnumTokens.ACCESS_TOKEN)
}

export const removeFromLocalStorage = (nameItem: string) => {
	localStorage.removeItem(nameItem)
}
