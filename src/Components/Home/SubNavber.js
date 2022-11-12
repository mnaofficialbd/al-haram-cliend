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
                            <li><a class="dropdown-item" href="/">S</a></li>
                            <li><a class="dropdown-item" href="/">S</a></li>
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
                            <li><a class="dropdown-item" href="/">DOLLAR</a></li>
                            <li><a class="dropdown-item" href="/">RUPEE</a></li>
                            <li><a class="dropdown-item" href="/">TAKA</a></li>
                            <li><a class="dropdown-item" href="/">DIRHAM</a></li>
                        </ul>
                    </div>
                    <div class="">
                        <button class="btn border-0 dropdown-toggle" type="button" data-bs-toggle="dropdown" style={{ fontSize: "10px" }} aria-expanded="false">ENG</button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="/">HN</a></li>
                            <li><a class="dropdown-item" href="/">BEN</a></li>
                            <li><a class="dropdown-item" href="/">AR</a></li>
                            <li><a class="dropdown-item" href="/">JA</a></li>
                        </ul>
                    </div>
                </Nav>
            </div>
        </div>
    );
};

export default SubNavber;