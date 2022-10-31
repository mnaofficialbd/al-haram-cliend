import React from 'react';
import makkahImg from '../';
import planeImg from '../';
import roomImg from '../';

const SpecialOffer = () => {
    return (
        <section className='container'>
            <div className="text-center my-5">
                <h3 className='text-uppercase' style={{ fontSize:'40px'}}>Special Offers</h3>
                <p className="text-capitalize" style={{color: '#777777', fontSize:'24px'}}>These popular destinations have a lot to offer</p>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card h-100 ">
                        <img src={makkahImg} className="card-img" alt="..." />
                        <div className="card-img-overlay text-center">
                            <h2 className='text-uppercase'>Makkah</h2>
                            <p className='text-uppercase'>The holy city of prophet muhammad (pbuh)</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={planeImg} className="card-img" alt="..." />
                        <div className="card-img-overlay text-center">
                            <h2 className='text-uppercase'>Madina</h2>
                            <p className='text-uppercase'>The holy city of prophet muhammad (pbuh)</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={roomImg} className="card-img" alt="..." />
                        <div className="card-img-overlay text-center">
                            <h2 className='text-uppercase'>Jeddah</h2>
                            <p className='text-uppercase'>The holy city of prophet muhammad (pbuh)</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
    );
};

export default SpecialOffer;