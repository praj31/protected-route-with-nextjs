import Link from 'next/link'
import { useEffect, useState } from 'react'
import { isAuthenticated } from '../auth'
import { getUsernameFromCookie } from '../util'

export const Navbar = () => {
	const authenticated = isAuthenticated()
	const [username, setUsername] = useState('')

    useEffect(() => {
        const usernameFromCookie = getUsernameFromCookie()
        setUsername(usernameFromCookie) 
    },[])

	return (
		<nav>
			<Link href={'/'}>Home</Link>
			{authenticated && (
				<Link
					href={{
						pathname: '/[username]',
						query: { username: username },
					}}
				>
					Protected
				</Link>
			)}
			{!authenticated && <Link href={'/login'}>Login</Link>}
			{authenticated && <Link href={'/logout'}>Logout</Link>}
		</nav>
	)
}
