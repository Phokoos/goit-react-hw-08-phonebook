import { dellToken, instance, setToken } from './axiosConfigApi'

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
	const { data } = await instance.post('/users/logout');
	await dellToken()
	return data
}

export const getUserApi = async () => {
	const { data } = await instance.get('/users/current');
	await console.log(data);
	return data
}