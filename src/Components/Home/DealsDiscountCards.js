import React from 'react';
import mokkahImg from '../../Assets/DealsDiscount/mokkah.png';
import tripImg from '../../Assets/DealsDiscount/trip.png';

const DealsDiscountCards = () => {
    return (
        <section className='container mb-4 py-2'>
            <div className="row row-cols-1 row-cols-md-4 g-4">

            <div className="col">
                    <div className="card h-100 ">
                        <img src={tripImg} className="card-img" alt="..." />
                        <div className="card-img-overlay">
                            <h4 className='text-uppercase text-white font-bold' style={{fontSize: '20px'}}>Enjoy Umrah Deals</h4>
                            <h2 className='text-uppercase text-white font-bold' style={{fontSize: '32px'}}>Book Now to enjoy</h2>
                            <button type='button' className='btn btn-light text-uppercase px-4 rounded-0 mt-2'>Book now</button>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card h-100 border-0">
                        <img src={mokkahImg} className="card-img-top" alt="..." />
                        <div className="card-body mt-3 p-0">
                            <div className="">
                                <h4 className="card-title" style={{ fontSize: '24px', color: '#575757' }}>Classic Umrah Package</h4>
                                <div style={{ fontSize: '14px' }}><span className='font-semibold'>Travel Date :</span> 20 Oct 22</div>
                                <h5 style={{ color: '#02A3C1', fontSize: '20px' }}><span className='font-semibold text-black'>Per Person  :</span>  ₹ 120,000</h5>
                            </div>
                            <div className='mt-3'>
                                <button className='primary-btn'>
                                    <p className="font-capitalize font-semibold m-0" >
                                        <span className='' style={{ fontSize: '16px' }}>Al bushra tours & travels</span> <br />
                                        <span className='' style={{ fontSize: '12px' }}>Published date 11 aug 2022</span>
                                    </p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 border-0">
                        <img src={mokkahImg} className="card-img-top" alt="..." />
                        <div className="card-body mt-3 p-0">
                            <div className="">
                                <h4 className="card-title" style={{ fontSize: '24px', color: '#575757' }}>Classic Umrah Package</h4>
                                <div style={{ fontSize: '14px' }}><span className='font-semibold'>Travel Date :</span> 20 Oct 22</div>
                                <h5 style={{ color: '#02A3C1', fontSize: '20px' }}><span className='font-semibold text-black'>Per Person  :</span>  ₹ 120,000</h5>
                            </div>
                            <div className='mt-3'>
                                <button className='primary-btn'>
                                    <p className="font-capitalize font-semibold m-0" >
                                        <span className='' style={{ fontSize: '16px' }}>Al bushra tours & travels</span> <br />
                                        <span className='' style={{ fontSize: '12px' }}>Published date 11 aug 2022</span>
                                    </p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 border-0">
                        <img src={mokkahImg} className="card-img-top" alt="..." />
                        <div className="card-body mt-3 p-0">
                            <div className="">
                                <h4 className="card-title" style={{ fontSize: '24px', color: '#575757' }}>Classic Umrah Package</h4>
                                <div style={{ fontSize: '14px' }}><span className='font-semibold'>Travel Date :</span> 20 Oct 22</div>
                                <h5 style={{ color: '#02A3C1', fontSize: '20px' }}><span className='font-semibold text-black'>Per Person  :</span>  ₹ 120,000</h5>
                            </div>
                            <div className='mt-3'>
                                <button className='primary-btn'>
                                    <p className="font-capitalize font-semibold m-0" >
                                        <span className='' style={{ fontSize: '16px' }}>Al bushra tours & travels</span> <br />
                                        <span className='' style={{ fontSize: '12px' }}>Published date 11 aug 2022</span>
                                    </p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>




            </div>
        </section>
    );
};

export default DealsDiscountCards;