import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const country = location.state?.country;

    const handleNavClick = (country) => {
        navigate(`/home`, { state: { country } });
    };

    return (
        <Navbar collapseOnSelect expand="lg">
            <Container>
                <Navbar.Brand href="/home">Countries</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto"></Nav>
                    <Nav>
                        <Nav.Link onClick={() => handleNavClick(null)} className={!country ? 'active' : ''}>
                            All
                        </Nav.Link>
                        <Nav.Link onClick={() => handleNavClick('Asia')} className={country === 'Asia' ? 'active' : ''}>
                            Asia
                        </Nav.Link>
                        <Nav.Link onClick={() => handleNavClick('Europe')} className={country === 'Europe' ? 'active' : ''}>
                            Europe
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;