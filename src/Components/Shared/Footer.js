import React from 'react';
import alHaramLogo from '../../Assets/UltimateCompanion/alHaramLogo.png';
import pStore from '../../Assets/UltimateCompanion/playStoreLogo.png';
import aStore from '../../Assets/UltimateCompanion/aStoreLogo.png';
import fbLogo from '../../Assets/Footer/fbIcon.png';
import twitLogo from '../../Assets/Footer/twitIcon.png';
import insLogo from '../../Assets/Footer/instaIcon.png';
import linLogo from '../../Assets/Footer/linkedInVector.png';
import locationLogo from '../../Assets/Footer/LocationVactor.png';
import mailWLogo from '../../Assets/Footer/mailVectorWhite.png';
import phoneLogo from '../../Assets/Footer/PhoneVector.png';
import mailLogo from '../../Assets/Footer/mailVector.png';
import whatsapLogo from '../../Assets/Footer/whatsappIcon.png';

const Footer = () => {
    return (
        <footer className='p-5 mt-5' style={{ background: '#02A3C1' }}>
            <div className="d-md-flex justify-content-between">
                <div className="m-4">
                    <div>
                        <img src={alHaramLogo} alt="" />
                    </div>
                    <p className="text-capitalize text-white"> 
                        One of the most trusted travel group providing best <br></br>
                        services with to its clients since decades. Our director’s <br></br>
                        lorem ipsum a sons of Maxim’s founder lorem ipsum, <br></br>
                        are running these companies.lorem ipsum and glow is <br></br>
                        offering personalised services at every step, as not only 
                    </p>
                    <div className="d-flex">
                        <div className='me-2'>
                            <img src={fbLogo} alt="" />
                        </div>
                        <div className='me-2'>
                            <img src={twitLogo} alt="" />
                        </div>
                        <div className='me-2'>
                            <img src={insLogo} alt="" />
                        </div>
                        <div className='me-2'>
                            <img src={linLogo} alt="" />
                        </div>
                    </div>
                </div>
                <div class="text-white m-4">
                    <h5>COMPANY</h5>
                    <ul class="nav flex-column">
                        <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-white">Home</a></li>
                        <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-white">About Us</a></li>
                        <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-white">Faq</a></li>
                        <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-white">Services</a></li>
                        <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-white">Blog</a></li>
                    </ul>
                </div>
                <div class="text-white m-4">
                    <h5>EXPLORE</h5>
                    <ul class="nav flex-column">
                        <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-white">Umrah Packages</a></li>
                        <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-white">Hajj Packages</a></li>
                        <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-white">Hotels</a></li>
                        <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-white">Flights</a></li>
                        <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-white">Umrah Guide</a></li>
                        <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-white">Hajj Guide</a></li>
                    </ul>
                </div>
                <div class="text-white m-4">
                    <h5>GET IN TOUCH</h5>
                    <ul class="nav flex-column">
                        <li class="nav-item ">
                            <div className="d-flex align-items-center">
                                <div>
                                    <img src={locationLogo} alt="" />
                                </div>
                                <div>
                                    <a href="/" class="nav-link p-0 text-white">
                                        <p>
                                            Al Haram <br />
                                            Al-Aqsa Business Park 8711, Alrehab <br />
                                            Dist. Jeddah, Unit No 310, Saudi Arabia
                                        </p>
                                    </a>
                                </div>
                            </div>
                        </li>
                        <li class="nav-item">
                            <div className="d-flex">
                                <div>
                                    <img src={mailWLogo} alt="" />
                                </div>
                                <div>
                                    <a href="/" class="nav-link p-0 text-white">
                                        <p className='px-2'>support@alharam.com</p>
                                    </a>
                                </div>
                            </div>
                        </li>
                        <li class="nav-item">
                            <div className="d-flex">
                                <div>
                                    <img src={phoneLogo} alt="" />
                                </div>
                                <div>
                                    <a href="/" class="nav-link p-0 text-white">
                                        <p>+91 121345678910</p>
                                    </a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="text-white m-4">
                    <h6 className='font-bold' style={{ fontSize: '24px' }}>Download The App</h6>
                    <div className="d-flex border border-light text-white my-3 align-items-center p-2">
                        <div className='p-2'>
                            <img src={pStore} alt="" style={{ width: '36px' }} />
                        </div>
                        <div className='text-center'>
                            <p className='m-0' style={{ fontSize: '10px' }}>Android App Available On</p>
                            <p className='m-0' style={{ fontSize: '14px' }}>Google Play Store</p>
                        </div>
                    </div>
                    <div className="d-flex border border-light text-white my-3 align-items-center p-2">
                        <div className='p-2'>
                            <img src={aStore} alt="" style={{ width: '36px' }} />
                        </div>
                        <div className='text-center'>
                            <p className='m-0' style={{ fontSize: '10px' }}>Ios App Available On</p>
                            <p className='m-0' style={{ fontSize: '14px' }}>App Store</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-md-flex justify-content-between text-center align-items-center mt-4">
                <div className="">
                    <p className='text-capitalize text-white'>
                        <span className="font-bold">Newsletter : </span>subscribe to our newsletter to get your weekly dose of news
                    </p>
                </div>
                <div className="">
                    <div className="d-flex justify-content-center bg-white my-2 align-items-center">
                        <img src={whatsapLogo} alt="" className='m-2 p-2' />
                        <p className='text-capitalize pe-2'>subscribe to our whatsapp channel</p>
                    </div>
                    <div className="d-flex justify-content-center bg-white my-2 align-items-center">
                        <div>
                            <img src={mailLogo} alt="" className='m-2 p-2' />
                        </div>
                        <div className='d-flex align-items-center'>
                            <div>
                                <p className='text-capitalize'>enter your email adress</p>
                            </div>
                            <div className="border border-dark mx-2" style={{ height: '45px' }}></div>
                            <div>
                                <p className='text-uppercase'>Submit</p>
                            </div>
                        </div>

                    </div>
                    <div><p className="text-white text-end">Terms of Use | Privacy Policy</p></div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;