import { Metadata } from 'next'

import styles from './RegisterPage.module.scss'
import AuthForm from '@/components/screens/auth/AuthForm'

export const metadata: Metadata = {
	title: 'Register',
}

export default function RegisterPage() {
	return (
		<div className={styles.wrapper}>
			<div>
				<h2>Регистрация</h2>
				<AuthForm isLogin={false} />
			</div>
		</div>
	)
}
