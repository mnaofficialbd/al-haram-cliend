import React from 'react';
import makkahImg from '../../Assets/SpecialOffer/mokka.png';
import planeImg from '../../Assets/SpecialOffer/plane.png';
import roomImg from '../../Assets/SpecialOffer/room.png';

const SpecialOffer = () => {
    return (
        <section className='container'>
            <div className="text-center my-5">
                <h3 className='text-uppercase' style={{ fontSize: '40px' }}>Special Offers</h3>
                <p className="text-capitalize" style={{ color: '#777777', fontSize: '24px' }}>These popular destinations have a lot to offer</p>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card h-100 ">
                        <img src={makkahImg} className="card-img" alt="..." />
                        <div className="card-img-overlay">
                            <h2 className='text-uppercase text-white'>Explore Umrah Packages</h2>
                            <button type='button' className='btn btn-light text-uppercase px-4 rounded-0 mt-2'>View More</button>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={planeImg} className="card-img" alt="..." />
                        <div className="card-img-overlay">
                            <h2 className='text-uppercase text-white'>Create your own umrah package</h2>
                            <button type='button' className='btn btn-light text-uppercase px-4 rounded-0 mt-2'>View More</button>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={roomImg} className="card-img" alt="..." />
                        <div className="card-img-overlay">
                            <h2 className='text-uppercase text-white'>
                                Up to 70%
                                <br />
                                Discount!
                            </h2>
                            <button type='button' className='btn btn-light text-uppercase px-4 rounded-0 mt-2'>View More</button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default SpecialOffer;