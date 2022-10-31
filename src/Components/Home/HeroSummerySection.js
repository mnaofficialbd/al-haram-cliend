import React from 'react';
import verifyIcon from '../../Assets/SummaryIcon/verifyVector.png';
import guestIcon from '../../Assets/SummaryIcon/clientVector.png';
import bookingIcon from '../../Assets/SummaryIcon/bookingVector.png';
import packIcon from '../../Assets/SummaryIcon/packageVector.png';

const HeroSummerySection = () => {
    return (
        <section style={{ backgroundColor: '#02A3C1' }}>
            <div className="container">
                <div className="row g-4 text-white">
                    <div className="col-lg-3 col-12 col-md-6 ">
                        <div className=''>
                            <img src={verifyIcon} className="mx-auto d-block" alt="..." />
                        </div>
                        <div className='text-center'>
                            <h3>1500+</h3>
                            <h3>VERIFIED AGENTS</h3>
                        </div>
                    </div>
                    <div className="col-lg-3 col-12 col-md-6">
                        <div className=''>
                            <img src={guestIcon} className="mx-auto d-block" alt="..." />
                        </div>
                        <div className='text-center'>
                            <h3>1 LAKH+</h3>
                            <h3>HAPPY GUESTS</h3>
                        </div>
                    </div>
                    <div className="col-lg-3 col-12 col-md-6">
                        <div className=''>
                            <img src={bookingIcon} className="mx-auto d-block" alt="..." />
                        </div>
                        <div className='text-center'>
                            <h3>2 LAKH+</h3>
                            <h3>BOOKINGS DONE</h3>
                        </div>
                    </div>
                    <div className="col-lg-3 col-12 col-md-6">
                        <div className=''>
                            <img src={packIcon} className="mx-auto d-block" alt="..." />
                        </div>
                        <div className='text-center'>
                            <h3>1K +</h3>
                            <h3>PACKAGES</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSummerySection;