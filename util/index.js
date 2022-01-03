import Cookies from 'js-cookie'

export const getUsernameFromCookie = () => {
	const username = Cookies.get('username')
	return username || ''
}

export const setUsernameCookie = (value) => {
	Cookies.set('username', value, { expires: 1 })
}

export const logoutUser = () => {
	Cookies.remove('username')
}
