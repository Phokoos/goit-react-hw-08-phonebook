import axios from 'axios'
import { instance } from './axiosConfigApi'

export const getPhonebookApi = async () => {
	const { data } = await instance.get('/contacts')
	console.log(data);
	return data
}

export const addPhonebookContactApi = async ({ name, number }) => {
	const { data } = await instance.post('/contacts', {
		name, number
	})
	console.log(data);
	return data
}

// export const deletePhonebookContactApi = async (id) => {
// 	const data = await axios.delete(`${BASE_URL}/${id}`)
// 	return data
// }

