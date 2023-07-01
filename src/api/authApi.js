import axios from 'axios'
import { dellToken, instance, setToken } from './axiosConfigApi'

// export const instance = axios.create({
// 	baseURL: 'https://connections-api.herokuapp.com/',
// })

// export const setToken = (token) => {
// 	instance.defaults.headers.common['Authorization'] = token
// }

// export const dellToken = () => {
// 	delete instance.defaults.headers.common['Authorization']
// }

export const registerApi = async (body) => {
	return await instance.post('/users/signup', body)
}

export const loginApi = async (body) => {
	const { data } = await instance.post('/users/login', body)
	try {
		setToken(`Bearer ${data.token}`)
	} catch (error) {
		console.log("Ohhh... error happen: ", error);
	}
	return await data
}

export const logoutApi = async () => {
	const data = await instance.post('/users/logout');
	await dellToken()
	return data
}