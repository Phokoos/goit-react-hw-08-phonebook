import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUserApi, loginApi, logoutApi } from "api/authApi";

export const loginThunk = createAsyncThunk('auth/login', body => {
	return loginApi(body)
})

export const logoutThunk = createAsyncThunk('auth/logout', () => {
	return logoutApi()
})

export const getUserThunk = createAsyncThunk('auth/getProfile', () => {
	return getUserApi()
})