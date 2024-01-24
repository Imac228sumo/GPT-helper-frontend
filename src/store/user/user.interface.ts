import { IUser } from '@/services/user/user.interface'

export interface IUserState {
	id: number
	name: string
	email: string
}

export interface IAccessToken {
	accessToken: string
}

export interface IInitialState {
	user: IUserState | null
	isLoading: boolean
}

export interface IEmailPassword {
	email: string
	password: string
}

export interface IAuthResponse extends IAccessToken {
	user: IUser
}
