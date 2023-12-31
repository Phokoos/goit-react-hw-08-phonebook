import axios from "axios"

export const instance = axios.create({
	baseURL: 'https://connections-api.herokuapp.com/',
})

export const setToken = (token) => {
	instance.defaults.headers.common['Authorization'] = token
}

export const dellToken = () => {
	delete instance.defaults.headers.common['Authorization']
}
