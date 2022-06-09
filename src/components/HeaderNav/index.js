import React, { useState } from "react";
import { Navbar, Container, NavDropdown, ButtonGroup, Button, Nav } from "react-bootstrap";

export default function HeaderNav() {
    const [isLogged,] = useState(false)
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">HIBERUS</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/users">Users</Nav.Link>
                    </Nav>
                    <Nav>
                        {isLogged ? (
                            <NavDropdown
                                title="user"
                                id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#">
                                    LogOut↩️
                                </NavDropdown.Item>
                            </NavDropdown>
                        ) : (
                            <ButtonGroup aria-label="Button group">
                                <Button href="/login" variant="secondary" className="bg-btn">
                                    Login
                                </Button>
                                <Button href="/register" variant="secondary" className="bg-btn">
                                    Register
                                </Button>
                            </ButtonGroup>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}