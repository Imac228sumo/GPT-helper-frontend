// import { cookies } from 'next/headers'
// import { NextRequest, NextResponse } from 'next/server'

// import { API_SERVER_URL } from './configs/api.config'
// import { EnumTokens } from './services/auth/auth.service'
// import { IUser } from './services/user/user.interface'

// //запрос на стороне сервера
// const fetchGetProfile = async () => {
// 	'use server'

// 	const cookie = cookies()
// 	const accessToken = cookie.get(EnumTokens.ACCESS_TOKEN)?.value

// 	return fetch(`${API_SERVER_URL}/users/profile`, {
// 		method: 'get',
// 		headers: {
// 			Authorization: `Bearer ${accessToken}`,
// 		},
// 		credentials: 'include',
// 	}).then(res => res.json()) as Promise<IUser>
// }

// //проверка на стороне сервера
// export async function middleware(request: NextRequest, response: NextResponse) {
// 	const path = request.nextUrl.pathname
// 	const isPublicPath = path === '/login' || path === '/register'
// 	const isAdminPath = request.url.includes('/admin')

// 	try {
// 		const UserData = await fetchGetProfile()

// 		// if (UserData?.isAdmin === true) return NextResponse.next()

// 		// if (isAdminPath) {
// 		// 	return NextResponse.rewrite(new URL('/404', request.url))
// 		// }

// 		// return NextResponse.next()
// 	} catch (error) {
// 		// request.cookies.delete(EnumTokens.ACCESS_TOKEN)
// 		// return redirectToLogin(isAdminPath, isPublicPath, request)
// 	}

// 	const refreshToken =
// 		request.cookies.get(EnumTokens.REFRESH_TOKEN)?.value || ''

// 	if (!isPublicPath && !refreshToken) {
// 		return NextResponse.redirect(new URL('/login', request.nextUrl))
// 	}
// 	// else if (isPublicPath && refreshToken) {
// 	// 	return NextResponse.redirect(new URL('/', request.nextUrl))
// 	// }

// 	return NextResponse.next()
// }

// export const config = {
// 	// Указываем url для которых будет работать
// 	// '/admin/:path*'
// 	matcher: ['/login', '/register', '/', '/profile', '/admin/:path*'],
// }

// const redirectToLogin = (
// 	isAdminPage: boolean,
// 	isPublicPath: boolean,
// 	request: NextRequest
// ) => {
// 	//console.log(request.url)
// 	if (!isPublicPath) {
// 		return NextResponse.redirect(
// 			new URL(isAdminPage ? '/404' : '/login', request.url)
// 		)
// 	}
// }
