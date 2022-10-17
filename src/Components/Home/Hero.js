import React from 'react';
import bgImg from '../../Assets/Backgrounds/alHaramTopBennerBg.png';

const Hero = () => {
    return (
        <div style={{ background: `url(${bgImg})`,backgroundSize: 'cover'}} className='bg-dark px-10 py-14 '>
            <div className="container py-4">
                {/* top title part */}
                <div className='text-center my-10 py-4 text-white'>
                    <h1 className='text-[32px] text-bold text-uppercase'>budget-friendly & luxury package for a convenient hajj & umrah journey to the holly makkah & madina for muslim brothers & sisters</h1>
                </div>

                {/* select part */}
                <div className='my-4'>
                    <div class="row g-4 bg-white py-4">
                        <div class="col-lg-2 col-6 col-md-4">
                            <div className='text-center'>
                                <h3>1500+</h3>
                            </div>
                        </div>
                        <div class="col-lg-2 col-6 col-md-4">
                            <div className='text-center'>
                                <h3>1500+</h3>
                            </div>
                        </div>
                        <div class="col-lg-2 col-6 col-md-4">
                            <div className='text-center'>
                                <h3>1500+</h3>
                            </div>
                        </div>
                        <div class="col-lg-2 col-6 col-md-4">
                            <div className='text-center'>
                                <h3>1500+</h3>
                            </div>
                        </div>
                        <div class="col-lg-2 col-6 col-md-4">
                            <div className='text-center'>
                                <h3>1500+</h3>
                            </div>
                        </div>
                        <div class="col-lg-2 col-6 col-md-4">
                            <div className='text-center'>
                                <h3>1500+</h3>
                            </div>
                        </div>
                    </div>
                </div>

                {/* summery part */}
                <div class="row g-4 text-white">
                    <div class="col-lg-3 col-12 col-md-6 ">
                        <div className=''>
                            <img src="https://i.ibb.co/nkWZkJg/verify-icon.png" class="mx-auto d-block" alt="..." />
                        </div>
                        <div className='text-center'>
                            <h3>1500+</h3>
                            <h3>VERIFIED AGENTS</h3>
                        </div>
                    </div>
                    <div class="col-lg-3 col-12 col-md-6">
                        <div className=''>
                            <img src="https://i.ibb.co/zZ5xjq3/happy-client.png" class="mx-auto d-block" alt="..." />
                        </div>
                        <div className='text-center'>
                            <h3>1 LAKH+</h3>
                            <h3>HAPPY GUESTS</h3>
                        </div>
                    </div>
                    <div class="col-lg-3 col-12 col-md-6">
                        <div className=''>
                            <img src="https://i.ibb.co/7bNCkqD/booking-icon.png" class="mx-auto d-block" alt="..." />
                        </div>
                        <div className='text-center'>
                            <h3>2 LAKH+</h3>
                            <h3>BOOKINGS DONE</h3>
                        </div>
                    </div>
                    <div class="col-lg-3 col-12 col-md-6">
                        <div className=''>
                            <img src="https://i.ibb.co/pRt0XrG/package-icon.png" class="mx-auto d-block" alt="..." />
                        </div>
                        <div className='text-center'>
                            <h3>1K+</h3>
                            <h3>PACKAGES</h3>
                        </div>
                    </div>



                </div>
            </div>
        </div>
    );
};

export default Hero;