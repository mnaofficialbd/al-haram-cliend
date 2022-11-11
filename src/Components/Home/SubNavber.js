import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import brandIcon from '../../Assets/Icons/al-haram-final-logo.png'
const SubNavber = () => {
    return (
        <div className='d-md-flex justify-content-between align-items-center mt-5 py-3'>
            <div>
                <Nav className="d-flex align-items-center">
                    <Navbar.Brand href="/"><img src={brandIcon} alt="" /></Navbar.Brand>
                    <NavDropdown title="Packages" id="navbarScrollingDropdown" className="text-black" style={{ fontSize: "17px" }} >
                        <NavDropdown.Item href="#action4">
                            Umrah Packages
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action5">
                            Hajj Packages
                        </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="/" className="text-black" style={{ fontSize: "17px" }}>Plan My Umrah</Nav.Link>
                    <Nav.Link href="/" className="text-black" style={{ fontSize: "17px" }}>Catering</Nav.Link>
                    <Nav.Link href="/" className="text-black" style={{ fontSize: "17px" }}>Cabs</Nav.Link>

                </Nav>
            </div>
            <div>
                <Nav className="d-flex">
                    <NavDropdown title="USD" id="navbarScrollingDropdown" style={{ fontSize: "14px" }} >
                        <NavDropdown.Item href="#action3" className="text-uppercase" >USD</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">
                            TAKA
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action5">
                            RUPEE
                        </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="ENG" id="navbarScrollingDropdown" style={{ fontSize: "14px" }}>
                        <NavDropdown.Item href="#action3" className="text-uppercase">ENG</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">
                            Ben
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action5">
                            Hin
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </div>
        </div>
    );
};

export default SubNavber;