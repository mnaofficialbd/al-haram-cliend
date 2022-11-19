import React from 'react';
import UmrahLogoTextHeader from './UmrahLogoTextHeader';

const UmrahPackagesHeader = () => {
    return (
        <section>
            <UmrahLogoTextHeader />
            <div style={{ background: '#02A3C1' }} className='text-center text-white py-5'>
                <h3 className='font-bold' style={{ fontSize: '2rem' }}>Umrah Packages</h3>
                <p style={{ fontSize: '18px' }} className='font-semibold mt-3 text-capitalize'>budget-friendly & luxury package for a  convenient hajj & umrah journeyto the holly <br />
                makkah & madina for muslim brothers & sisters</p>
            </div>
        </section>
    );
};

export default UmrahPackagesHeader;