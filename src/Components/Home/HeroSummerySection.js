import React from 'react';

const HeroSummerySection = () => {
    return (
        <section style={{ backgroundColor: '#02A3C1' }}>
            <div className="container">
                <div className="row g-4 text-white">
                    <div className="col-lg-3 col-12 col-md-6 ">
                        <div className=''>
                            <img src="https://i.ibb.co/nkWZkJg/verify-icon.png" className="mx-auto d-block" alt="..." />
                        </div>
                        <div className='text-center'>
                            <h3>1500+</h3>
                            <h3>VERIFIED AGENTS</h3>
                        </div>
                    </div>
                    <div className="col-lg-3 col-12 col-md-6">
                        <div className=''>
                            <img src="https://i.ibb.co/zZ5xjq3/happy-client.png" className="mx-auto d-block" alt="..." />
                        </div>
                        <div className='text-center'>
                            <h3>1 LAKH+</h3>
                            <h3>HAPPY GUESTS</h3>
                        </div>
                    </div>
                    <div className="col-lg-3 col-12 col-md-6">
                        <div className=''>
                            <img src="https://i.ibb.co/7bNCkqD/booking-icon.png" className="mx-auto d-block" alt="..." />
                        </div>
                        <div className='text-center'>
                            <h3>2 LAKH+</h3>
                            <h3>BOOKINGS DONE</h3>
                        </div>
                    </div>
                    <div className="col-lg-3 col-12 col-md-6">
                        <div className=''>
                            <img src="https://i.ibb.co/pRt0XrG/package-icon.png" className="mx-auto d-block" alt="..." />
                        </div>
                        <div className='text-center'>
                            <h3>1K+</h3>
                            <h3>PACKAGES</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSummerySection;