import React from 'react';

const AboutUmrahPackage = () => {
    return (
        <section>
            <div style={{ background: '#02A3C1' }} className="d-md-flex justify-content-around align-items-center">
                <div className=''>
                    <h6>Departure City</h6>
                    <h6 className='font-bold'>Multiple Cities</h6>
                </div>
                <div className="border border-dark" style={{ height: '45px' }}></div>
                <div className=''>
                    <h6>Departure Date</h6>
                    <h6 className='font-bold'>21 Oct 2022</h6>
                </div>
                <div className="border border-dark" style={{ height: '45px' }}></div>
                <div className=''>
                    <h6>Arrival Date</h6>
                    <h6 className='font-bold'>21 Oct 2022</h6>
                </div>
                <div className="border border-dark" style={{ height: '45px' }}></div>
                <div className=''>
                    <h6>Remaining Pax</h6>
                    <h6 className='font-bold'>40 Members</h6>
                </div>
            </div>
            <div></div>
        </section>
    );
};

export default AboutUmrahPackage;