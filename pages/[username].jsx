import Router from 'next/router'
import { useEffect, useState } from 'react'
import { Navbar } from '../components/Navbar'
import { isAuthenticated } from '../auth'
import { getUsernameFromCookie } from '../util'

export default function ProtectedRoute() {
	const authenticated = isAuthenticated()
	const [loading, setLoading] = useState(true)
	const [username, setUsername] = useState('')

	useEffect(() => {
		// if the user is not authenticated, redirect them to login page
		if (!authenticated) {
			Router.push('/login')
		}
		// get username from stored cookie
		const usernameFromCookie = getUsernameFromCookie()
		setUsername(usernameFromCookie)
		setLoading(false)
	})

	if (loading) {
		return <p>Loading...</p>
	}

	return (
		<div className='wrapper'>
			<Navbar />
			<h1>This is a protected route.</h1>
			<p>Only logged in users have an access.</p>
            <p>You can see the address of this page. The /[username] is dynamically set.</p>
            <p>Current User: {username}</p>
		</div>
	)
}
