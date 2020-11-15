import { Toast } from '../Toast'
import { useState, useCallback, useEffect } from 'react'

export const AuthHook = () => {

    const STORAGE_NAME = 'jwtToken'

    const [token, setToken] = useState(null)

    const login = useCallback( (jwtToken) => {
        setToken(jwtToken)
        localStorage.setItem(STORAGE_NAME, jwtToken)
        Toast(`Welcome:::${jwtToken}`)
    }, [])

    const logout = useCallback(() => {
        setToken(null)
        localStorage.removeItem(STORAGE_NAME)
        Toast(`Logged out`)     
    }, [])

    useEffect(() => {
        const jwtToken = localStorage.getItem(STORAGE_NAME)
        if(jwtToken){
            login(jwtToken)
        } else {
            logout()
        }
    }, [login])

    return { token, login, logout }

}