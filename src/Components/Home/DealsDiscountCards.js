import React from 'react';
import mokkahImg from '../../Assets/DealsDiscount/mokkah.png';
import tripImg from '../../Assets/DealsDiscount/trip.png';

const DealsDiscountCards = () => {

    const datas = [
        { id: 1 },
        { id: 3 },
        { id: 3 }
    ]

    return (
        <section className='container mb-4 py-2'>
            <div className="row row-cols-1 row-cols-md-4 g-4">
                <div className="col">
                    <div className="card ">
                        <img src={tripImg} className="card-img" alt="..." />
                        <div className="card-img-overlay">
                            <h4 className='text-uppercase text-white font-bold' style={{ fontSize: '20px' }}>Enjoy Umrah Deals</h4>
                            <h2 className='text-uppercase text-white font-bold' style={{ fontSize: '32px' }}>Book Now to enjoy</h2>
                            <button type='button' className='btn btn-light text-uppercase px-4 rounded-0 mt-2'>Book now</button>
                        </div>
                    </div>
                </div>

                {
                    datas.map(data => (
                        <div key={data.id} className="col">
                            <div className="card h-100 border-0">
                                <img src={mokkahImg} className="card-img-top" alt="..." />
                                <div className="card-body mt-3 p-0">
                                    <div className="">
                                        <h4 className="card-title" style={{ fontSize: '20px', color: '#575757' }}>Classic Umrah Package</h4>
                                        <p style={{ fontSize: '16px', color: '#575757' }}>Flat 25% Discount</p>
                                        <h5 style={{ color: '#02A3C1', fontSize: '16px' }}><span className='font-semibold' style={{ color: '#575757' }}>Per Person  :</span>  ₹ 120,000</h5>
                                    </div>
                                    <div className='mt-3'>
                                        <button className='primary-btn'>
                                            <span className='font-capitalize font-semibold m-0' style={{ fontSize: '16px' }}>Al bushra tours & travels</span>

                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    )}
            </div>
        </section>
    );
};

export default DealsDiscountCards;