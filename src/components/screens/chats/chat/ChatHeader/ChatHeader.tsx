// import { getImageUrl } from '@/app/config/get-image-url.config'
// import { IUser } from '@/types/user.types'
import { Search } from 'lucide-react'
import Image from 'next/image'

import styles from './ChatHeader.module.scss'

export function ChatHeader() {
	return (
		<div className={styles.wrapper}>
			<div>
				<Image
					src={'/public/vercel.svg'}
					alt={''}
					width={40}
					height={40}
					priority
				/>
				<div>
					<div>Username</div>
					<div>2 members</div>
				</div>
			</div>
			<button>
				<Search />
			</button>
		</div>
	)
}
