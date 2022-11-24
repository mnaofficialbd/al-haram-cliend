import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import brandIcon from '../../Assets/Icons/al-haram-final-logo.png'
const SubNavber = () => {
    return (
        <div className='d-flex justify-content-between align-items-center mt-5 py-3'>
            <div>
                <Nav className="d-flex align-items-center">
                    <li>
                        <a href="/" style={{ marginLeft: '60px', marginRight: '60px' }}>
                            <img src={brandIcon} alt="" className=' navBrand' />
                        </a>
                    </li>
                    <li><NavLink to='/umrah' className='text-uppercase details-btn me-2'>Plan My Umrah</NavLink></li>

                    <div class="">
                        <button class="btn border-0 dropdown-toggle" type="button" data-bs-toggle="dropdown" style={{ fontSize: "14px" }} aria-expanded="false">Packages</button>
                        <ul class="dropdown-menu">
                            <li>
                                <NavLink to='/umrah' className='dropdown-item'>Umrah Packages</NavLink>
                            </li>
                            <li><a class="dropdown-item" href="/">Hajj Packages</a></li>
                            <li><a class="dropdown-item" href="/">Land Packages</a></li>
                            <li><a class="dropdown-item" href="/">Top Selling Package</a></li>
                            <li><a class="dropdown-item" href="/">New Package</a></li>
                        </ul>
                    </div>

                    <Nav.Link href="/flights" className="text-black" style={{ fontSize: "14px" }}>Flights</Nav.Link>
                    <Nav.Link href="/hotel" className="text-black" style={{ fontSize: "14px" }}>Hotel</Nav.Link>
                    <Nav.Link href="/" className="text-black" style={{ fontSize: "14px" }}>Explore</Nav.Link>
                    <Nav.Link href="/" className="text-black" style={{ fontSize: "14px" }}>Cabs</Nav.Link>
                    <Nav.Link href="/" className="text-black" style={{ fontSize: "14px" }}>Catering</Nav.Link>

                </Nav>
            </div>
            <div>
                <Nav className="d-flex">
                    <Nav className="d-flex">
                        <button className="text-uppercase details-btn me-3">Become an agent</button>
                        <button className="text-uppercase details-btn me-4">Log in</button>
                    </Nav>

                </Nav>
            </div>
        </div>
    );
};

export default SubNavber;