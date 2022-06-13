import { useCallback, useContext, useState } from "react"
import { useLocation } from "wouter"
import deleteUserService from "services/delete"
import loginService from "services/login"
import registerService from "services/register"
import updateService from "services/update"
import Context from "context/userContext"

export default function useUser() {
    const { currentUser, setCurrentUser } = useContext(Context)
    const [, navigate] = useLocation();
    const [loginState, setLoginState] = useState({ loading: false, error: false });

    const login = useCallback(({ email, password }) => {
        setLoginState({ loading: true, error: false })
        loginService({ email, password }).then((user) => {
            setCurrentUser(user)
            window.sessionStorage.setItem('currentUser', JSON.stringify(user))
            setLoginState({ loading: false, error: false })
        }).catch((err) => {
            setLoginState({ loading: false, error: true })
        })
    }, [setCurrentUser])

    const logout = useCallback(() => {
        window.sessionStorage.removeItem('currentUser')
        setCurrentUser(null)
        navigate('/');

    }, [setCurrentUser, navigate])

    const register = useCallback(({ values, setFieldError, setSubmitting, setRegistered }) => {
        registerService({
            name: values.name.trim(),
            surname: values.surname.trim(),
            email: values.email,
            password: values.password
        }).then(() => setRegistered(true))
            .catch(err => {
                if (err.status === 409) {
                    setFieldError('email', 'Email already in use ⚠️')
                } else setFieldError('wrong', 'Something went wrong ⚠️')
                setSubmitting(false)
            })
    }, [])

    const updateUser = useCallback(({ user, setFieldError, setSubmitting, onUpdate }) => {
        updateService({ userToUpdate: user, jwt: currentUser.jwt })
            .then(() => onUpdate())
            .catch(err => {
                setFieldError('email', 'Email already in use ⚠️')
                setSubmitting(false)
            })
    }, [currentUser])

    const deleteUser = useCallback(({ userId }) => {
        deleteUserService({ userId, jwt: currentUser.jwt })
    }, [currentUser])


    return { login, logout, register, deleteUser, updateUser, loginState, currentUser }
}