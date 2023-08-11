import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

function CustomNavbar() {
    const [expanded, setExpanded] = useState(false);

    const toggleNavbar = () => {
        setExpanded(!expanded);
    };

    const closeNavbar = () => {
        setExpanded(false);
    };

    return (
        <Navbar bg="light" expand="lg" sticky="top" className="shadow" expanded={expanded}>
            <Container>
                <Navbar.Brand>MSKN</Navbar.Brand>
                <Navbar.Toggle onClick={toggleNavbar} aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="mx-auto" onClick={closeNavbar}>
                        <Nav.Link as={Link} to="/">Dashboard</Nav.Link>
                        <Nav.Link as={Link} to="/shipment">Shipments</Nav.Link>
                        <Nav.Link href="#">Customer Support</Nav.Link>
                        <Nav.Link href="#">Profile</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default CustomNavbar;
