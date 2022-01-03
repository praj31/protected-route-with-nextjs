import Router from 'next/router'
import { useEffect, useState } from 'react'
import { isAuthenticated } from '../auth'
import { Navbar } from '../components/Navbar'

export default function ProtectedRoute() {
	const authenticated = isAuthenticated()
	const [loading, setLoading] = useState(true)
	const [username, setUsername] = useState('')

	useEffect(() => {
		if (!authenticated) {
			Router.push('/login')
		}
        setUsername(Router.query.username)
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
