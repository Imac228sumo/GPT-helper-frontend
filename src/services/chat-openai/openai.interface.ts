export interface IOpenAi {
	id: number
	name: string
	email: string
	isAdmin: boolean
}

export interface IChatOpenAi {
	id: number
	userId: number
	messages: IMessageOpenAi[]
}

export interface IMessageOpenAi {
	id: number
	role: string
	content: string
	question?: string
}
