'use client'

import { Dispatch, FC, SetStateAction, useRef, useState } from 'react'

import styles from './MessageField.module.scss'
import { useScrollHeight } from './useScrollHeight'
import SendSvg from '@/components/elements/SendSvg/SendSvg'
import Field from '@/components/ui/field/Field'

export const MessageField: FC<{
	setMessage: Dispatch<SetStateAction<string>>
	message: string
	onSubmit: () => void
	scrollToBottom: () => void
}> = ({ message, setMessage, onSubmit, scrollToBottom }) => {
	const [shiftPressed, setShiftPressed] = useState(false)
	const ref = useRef<HTMLTextAreaElement>(null)
	useScrollHeight(ref, message)

	const onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
		if (e.key === 'Enter') {
			if (message.trim()) {
				onSubmit()
			}
		} else if (e.key === 'Shift') {
			setShiftPressed(true)
		} else if (e.key === 'Enter' && shiftPressed) {
			e.preventDefault() // Предотвращаем стандартное поведение (перенос строки)
			setMessage(prevMessage => prevMessage + '\n')
		}
	}

	const onKeyUp = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
		if (e.key === 'Shift') {
			setShiftPressed(false)
		}
	}

	const onBlur = () => {
		setShiftPressed(false)
	}

	return (
		<div className={styles.wrapper}>
			<Field
				ref={ref}
				placeholder='Задайте вопрос искусственному интеллекту...' //
				value={message}
				onChange={e => setMessage(e.target.value)}
				onKeyDown={onKeyDown}
				onKeyUp={onKeyUp}
				onBlur={onBlur}
				className={styles.field}
			/>
			<button
				onClick={onSubmit}
				disabled={!message.trim()}
				className={styles.button}
			>
				<SendSvg />
			</button>
		</div>
	)
}
