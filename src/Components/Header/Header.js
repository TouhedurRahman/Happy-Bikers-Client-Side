import React, { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { AuthContext } from '../AuthProvider/AuthProvider';
import CustomLink from '../CustomLink/CustomLink';
import { BiUserCircle } from "react-icons/bi";
import "./Header.css";

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err));
    }

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
                                    <Nav.Link as={CustomLink} to="/home">Home</Nav.Link>
                                    <Nav.Link as={CustomLink} to="/manage-stock">Manage Stock</Nav.Link>
                                    <Nav.Link as={CustomLink} to="/blog">Blog</Nav.Link>
                                    <Nav.Link as={CustomLink} to="/about">About Us</Nav.Link>
                                </Nav>
                                <Nav>
                                    {/* <Nav.Link href="#deets">More</Nav.Link> */}
                                    {
                                        user?.uid
                                        &&
                                        <span className='my-auto' style={{ color: "#382D72", marginRight: "20px" }}>
                                            <BiUserCircle></BiUserCircle>
                                            {
                                                user?.uid && user.displayName
                                            }
                                        </span>
                                    }

                                    {
                                        user?.uid
                                            ?
                                            <Nav.Link as={CustomLink} onClick={handleLogout}>
                                                Logout
                                            </Nav.Link>
                                            :
                                            <Nav.Link as={CustomLink} to='/login'>
                                                Login
                                            </Nav.Link>
                                    }
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