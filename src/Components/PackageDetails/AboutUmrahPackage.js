import React from 'react';

const AboutUmrahPackage = () => {
    return (
        <section className='shadow '>
            <div style={{ background: '#02A3C1' }} className="text-white py-4 d-md-flex justify-content-around align-items-center">
                <div className=''>
                    <h4 className='font-semibold'>Overview</h4>
                </div>
                <div className="border border-white" style={{ height: '45px' }}></div>
                <div className=''>
                    <h4 className='font-semibold'>Important Information</h4>
                </div>
                <div className="border border-white" style={{ height: '45px' }}></div>
                <div className=''>
                    <h4 className='font-semibold'>Room Sharing</h4>
                </div>
                <div className="border border-white" style={{ height: '45px' }}></div>
                <div className=''>
                    <h4 className='font-semibold'>Itinerary</h4>
                </div>
                <div className="border border-white" style={{ height: '45px' }}></div>
                <div className=''>
                    <h4 className='font-semibold'>User Reviews</h4>
                </div>
                <div className="border border-white" style={{ height: '45px' }}></div>
                <div className=''>
                    <h4 className='font-semibold'>Terms & Conditions</h4>
                </div>
            </div>
            <div className='p-4 mx-5' style={{color: '#757575'}}>
                <div className='pb-2'>
                    <h3 className='font-bold' style={{
                        fontSize: '24px', color: '#757575'
                    }}>About 10 Days Umrah Package </h3>
                    <p className='font-bold' style={{fontSize: '18px'}}>Live in luxury at the Hotel Almati Inn which offers a luxurious stay to its guests with modern amenities and services.</p>
                </div>
                <div style={{fontSize: '16px'}}>
                    <li className='text-capitalize'>The property is well connected to the city and is located near the important locations of Delhi.</li>
                    <li className='text-capitalize'>The property offers modern amenities like a coffee shop, play area, activity centre, conference rooms, etc.</li>
                    <li className='text-capitalize'>The property is very close to the Airport and Railway station of the city and offers taxi services to make the to and fro commutation easy.</li>
                </div>
            </div>
        </section>
    );
};

export default AboutUmrahPackage;