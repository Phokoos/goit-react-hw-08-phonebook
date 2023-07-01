import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginApi, logoutApi } from "api/authApi";

export const loginThunk = createAsyncThunk('auth/login', body => {
	return loginApi(body)
})

export const logoutThunk = createAsyncThunk('auth/logout', () => {
	return logoutApi()
})