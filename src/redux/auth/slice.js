import { toast } from "react-hot-toast";

const { createSlice } = require("@reduxjs/toolkit");
const { loginThunk, logoutThunk } = require("./thunks");

const initialState = {
	access_token: "",
	isLoading: false,
	email: '',
	error: ""
}

const handleFulfilled = (state, { payload }) => {
	state.isLoading = false
	state.access_token = payload.token
	state.email = payload.user.email
	toast.success('You logged in');
}

const handleLogoutFulfilled = (state) => {
	state.isLoading = false
	state.access_token = ""
	state.error = ""
}

const handlePending = (state) => {
	state.isLoading = true
	state.error = ''
}

const handleRejected = (state, { error }) => {
	state.isLoading = false
	state.error = error.message
	toast.error('Sorry something went wrong');
}

const authSlice = createSlice({
	name: "auth",
	initialState,
	extraReducers: (builder) => {
		builder.addCase(loginThunk.fulfilled, handleFulfilled)
			.addCase(logoutThunk.fulfilled, handleLogoutFulfilled)
			.addMatcher(({ type }) => type.endsWith('/pending'), handlePending)
			.addMatcher(({ type }) => type.endsWith('/rejected'), handleRejected)
	}
})

export const authReducer = authSlice.reducer