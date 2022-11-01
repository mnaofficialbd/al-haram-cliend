import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import fbLogo from '../../Assets/Footer/fbIcon.png';
import twitLogo from '../../Assets/Footer/twitIcon.png';
import insLogo from '../../Assets/Footer/instaIcon.png';
import whatsapLogo from '../../Assets/Footer/whatsappIcon.png';

const Navber = () => {
    return (
        <Navbar style={{ backgroundColor: '#02A3C1' }} expand="md" className='fixed-top'>
            <Container fluid>
                <Navbar.Brand href="/" className='d-flex'>
                    <img src={fbLogo} alt="" className='me-2' />
                    <img src={twitLogo} alt="" className='me-2' />
                    <img src={insLogo} alt="" className='me-2' />
                    <img src={whatsapLogo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll >

                    </Nav>
                    <Nav className="d-flex">
                        <button className="text-uppercase details-btn me-2">travel agent? join us</button>

                        {/* <NavDropdown title="USD" id="navbarScrollingDropdown" className="">
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
                            </NavDropdown> */}

                        <button className="text-uppercase details-btn">Log in</button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navber;