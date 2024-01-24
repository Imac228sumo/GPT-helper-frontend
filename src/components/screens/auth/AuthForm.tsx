'use client'

import clsx from 'classnames'
import type { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import styles from './Auth.module.scss'
import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'
import { IFormData } from '@/services/auth/auth.interface'

interface AuthFormProps {
	isLogin: boolean
}

const AuthForm: FC<AuthFormProps> = ({ isLogin }) => {
	// useAuthRedirect()
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<IFormData>()
	const { login, register: registration } = useActions()
	const { isLoading: isPending } = useAuth()

	const onSubmit: SubmitHandler<IFormData> = data => {
		isLogin ? login(data) : registration(data)
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
			<div>
				<label>
					Email
					<input
						type='email'
						placeholder='Enter email: '
						{...register('email', { required: true })}
						className={styles.inputField}
					/>
				</label>
			</div>

			<div>
				<label>
					Пароль
					<input
						type='password'
						placeholder='Enter password: '
						{...register('password', { required: true })}
						className={styles.inputField}
					/>
				</label>
			</div>

			<div>
				<button
					type='submit'
					className={clsx(
						styles.btnPrimary,
						isLogin ? styles.isLogin : styles.isRegister,
						isPending ? styles.isPending : ''
					)}
					disabled={isPending}
				>
					{isLogin ? 'Войти' : 'Зарегистрироваться'}
				</button>
			</div>
		</form>
	)
}

export default AuthForm
