import React from 'react';
import logo from '../../Assets/Icons/al-haram-final-logo.png'

const UmrahLogoTextHeader = () => {
    return (
        <section className='d-md-flex mt-5 py-5'>
            <div className='mx-5'>
                <img src={logo} alt="" className='pe-5' />
            </div>
            <div className='px-5'>
                <p className='text-center text-capitalize font-semibold' style={{ fontSize: '20px' }}>
                    budget-friendly & luxury package for a  convenient hajj & umrah journeyto the holly <br />
                    makkah & madina for muslim brothers & sisters
                </p>
            </div>
        </section>
    );
};

export default UmrahLogoTextHeader;