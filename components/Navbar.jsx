import Link from 'next/link'
import { useState } from 'react'
import { isAuthenticated } from '../auth'

export const Navbar = () => {
	const authenticated = isAuthenticated()
	const [username, setUsername] = useState('')

	return (
		<nav>
			<Link href={'/'}>Home</Link>
			{authenticated && (
				<Link
					href={{
						pathname: '/[username]',
						query: { username },
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
