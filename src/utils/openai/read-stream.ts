import { Dispatch, SetStateAction } from 'react'

export const readStream = async (
	response: Response,
	setText: Dispatch<SetStateAction<string>>
) => {
	let result = ''
	const reader = response.body?.getReader()

	while (true) { 
		const doneValue = await reader?.read()
		if (doneValue?.done) break
		result += new TextDecoder().decode(doneValue?.value)
		setText(result)
	}
}
