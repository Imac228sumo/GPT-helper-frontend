import { createAsyncThunk } from '@reduxjs/toolkit'
import { toastr } from 'react-redux-toastr'

import { IAuthResponse, IEmailPassword } from './user.interface'
import { errorCatch } from '@/api/api.helper'
import { authService } from '@/services/auth/auth.service'
import { toastError } from '@/utils/toast-error/toast-error'

export const register = createAsyncThunk<IAuthResponse, IEmailPassword>(
	'auth/register',
	async (data, thunkApi) => {
		try {
			const response = await authService.main('register', data)
			toastr.success('Registration', 'Completed successfully')
			return response.data
		} catch (error) {
			toastError(error)
			return thunkApi.rejectWithValue(error)
		}
	}
)

export const login = createAsyncThunk<IAuthResponse, IEmailPassword>(
	'auth/login',
	async (data, thunkApi) => {
		try {
			const response = await authService.main('login', data)
			toastr.success('Login', 'Completed successfully')
			return response.data
		} catch (error) {
			toastError(error)
			return thunkApi.rejectWithValue(error)
		}
	}
)

export const logout = createAsyncThunk('auth/logout', async () => {
	await authService.logout()
})

export const checkAuth = createAsyncThunk<IAuthResponse>(
	'auth/check-auth',
	async (_, thunkApi) => {
		try {
			const response = await authService.getNewTokens()
			return response.data
		} catch (error) {
			if (errorCatch(error) === 'jwt expired') {
				toastr.error(
					'Logout',
					'Your authorization is finished, plz sign in again'
				)
				thunkApi.dispatch(logout())
			}
			return thunkApi.rejectWithValue(error)
		}
	}
)
