import React from 'react';
import PPack1 from '../../Assets/PremiumPackages/PPack1.png';
import PPack2 from '../../Assets/PremiumPackages/PPack2.png';
import PPack3 from '../../Assets/PremiumPackages/PPack3.png';
import PPack4 from '../../Assets/PremiumPackages/PPack4.png';

const OffersDiscountsCards = () => {
    return (
        <section className='container my-4 py-4'>
            <div className="row row-cols-1 row-cols-md-4 g-4">

                <div className="col">
                    <div className="card h-100">
                        <img src={PPack1} className="card-img-top" alt="..." />
                        <div className="card-header" style={{ backgroundColor: '#02A3C1' }}>
                            <div className="">
                                <h5 className="text-center text-white text-[20px]">Premuium Umrah Package</h5>
                            </div>
                        </div>
                        <div className="card-body p-0">
                            <h4 className="card-title text-center text-[20px] py-2">Al Bushra Tour & Travels</h4>
                            <div className="text-[13px] text-center my-2"><small className='bg-1 p-1'>we are offering 25% discount on all packages</small> </div>
                        </div>
                        <div className="py-2">
                            <div className="d-flex justify-content-center align-items-center">
                                <div><button className='details-btn'>View Details</button></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={PPack2} className="card-img-top" alt="..." />
                        <div className="card-header" style={{ backgroundColor: '#02A3C1' }}>
                            <div className="">
                                <h5 className="text-center text-white text-[20px]">Premuium Umrah Package</h5>
                            </div>
                        </div>
                        <div className="card-body p-0">
                            <h4 className="card-title text-center text-[20px] py-2">Al Bushra Tour & Travels</h4>
                            <div className="text-[13px] text-center my-2"><small className='bg-2 p-1'>we are offering 25% discount on all packages</small> </div>
                        </div>
                        <div className="py-2">
                            <div className="d-flex justify-content-center align-items-center">
                                <div><button className='details-btn'>View Details</button></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={PPack3} className="card-img-top" alt="..." />
                        <div className="card-header" style={{ backgroundColor: '#02A3C1' }}>
                            <div className="">
                                <h5 className="text-center text-white text-[20px]">Premuium Umrah Package</h5>
                            </div>
                        </div>
                        <div className="card-body p-0">
                            <h4 className="card-title text-center text-[20px] py-2">Al Bushra Tour & Travels</h4>
                            <div className="text-[13px] text-center my-2"><small className='bg-3 p-1'>we are offering 25% discount on all packages</small> </div>
                        </div>
                        <div className="py-2">
                            <div className="d-flex justify-content-center align-items-center">
                                <div><button className='details-btn'>View Details</button></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={PPack4} className="card-img-top" alt="..." />
                        <div className="card-header" style={{ backgroundColor: '#02A3C1' }}>
                            <div className="">
                                <h5 className="text-center text-white text-[20px]">Premuium Umrah Package</h5>
                            </div>
                        </div>
                        <div className="card-body p-0">
                            <h4 className="card-title text-center text-[20px] py-2">Al Bushra Tour & Travels</h4>
                            <div className="text-[13px] text-center my-2"><small className='bg-4 p-1'>we are offering 25% discount on all packages</small> </div>
                        </div>
                        <div className="py-2">
                            <div className="d-flex justify-content-center align-items-center">
                                <div><button className='details-btn'>View Details</button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OffersDiscountsCards;