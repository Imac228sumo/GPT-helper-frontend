import type { PropsWithChildren } from 'react'
import styles from './Layout.module.scss'
// import { Sidebar } from './sidebar/Sidebar'

export default function LayoutClient({ children }: PropsWithChildren<unknown>) {
	return (
		<div className={styles.layout}>
			{/* <Sidebar /> */}
			<section>{children}</section>
		</div>
	)
}
