import { IUser } from '../user/user.interface'

export interface IAuthResponse {
	accessToken: string
	user: IUser
}

export interface IFormData {
	email: string
	password: string
}
