import React from 'react';

const PackageSnapshot = () => {
    return (
        <section className='mt-5 px-4  pt-5 '>
            <div className='bg-light shadow rounded mb-5 mx-2'>
                <div className='py-3 ps-3' style={{ background: '#02A3C1' }}>
                    <h3 className='font-bold text-center text-white' style={{ fontSize: '24px' }}>Package Snapshot</h3>
                </div>
                <div className=' text-center py-4'>
                    <div className="d-md-flex justify-content-around align-items-center">
                        <div className='my-3'>
                            <h6>Departure City</h6>
                            <h6 className='font-bold'>Multiple Cities</h6>
                        </div>
                        <div className="border_right"></div>
                        <div className='my-3'>
                            <h6>Departure Date</h6>
                            <h6 className='font-bold'>21 Oct 2022</h6>
                        </div>
                        <div className="border_right"></div>
                        <div className='my-3'>
                            <h6>Arrival Date</h6>
                            <h6 className='font-bold'>21 Oct 2022</h6>
                        </div>
                        <div className="border_right"></div>
                        <div className='my-3'>
                            <h6>Remaining Pax</h6>
                            <h6 className='font-bold'>40 Members</h6>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PackageSnapshot;