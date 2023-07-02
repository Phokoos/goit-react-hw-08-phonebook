const { createSlice } = require("@reduxjs/toolkit");
const { loginThunk, logoutThunk, getUserThunk } = require("./thunks");

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
}

const handleLogoutFulfilled = (state) => {
	state.isLoading = false
	state.access_token = ""
	state.error = ""
}

const handleGetUserFulfilled = (state, { payload }) => {
	state.isLoading = false
	state.email = payload.email
}

const handlePending = (state) => {
	state.isLoading = true
	state.error = ''
}

const handleRejected = (state, { error }) => {
	state.isLoading = false
	state.error = error.message
}

const authSlice = createSlice({
	name: "auth",
	initialState,
	extraReducers: (builder) => {
		builder.addCase(loginThunk.fulfilled, handleFulfilled)
			.addCase(logoutThunk.fulfilled, handleLogoutFulfilled)
			.addCase(getUserThunk.fulfilled, handleGetUserFulfilled)
			.addMatcher(({ type }) => type.endsWith('/pending'), handlePending)
			.addMatcher(({ type }) => type.endsWith('/rejected'), handleRejected)
	}
})

export const authReducer = authSlice.reducer