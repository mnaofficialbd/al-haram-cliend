import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const Navber = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">Al Haram</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll >
                        {/* <Nav.Link href="#action1">Home</Nav.Link>

<Nav.Link href="#"> Link </Nav.Link> */}
                    </Nav>
                    <Nav className="d-flex">
                        <Nav.Link href="#action2" className="text-uppercase">travel agent? join us</Nav.Link>
                        <Nav.Link href="#action2" className="text-uppercase">blogs</Nav.Link>
                        <Nav.Link href="#action2" className="text-uppercase">offers</Nav.Link>
                        <Nav.Link href="#action2" className="text-uppercase">Download app</Nav.Link>

                        <div class="border border-dark d-flex">

                            <NavDropdown title="USD" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3" className="text-uppercase">USD</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">
                                    Taka
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Rup
                                </NavDropdown.Item>
                            </NavDropdown>
                            <div class="border border-dark"></div>
                            <NavDropdown title="ENG" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3" className="text-uppercase">ENG</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">
                                    Ben
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Hin
                                </NavDropdown.Item>
                            </NavDropdown>
                        </div>

                        <Button className="text-uppercase mx-2" variant="outline-success">Log in</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navber;