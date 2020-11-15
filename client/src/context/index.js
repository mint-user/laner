import { createContext } from 'react'

export const AuthContext = createContext({
    isAutheticated: false,
    token: null,
    login: ()=>{}, 
    logout: ()=>{}
})