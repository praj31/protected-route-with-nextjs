import { useEffect, useState } from 'react'
import { authenticateUser } from '../auth'
import { getUsernameFromCookie } from '../util'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  const [loading,setLoading] = useState(true)

  useEffect(() => {
    // look if username cookie exists
    const user = getUsernameFromCookie()
    // authenticate the user if does
    if(user){
      authenticateUser()
    }
    setLoading(false)
  },[])

  if(loading){
    return <p>Loading...</p>
  }

  return <Component {...pageProps} />
}

export default MyApp
