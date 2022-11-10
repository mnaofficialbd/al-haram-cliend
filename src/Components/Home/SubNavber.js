import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import brandIcon from '../../Assets/Icons/al-haram-final-logo.png'
const SubNavber = () => {
    return (
        <div className='d-md-flex justify-content-between align-items-center mt-5 py-3'>
            <div>
                <Nav className="d-flex align-items-center">
                    <Navbar.Brand href="/"><img src={brandIcon} alt="" /></Navbar.Brand>
                    <NavDropdown title="Packages" id="navbarScrollingDropdown" className="text-black" style={{ fontSize: "28px" }} >
                        <NavDropdown.Item href="#action4">
                            Umrah Packages
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action5">
                            Hajj Packages
                        </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="/" className="text-black" style={{ fontSize: "28px" }}>Plan My Umrah</Nav.Link>
                    <Nav.Link href="/" className="text-black" style={{ fontSize: "28px" }}>Catering</Nav.Link>
                    <Nav.Link href="/" className="text-black" style={{ fontSize: "28px" }}>Cabs</Nav.Link>

                </Nav>
            </div>
            <div>
                <Nav className="d-flex">
                    {/* <Nav.Link href="/" className="text-uppercase text-black">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="mx-2 bi bi-airplane" viewBox="0 0 16 16">
                            <path d="M6.428 1.151C6.708.591 7.213 0 8 0s1.292.592 1.572 1.151C9.861 1.73 10 2.431 10 3v3.691l5.17 2.585a1.5 1.5 0 0 1 .83 1.342V12a.5.5 0 0 1-.582.493l-5.507-.918-.375 2.253 1.318 1.318A.5.5 0 0 1 10.5 16h-5a.5.5 0 0 1-.354-.854l1.319-1.318-.376-2.253-5.507.918A.5.5 0 0 1 0 12v-1.382a1.5 1.5 0 0 1 .83-1.342L6 6.691V3c0-.568.14-1.271.428-1.849Zm.894.448C7.111 2.02 7 2.569 7 3v4a.5.5 0 0 1-.276.447l-5.448 2.724a.5.5 0 0 0-.276.447v.792l5.418-.903a.5.5 0 0 1 .575.41l.5 3a.5.5 0 0 1-.14.437L6.708 15h2.586l-.647-.646a.5.5 0 0 1-.14-.436l.5-3a.5.5 0 0 1 .576-.411L15 11.41v-.792a.5.5 0 0 0-.276-.447L9.276 7.447A.5.5 0 0 1 9 7V3c0-.432-.11-.979-.322-1.401C8.458 1.159 8.213 1 8 1c-.213 0-.458.158-.678.599Z" />
                        </svg>
                         Flights</Nav.Link>
                    <Nav.Link href="/" className="text-uppercase text-black"> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className='mx-2' viewBox="0 0 640 512"><path d="M64 160C64 89.3 121.3 32 192 32H448c70.7 0 128 57.3 128 128v33.6c-36.5 7.4-64 39.7-64 78.4v48H128V272c0-38.7-27.5-71-64-78.4V160zM544 272c0-20.9 13.4-38.7 32-45.3c5-1.8 10.4-2.7 16-2.7c26.5 0 48 21.5 48 48V448c0 17.7-14.3 32-32 32H576c-17.7 0-32-14.3-32-32H96c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V272c0-26.5 21.5-48 48-48c5.6 0 11 1 16 2.7c18.6 6.6 32 24.4 32 45.3v48 32h32H512h32V320 272z"/></svg>
                    Hotels</Nav.Link>
                    <Nav.Link href="/" className="text-uppercase text-black">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className='mx-2' viewBox="0 0 448 512">
                        <path d="M224 0C348.8 0 448 35.2 448 80V96 416c0 17.7-14.3 32-32 32v32c0 17.7-14.3 32-32 32H352c-17.7 0-32-14.3-32-32V448H128v32c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32l0-32c-17.7 0-32-14.3-32-32V96 80C0 35.2 99.2 0 224 0zM64 128V256c0 17.7 14.3 32 32 32H352c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32H96c-17.7 0-32 14.3-32 32zM80 400c17.7 0 32-14.3 32-32s-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32zm288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32z"/></svg>
                        Buses</Nav.Link>
                    <Nav.Link href="/" className="text-uppercase text-black">Catering</Nav.Link>
                    <Nav.Link href="/" className="text-uppercase text-black">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-car-front-fill mx-2" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M2.52 3.515A2.5 2.5 0 0 1 4.82 2h6.362c1 0 1.904.596 2.298 1.515l.792 1.848c.075.175.21.319.38.404.5.25.855.715.965 1.262l.335 1.679c.033.161.049.325.049.49v.413c0 .814-.39 1.543-1 1.997V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.338c-1.292.048-2.745.088-4 .088s-2.708-.04-4-.088V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.892c-.61-.454-1-1.183-1-1.997v-.413a2.5 2.5 0 0 1 .049-.49l.335-1.68c.11-.546.465-1.012.964-1.261a.807.807 0 0 0 .381-.404l.792-1.848ZM3 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM6 8a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2H6ZM2.906 5.189l.956-1.913A.5.5 0 0 1 4.309 3h7.382a.5.5 0 0 1 .447.276l.956 1.913a.51.51 0 0 1-.497.731c-.91-.073-3.35-.17-4.597-.17-1.247 0-3.688.097-4.597.17a.51.51 0 0 1-.497-.731Z" />
                        </svg>
                         Cabs
                    </Nav.Link> */}
                    <NavDropdown title="USD" id="navbarScrollingDropdown" style={{ fontSize: "20px" }} >
                        <NavDropdown.Item href="#action3" className="text-uppercase" >USD</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">
                            TAKA
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action5">
                            RUPEE
                        </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="ENG" id="navbarScrollingDropdown" style={{ fontSize: "20px" }}>
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