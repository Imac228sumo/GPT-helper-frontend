'use client'

import { RefObject, useEffect } from 'react'

export const useScrollHeight = (
	ref: RefObject<HTMLTextAreaElement>,
	message: string
) => {
	useEffect(() => {
		if (ref.current) {
			ref.current.style.height = 'auto'
			let scHeight = ref.current.scrollHeight
			ref.current.style.height = `${scHeight}px`
		}
	}, [ref, message])
}
