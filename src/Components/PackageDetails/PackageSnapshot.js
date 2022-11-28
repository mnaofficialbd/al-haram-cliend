import React from 'react';

const PackageSnapshot = () => {
    return (
        <section className='mt-5 px-4  pt-5 '>
            <div className='bg-light shadow rounded mb-5 mx-2'>

                <div className='py-3 ps-3' style={{ background: '#02A3C1' }}>
                    <h3 className='font-bold text-center text-white' style={{ fontSize: '24px' }}>Package Snapshot</h3>
                </div>
                <div className=' text-center py-2'>
                    <div className="d-md-flex justify-content-around align-items-center">
                        <div className='my-3'>
                            <h6>Departure City</h6>
                            <p className='text-center'>Hyderabad</p>
                        </div>
                        <div className="border_right"></div>
                        <div className='my-3'>
                            <h6>Departure Date</h6>
                            <p className='text-center'>28-11-2022</p>
                        </div>
                        <div className="border_right"></div>
                        <div className='my-3'>
                            <h6>Arrival Date</h6>
                            <p className='text-center'>29-11-2022</p>
                        </div>
                        <div className="border_right"></div>
                        <div className='my-3'>
                            <h6>Remaining Pax</h6>
                            <p className='text-center'>40 Members</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PackageSnapshot;