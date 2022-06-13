import useUser from "hooks/useUser";
import React, { useState } from "react";
import { useLocation, Link } from "wouter";
import { Navbar, Container, NavDropdown, ButtonGroup, Button, Nav } from "react-bootstrap";
import ModalPortal from "components/Modal";
import Login from "components/Login";

export default function HeaderNav() {
    const { currentUser, logout } = useUser();
    const [showModal, setShowModal] = useState(false)
    const [, navigate] = useLocation()

    const handleClick = () => {
        if (currentUser) {
            navigate('/users')
        } else setShowModal(true)
    }
    const handleClose = () => {
        setShowModal(false)
    }

    const handleLogOut = (e) => {
        logout();
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">HIBERUS</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link onClick={handleClick}>Users</Nav.Link>
                    </Nav>
                    <Nav>
                        {currentUser ? (
                            <NavDropdown
                                title={currentUser.name ? currentUser.name : 'user'}
                                id="collasible-nav-dropdown">
                                <NavDropdown.Item onClick={handleLogOut}>
                                    LogOut↩️
                                </NavDropdown.Item>
                            </NavDropdown>
                        ) : (
                            <ButtonGroup aria-label="Button group">
                                <Button variant="secondary" className="bg-btn">
                                    <Link to='/login' className="text-white">Login</Link>
                                </Button>
                                <Button variant="secondary" className="bg-btn">
                                    <Link to='/register' className="text-white">Register</Link>
                                </Button>
                            </ButtonGroup>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
            {showModal && <ModalPortal onClose={handleClose} info={'Log In please!'}><Login onLogin={handleClose} isFromModal={true} /></ModalPortal>}
        </Navbar>
    )
}