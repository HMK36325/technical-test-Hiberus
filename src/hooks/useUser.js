import { useCallback, useContext, useState } from "react"
import { useLocation } from "wouter"
import loginService from "services/login"
import Context from "context/userContext"

export default function useUser() {
    const { currentUser, setCurrentUser } = useContext(Context)
    const [, navigate] = useLocation();
    const [loginState, setLoginState] = useState({ loading: false, error: false});

    const login = useCallback(({ email, password }) => {
        setLoginState({ loading: true, error: false})
        loginService({ email, password }).then((user) => {
            setCurrentUser(user)
            window.sessionStorage.setItem('currentUser', JSON.stringify(user))
            setLoginState({ loading: false, error: false})
        }).catch((err) => {
            setLoginState({ loading: false, error: true})
        })
    }, [setCurrentUser])

    const logout = useCallback(() => {
        window.sessionStorage.removeItem('currentUser')
        setCurrentUser(null)
        navigate('/');

    }, [setCurrentUser, navigate])

    return { login, logout, loginState, currentUser }
}