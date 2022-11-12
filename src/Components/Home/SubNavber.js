import React from 'react';
import { Nav } from 'react-bootstrap';
import brandIcon from '../../Assets/Icons/al-haram-final-logo.png'
const SubNavber = () => {
    return (
        <div className='d-flex justify-content-between align-items-center mt-5 py-3'>
            <div>
                <Nav className="d-flex align-items-center">
                    <li>
                        <a href="/" className=''>
                            <img src={brandIcon} alt="" className=' navBrand' />
                        </a>
                    </li>
                    <div class="">
                        <button class="btn border-0 dropdown-toggle" type="button" data-bs-toggle="dropdown" style={{ fontSize: "10px" }} aria-expanded="false">Packages</button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="/">Umrah Packages</a></li>
                            <li><a class="dropdown-item" href="/">Hajj Packages</a></li>
                            <li><a class="dropdown-item" href="/">Land Packages</a></li>
                            <li><a class="dropdown-item" href="/">Top Selling Package</a></li>
                            <li><a class="dropdown-item" href="/">New Package</a></li>
                        </ul>
                    </div>
                    <Nav.Link href="/" className="text-black" style={{ fontSize: "10px" }}>Plan My Umrah</Nav.Link>
                    <Nav.Link href="/" className="text-black" style={{ fontSize: "10px" }}>Catering</Nav.Link>
                    <Nav.Link href="/" className="text-black" style={{ fontSize: "10px" }}>Cabs</Nav.Link>

                </Nav>
            </div>
            <div>
                <Nav className="d-flex">
                    <div class="">
                        <button class="btn border-0 dropdown-toggle" type="button" data-bs-toggle="dropdown" style={{ fontSize: "10px" }} aria-expanded="false">USD</button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="/">INR</a></li>
                            <li><a class="dropdown-item" href="/">PKR</a></li>
                            <li><a class="dropdown-item" href="/">BDT</a></li>
                            <li><a class="dropdown-item" href="/">MYR</a></li>
                        </ul>
                    </div>
                    <div class="">
                        <button class="btn border-0 dropdown-toggle" type="button" data-bs-toggle="dropdown" style={{ fontSize: "10px" }} aria-expanded="false">ENG</button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="/">HINDI</a></li>
                            <li><a class="dropdown-item" href="/">BANGLA</a></li>
                            <li><a class="dropdown-item" href="/">MALAY</a></li>
                            <li><a class="dropdown-item" href="/">ARABIC</a></li>
                            <li><a class="dropdown-item" href="/">URDU</a></li>
                        </ul>
                    </div>
                </Nav>
            </div>
        </div>
    );
};

export default SubNavber;