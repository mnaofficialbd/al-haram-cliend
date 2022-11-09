import React from 'react';
import landPacksBus from '../../Assets/ClassicPackages/landPackBus.png'

const LandPacksCards = () => {

    return (
        <section className='container mt-4 py-2'>
            <div className="row row-cols-1 row-cols-md-4 g-4">

                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">

                            <div className="col">
                                <div className="card h-100 border-0">
                                    <img src={landPacksBus} className="card-img-top" alt="..." />
                                    <div className="card-body mt-3 p-0">
                                        <div className="">
                                            <h4 className="card-title" style={{ fontSize: '20px', color: '#575757' }}>Classic Umrah Package</h4>
                                            <p style={{ fontSize: '16px', color: '#575757' }}>Flat 25% Discount</p>
                                            <h5 style={{ color: '#02A3C1', fontSize: '16px' }}><span className='font-semibold' style={{ color: '#575757' }}>Per Person  :</span>  ₹ 120,000</h5>
                                        </div>
                                        <div className='mt-3'>
                                            <button className='primary-btn'>
                                                <span className='font-capitalize font-semibold ' style={{ fontSize: '16px' }}>Al bushra tours & travels</span>

                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="carousel-item">

                            <div className="col">
                                <div className="card h-100 border-0">
                                    <img src={landPacksBus} className="card-img-top" alt="..." />
                                    <div className="card-body mt-3 p-0">
                                        <div className="">
                                            <h4 className="card-title" style={{ fontSize: '20px', color: '#575757' }}>Classic Umrah Package</h4>
                                            <p style={{ fontSize: '16px', color: '#575757' }}>Flat 25% Discount</p>
                                            <h5 style={{ color: '#02A3C1', fontSize: '16px' }}><span className='font-semibold' style={{ color: '#575757' }}>Per Person  :</span>  ₹ 120,000</h5>
                                        </div>
                                        <div className='mt-3'>
                                            <button className='primary-btn'>
                                                <span className='font-capitalize font-semibold ' style={{ fontSize: '16px' }}>Al bushra tours & travels</span>

                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="carousel-item">

                            <div className="col">
                                <div className="card h-100 border-0">
                                    <img src={landPacksBus} className="card-img-top" alt="..." />
                                    <div className="card-body mt-3 p-0">
                                        <div className="">
                                            <h4 className="card-title" style={{ fontSize: '20px', color: '#575757' }}>Classic Umrah Package</h4>
                                            <p style={{ fontSize: '16px', color: '#575757' }}>Flat 25% Discount</p>
                                            <h5 style={{ color: '#02A3C1', fontSize: '16px' }}><span className='font-semibold' style={{ color: '#575757' }}>Per Person  :</span>  ₹ 120,000</h5>
                                        </div>
                                        <div className='mt-3'>
                                            <button className='primary-btn'>
                                                <span className='font-capitalize font-semibold ' style={{ fontSize: '16px' }}>Al bushra tours & travels</span>

                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>


            </div>
        </section>
    );
};

export default LandPacksCards;