import { createAsyncThunk } from '@reduxjs/toolkit'
import { addPhonebookContactApi, deletePhonebookContactApi, getPhonebookApi } from 'api/phonebookApi'

export const fetchContactsThunk = createAsyncThunk(
	"contacts/fetchAll",
	async () => {
		const response = await getPhonebookApi()
		return response;
	}
)

export const addContactsThunk = createAsyncThunk(
	"contacts/addContact",
	async ({ name, number }) => {
		const response = await addPhonebookContactApi({ name, number })
		return response;
	}
)

export const deleteContactsThunk = createAsyncThunk(
	"contacts/deleteContact",
	async (id) => {
		const response = await deletePhonebookContactApi(id)
		return response;
	}
)

