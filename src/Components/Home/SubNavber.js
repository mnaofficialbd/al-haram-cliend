import React from 'react';
import { Nav } from 'react-bootstrap';
import flightVector from '../../Assets/NavberIcons/flightVector.png';
import hotelVector from '../../Assets/NavberIcons/hotelVector.png';
import busVector from '../../Assets/NavberIcons/busVector.png';
import cabsVector from '../../Assets/NavberIcons/cabsVector.png';
import caterVector from '../../Assets/NavberIcons/caterVactor.png';

const SubNavber = () => {
    return (
        <div className='d-flex justify-content-between mt-5 py-3'>
            <div>
                <Nav className="d-flex">
                    <Nav.Link href="/" className="text-uppercase text-black"><button className='details-btn'>Plan My Umrah</button></Nav.Link>
                    <Nav.Link href="/" className="text-uppercase text-black">Umrah Packages</Nav.Link>
                    <Nav.Link href="/" className="text-uppercase text-black">Hajj Packages</Nav.Link>
                    <Nav.Link href="/" className="text-uppercase text-black">Explore Saudi Arabia</Nav.Link>
                </Nav>
            </div>
            <div>
            <Nav className="d-flex">
                    <Nav.Link href="/" className="text-uppercase text-black"><img src={flightVector} alt="" /> Flights</Nav.Link>
                    <Nav.Link href="/" className="text-uppercase text-black"><img src={hotelVector} alt="" /> Hotels</Nav.Link>
                    <Nav.Link href="/" className="text-uppercase text-black"><img src={busVector} alt="" /> Buses</Nav.Link>
                    <Nav.Link href="/" className="text-uppercase text-black"><img src={cabsVector} alt="" /> Cabs</Nav.Link>
                    <Nav.Link href="/" className="text-uppercase text-black"><img src={caterVector} alt="" /> Catering</Nav.Link>
                </Nav>
            </div>
        </div>
    );
};

export default SubNavber;