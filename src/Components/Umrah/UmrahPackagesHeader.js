import React from 'react';
import logo from '../../Assets/Icons/al-haram-final-logo.png'
const UmrahPackagesHeader = () => {
    return (
        <section className='mt-5'>
            <div className='d-flex py-5'>
                <div className='mx-5'>
                    <img src={logo} alt="" className='pe-5' />
                </div>
                <div className='text-center px-5 font-semibold'>
                    <p style={{ fontSize: '20px' }}>
                        budget-friendly & luxury package for a  convenient hajj & umrah journeyto the holly <br />
                        makkah & madina for muslim brothers & sisters
                    </p>
                </div>
            </div>
            <div style={{ background: '#02A3C1' }} className='text-center text-white py-5'>
                <h3 className='font-bold' style={{ fontSize: '2rem' }}>Umrah Packages</h3>
                <p style={{ fontSize: '16px' }} className='font-semibold mt-3'>budget-friendly & luxury package for a  convenient hajj & umrah journeyto the holly <br />
                makkah & madina for muslim brothers & sisters</p>
            </div>
        </section>
    );
};

export default UmrahPackagesHeader;