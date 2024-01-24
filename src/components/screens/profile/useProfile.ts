'use client'

import { useQuery } from '@tanstack/react-query'

import { userService } from '@/services/user/user.service'

export const useProfile = () => {
	// const { user } = useAuth()
	const { data, isLoading } = useQuery({
		queryKey: ['profile'],
		queryFn: () => userService.getProfile(),
		select: ({ data }) => data,
	})

	return { data, isLoading }
}
