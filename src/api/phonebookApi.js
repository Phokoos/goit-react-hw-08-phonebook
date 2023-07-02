import { instance } from './axiosConfigApi'

export const getPhonebookApi = async () => {
	const { data } = await instance.get('/contacts')
	return data
}

export const addPhonebookContactApi = async ({ name, number }) => {
	const { data } = await instance.post('/contacts', {
		"name": name, "number": number
	})
	return data
}

export const deletePhonebookContactApi = async (id) => {
	const { data } = await instance.delete(`contacts/${id}`)
	return data
}

