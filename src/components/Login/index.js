import React, { useEffect, useState } from "react";
import useUser from "hooks/useUser";
import { useLocation } from "wouter";
import { Form, Button, Spinner } from "react-bootstrap";

export default function Login({ onLogin, isFromModal }) {
    const [email, setEmail] = useState("");
    const [, navigate] = useLocation();
    const [password, setPassword] = useState("");
    const { login, loginState, currentUser } = useUser();


    const handleSubmit = (e) => {
        e.preventDefault();
        login({ email, password });
    };

    useEffect(() => {
        if (currentUser) {
            if (isFromModal) navigate('/users')
            else navigate('/')
            onLogin && onLogin()
        }
    }, [loginState, navigate, currentUser, isFromModal, onLogin])

    return (
        <div className="d-flex justify-content-center align-items-center flex-column">
            <Form onSubmit={handleSubmit} className="mt-3 login-form">
                <Form.Group className="input-form mb-3">
                    <Form.Label className="m-2">Email</Form.Label>
                    <Form.Control
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        required
                        type="text"
                        placeholder="Email"
                    />
                </Form.Group>
                <Form.Group className="input-form mb-3">
                    <Form.Label className="m-2">Password</Form.Label>
                    <Form.Control
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        required
                        type="password"
                        placeholder="Password"
                    />
                    {loginState.error && <small className="form-error">Credentials are invalid ⚠️</small>}
                </Form.Group>
                <Button type="submit" className="mt-3 mb-3 w-100 btn-dark">
                    {loginState.loading ? <Spinner animation="border" /> : <p className="mb-1 mt-1">Iniciar Sesión</p>}
                </Button>
            </Form>
        </div >
    );
}
