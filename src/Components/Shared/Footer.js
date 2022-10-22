import React from 'react';
import alHaramLogo from '../../Assets/UltimateCompanion/alHaramLogo.png';
import pStore from '../../Assets/UltimateCompanion/playStoreLogo.png';
import aStore from '../../Assets/UltimateCompanion/aStoreLogo.png';
import fbLogo from '../../Assets/Footer/fbIcon.png';
import twitLogo from '../../Assets/Footer/twitIcon.png';
import insLogo from '../../Assets/Footer/instaIcon.png';
import linLogo from '../../Assets/Footer/linkedInVector.png';

const Footer = () => {
    return (
        <footer className='p-5' style={{ background: '#02A3C1' }}>
            <div className="row">
                <div className="col-3">
                    <div>
                        <img src={alHaramLogo} alt="" />
                    </div>
                    <p className="text-capitalize text-white">
                        One of the most trusted travel group providing best services with to its clients since decades. Our director’s lorem ipsum a sons of Maxim’s founder lorem ipsum, are running these companies.lorem ipsum and glow is offering personalised services at every step, as not only a travel agency but also for exclusive.
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
                <div class="col-2 text-white">
                    <h5>Section</h5>
                    <ul class="nav flex-column">
                        <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-white">Home</a></li>
                        <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-white">Features</a></li>
                        <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-white">Pricing</a></li>
                        <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-white">FAQs</a></li>
                        <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-white">About</a></li>
                    </ul>
                </div>
                <div class="col-2 text-white">
                    <h5>Section</h5>
                    <ul class="nav flex-column">
                        <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-white">Home</a></li>
                        <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-white">Features</a></li>
                        <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-white">Pricing</a></li>
                        <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-white">FAQs</a></li>
                        <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-white">About</a></li>
                        <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-white">About</a></li>
                    </ul>
                </div>
                <div class="col-3 text-white">
                    <h5>Section</h5>
                    <ul class="nav flex-column">
                        <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-white">Home</a></li>
                        <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-white">Features</a></li>
                        <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-white">Pricing</a></li>
                    </ul>
                </div>
                <div className="text-white col-2">
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
            <div className="row">
                <div className="col-6"></div>
                <div className="col-6"></div>
            </div>
        </footer>
    );
};

export default Footer;