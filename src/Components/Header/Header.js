import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import "./Header.css";

const Header = () => {
    return (
        <div>
            <Container fluid>
                <div className="nav-section">
                    <Navbar collapseOnSelect expand="lg">
                        <Container>
                            <img width='50px' height='30%' className='me-1' src="../../../images/site-logo/bike-shop-logo.png" alt="" />
                            <Navbar.Brand href="#home">Happy Bikers</Navbar.Brand>

                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="me-auto">
                                    <Nav.Link href="/home">Home</Nav.Link>
                                    <Nav.Link href="/manage-stock">Manage Stock</Nav.Link>
                                    <Nav.Link href="/blog">Blog</Nav.Link>
                                    <Nav.Link href="/about">About Us</Nav.Link>
                                </Nav>
                                <Nav>
                                    <Nav.Link href="#deets">More</Nav.Link>
                                    <Nav.Link href="#deets">Login</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
            </Container>
        </div>
    );
};

export default Header;