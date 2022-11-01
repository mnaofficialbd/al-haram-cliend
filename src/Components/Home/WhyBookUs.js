import React from 'react';
import easyImg from '../../Assets/Footer/easyVector.png';
import priceImg from '../../Assets/Footer/priceVector.png';
import dealsImg from '../../Assets/Footer/dealsVector.png';
import supportImg from '../../Assets/Footer/SupportVector.png';

const WhyBookUs = () => {

    return (
        <section className='mt-5 py-4 text-white'>
            <div style={{ background: '#02A3C1' }}>
                <div className=" container d-flex justify-content-around align-items-center">
                    <div className='my-4 py-2'>
                        <h4 className='font-semibold text-uppercase' style={{ fontSize: '48px' }}>Why Choose Us ?</h4>
                        <p className='font-bold my-3 text-capitalize' style={{ fontSize: '32px' }}>
                            Al-Haram Trip is a Worlds Leading 
                            <br />
                            Religious Travel Booking Platform</p>
                        <p className='' style={{ fontSize: '24px' }}>
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris <br />
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in <br />
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
                        </p>
                        <button className="details-btn text-uppercase"> View more</button>
                    </div>
                    <div className="">
                        <div className="d-flex">
                            <div className='bg-white px-3 m-2'>
                                <img src={easyImg} alt="" style={{ width: '80px', padding: '5px' }} />
                                <p style={{ fontSize: '16px', color: '#034A57' }}>Exciting Deals</p>
                            </div>
                            <div className='bg-white px-3 m-2'>
                                <img src={supportImg} alt="" style={{ width: '80px', padding: '5px' }} />
                                <p style={{ fontSize: '16px', color: '#034A57' }}>24/7 Support</p>
                            </div>
                        </div>
                        <div className="d-flex">
                            <div className='bg-white px-3 m-2'>
                                <img src={dealsImg} alt="" style={{ width: '80px', padding: '5px' }} />
                                <p style={{ fontSize: '16px', color: '#034A57' }}>Easy Booking</p>
                            </div>
                            <div className='bg-white px-3 m-2'>
                                <img src={priceImg} alt="" style={{ width: '80px', padding: '2px' }} />
                                <p style={{ fontSize: '16px', color: '#034A57' }}>Lowest Price</p>
                            </div>
                        </div>

                        {/* <img src={mobileFrame} alt="" className=" px-2" style={{ width: '260px' }} /> */}
                    </div>
                    {/* <div className="">
                        <p className='align-items-center text-center font-uppercase font-semibold' style={{ fontSize: '48px' }}>Why Choose Us ?</p>
                    </div>
                    {
                        bookDatas.map(bookData =>
                        (<div key={bookData?.id} className="align-items-center">
                            <div className='d-flex m-1 align-items-center'>
                                <div className='p-2'>
                                    <img src={bookData?.img} alt="" style={{ width: '40px'}} />
                                </div>
                                <div>
                                    <h6 className='text-center mx-2' style={{ fontSize: '32px' }}>{bookData?.title}</h6>
                                </div>
                            </div>
                        </div>)
                        )
                    } */}



                </div>
            </div>

        </section>
    );
};

export default WhyBookUs;