import Cookies from 'js-cookie'

// return username cookie if exists otherwise return empty string
export const getUsernameFromCookie = () => {
	const username = Cookies.get('username')
	return username || ''
}

// set username cookie value
export const setUsernameCookie = (value) => {
	Cookies.set('username', value, { expires: 1 })
}

// delete the username cookie
export const logoutUser = () => {
	Cookies.remove('username')
}
