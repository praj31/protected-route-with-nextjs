import  Router  from "next/router"
import { useEffect } from "react"
import { unauthenticateUser } from "../auth"
import { logoutUser } from "../util"

export default function Logout(){
    useEffect(()=>{
        // remove the cookie
        logoutUser()
        // set auth status to false
        unauthenticateUser()
        // redirect user to homepage
        Router.push('/')
    }, [])
    
    return <p>Logging user out...</p>
}