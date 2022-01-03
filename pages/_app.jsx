import { useEffect, useState } from 'react'
import { authenticateUser } from '../auth'
import { getUsernameFromCookie } from '../util'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  const [loading,setLoading] = useState(true)

  useEffect(() => {
    const user = getUsernameFromCookie()
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
