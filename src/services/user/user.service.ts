import { IUser } from './user.interface'
import { instance } from '@/api/axios'

export const userService = {
	async getProfile() {
		return instance.get<IUser>(`/users/profile`)
	},

	// Admin section

	async getAllUsers() {
		return instance.get<IUser[]>(`/users`)
	},
}
