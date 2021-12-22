import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Nav className="me-auto">
                        <Navbar.Brand>
                            <Link to="/home" style={{textDecoration: 'none', color:'white'}}>Home</Link>
                        </Navbar.Brand>
                        <Navbar.Brand>
                            <Link to="/contact" style={{textDecoration: 'none', color: 'white'}}>Contact</Link>
                        </Navbar.Brand>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;
