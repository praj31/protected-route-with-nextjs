const authenticated = false

export const isAuthenticated = () => authenticated

export const authenticateUser = () => {
	authenticated = true
}
