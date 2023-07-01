import { createSlice } from '@reduxjs/toolkit'
import { initialState } from './initialState';
import { addContactsThunk, deleteContactsThunk, fetchContactsThunk } from './thunks';

const handlePending = (state) => {
	state.contacts.isLoading = true
	state.error = ''
}

const handleFulfilledContacts = (state, action) => {
	state.contacts.isLoading = false
	state.contacts.items = action.payload.data
}

const handleFulfilledAddContact = (state, action) => {
	state.contacts.isLoading = false
	state.contacts.items.push(action.payload.data)
}

const handleFulfilledDeleteContact = (state, action) => {
	state.contacts.isLoading = false
	state.contacts.items = state.contacts.items.filter(item => item.id !== action.payload.data.id)
}

const handleRejected = (state, { payload }) => {
	state.contacts.isLoading = false
	state.error = payload
}

const contactsSlice = createSlice({
	name: 'contacts',
	initialState,
	reducers: {
		setFilter: (state, { payload }) => {
			return ({
				...state,
				filter: payload
			})
		}
	},
	extraReducers: (builder) => {

		builder.addCase(fetchContactsThunk.fulfilled, handleFulfilledContacts)
			.addCase(addContactsThunk.fulfilled, handleFulfilledAddContact)
			.addCase(deleteContactsThunk.fulfilled, handleFulfilledDeleteContact)

			.addMatcher((action) => {
				return action.type.endsWith("/pending")
			}, handlePending)
			.addMatcher((action) => {
				return action.type.endsWith("/rejected")
			}, handleRejected)
	}
})

export const contactsReducer = contactsSlice.reducer;

export const { setFilter } = contactsSlice.actions
