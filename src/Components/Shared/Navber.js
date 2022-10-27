import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import brandIcon from '../../Assets/Icons/alHaramIcon.png';

const Navber = () => {
    return (
        <Navbar style={{ backgroundColor: '#02A3C1' }} expand="md" className='fixed-top'>
                <Container fluid>
                    <Navbar.Brand href="/"><img src={brandIcon} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll >

                        </Nav>
                        <Nav className="d-flex">
                            <Nav.Link href="/" className="text-uppercase text-white">travel agent? join us</Nav.Link>

                            <NavDropdown title="USD" id="navbarScrollingDropdown" className="">
                                <NavDropdown.Item href="#action3" className="text-uppercase">USD</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">
                                    TAKA
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action5">
                                    RUPEE
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="ENG" id="navbarScrollingDropdown" className='text-white'>
                                <NavDropdown.Item href="#action3" className="text-uppercase">ENG</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">
                                    Ben
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action5">
                                    Hin
                                </NavDropdown.Item>
                            </NavDropdown>

                            <Button className="text-uppercase mx-2" variant="outline-light">Log in</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar> 
    );
};

export default Navber;