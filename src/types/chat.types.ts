export interface IMessage {
	id: number
	text: string
	role: string
}

export interface IChat {
	id: number
	messages: IMessage[]
}
