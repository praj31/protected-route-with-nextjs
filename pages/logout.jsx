import  Router  from "next/router"
import { useEffect } from "react"
import { unauthenticateUser } from "../auth"
import { logoutUser } from "../util"

export default function Logout(){
    useEffect(()=>{
        logoutUser()
        unauthenticateUser()
        Router.push('/')
    }, [])
    
    return <p>Logging user out...</p>
}