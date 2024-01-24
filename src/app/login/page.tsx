import { Metadata } from 'next'

import styles from './LoginPage.module.scss'
import AuthForm from '@/components/screens/auth/AuthForm'

export const metadata: Metadata = {
	title: 'Login',
}

export default function LoginPage() {
	return (
		<div className={styles.wrapper}>
			<div>
				<h2>Вход</h2>
				<AuthForm isLogin />
			</div>
		</div>
	)
}
