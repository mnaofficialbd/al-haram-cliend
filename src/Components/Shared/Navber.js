import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Navber = () => {
    return (
        <Navbar style={{ backgroundColor: '#02A3C1' }} expand="md" className='fixed-top'>
            <Container fluid>
                <Navbar.Brand href="/" className='d-flex'>
                
                    </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll >

                    </Nav>
                    <Nav className="d-flex">
                    <div class="">
                        <button class="btn border-0 dropdown-toggle" type="button" data-bs-toggle="dropdown" style={{ fontSize: "14px" }} aria-expanded="false">USD</button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="/">INR</a></li>
                            <li><a class="dropdown-item" href="/">PKR</a></li>
                            <li><a class="dropdown-item" href="/">BDT</a></li>
                            <li><a class="dropdown-item" href="/">MYR</a></li>
                        </ul>
                    </div>
                    <div class="">
                        <button class="btn border-0 dropdown-toggle" type="button" data-bs-toggle="dropdown" style={{ fontSize: "14px" }} aria-expanded="false">ENG</button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="/">HINDI</a></li>
                            <li><a class="dropdown-item" href="/">BANGLA</a></li>
                            <li><a class="dropdown-item" href="/">MALAY</a></li>
                            <li><a class="dropdown-item" href="/">ARABIC</a></li>
                            <li><a class="dropdown-item" href="/">URDU</a></li>
                        </ul>
                    </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navber;