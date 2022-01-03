import Router from 'next/router'
import { useState } from 'react'
import { isAuthenticated } from '../auth'
import { Navbar } from '../components/Navbar'

export default function ProtectedRoute() {

    const authenticated = isAuthenticated()

    const [loading, setLoading] = useState(true)

    if(!authenticated){
        Router.push('/login')
    }else{
        setLoading(false)
    }

    if(loading){
        return <p>Loading...</p>
    }

	return (
		<div className='wrapper'>
			<Navbar />
			<h1>This is a protected route.</h1>
            <p>Only logged in users have an access.</p>
		</div>
	)
}
