import React, { useState } from "react";
import { Form, Button} from "react-bootstrap";
import { Link } from "wouter";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    /*   const [, navigate] = useLocation();
      const { isLogged, login, isLoginLoading, hasLoginError ,isBanned } = useUser(); */

    /*   useEffect(() => {
        if (isLogged) {
          if (!isFromPortal) {
            navigate("/")
          }
          onLogin && onLogin()
        }
      }, [isLogged, navigate, isFromPortal, onLogin]); */

    const handleSubmit = (e) => {
        e.preventDefault();
        //login({ email, password });
    };
    return (
        <div className="d-flex justify-content-center align-items-center flex-column">
            <Form onSubmit={handleSubmit} className="mt-3 login-form">
                <div className="login-title mt-3 mb-3">
                    <h3 className="text-center">Log In</h3>
                </div>
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
                </Form.Group>

                <Button type="submit" className="mt-3 mb-3 w-100 btn-dark">
                    Login
                </Button>
                <p className="text-center">¿No tienes cuenta?<Link to="/register"> Registrate aquí...</Link></p>
            </Form>
        </div>
    );
}
