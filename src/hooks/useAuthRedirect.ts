'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

import { useAuth } from '@/hooks/useAuth'
import { getAccessToken } from '@/services/auth/auth.helper'

//чтобы после авторизации автоматически происходила переадресация
export const useAuthRedirect = () => {
	const { user } = useAuth()
	const token = getAccessToken()

	const { replace } = useRouter()

	useEffect(() => {
		if (user && token) replace('/')
	}, [user, replace, token])
}
