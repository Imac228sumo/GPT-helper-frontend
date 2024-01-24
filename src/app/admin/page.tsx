import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Admin SSR',
}

// //запрос на стороне сервера
// const fetchUser = async () => {
// 	'use server'

// 	const cookie = cookies()
// 	const accessToken = cookie.get(EnumTokens.ACCESS_TOKEN)?.value

// 	return fetch(`${API_SERVER_URL}/users`, {
// 		headers: {
// 			Authorization: `Bearer ${accessToken}`,
// 		},
// 	}).then(res => res.json()) as Promise<IUser[]>
// }

export default async function AdminPage() {
	//const users = await fetchUser()

	return (
		<div>
			{/* {users?.length ? (
				users.map(user => <div key={user.id}>{user.email}</div>)
			) : (
				<p>Not found!</p>
			)} */}
			Admin
		</div>
	)
}
