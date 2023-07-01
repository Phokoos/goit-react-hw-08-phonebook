import axios from 'axios'

const BASE_URL = 'https://6497fa159543ce0f49e18b94.mockapi.io/contacts'

export const getPhonebookApi = async () => {
	const data = await axios.get(BASE_URL)
	return data
}

export const addPhonebookContactApi = async ({ name, phone }) => {
	const data = await axios.post(BASE_URL, {
		name, phone
	})
	return data
}

export const deletePhonebookContactApi = async (id) => {
	const data = await axios.delete(`${BASE_URL}/${id}`)
	return data
}

