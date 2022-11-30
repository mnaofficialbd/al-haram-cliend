import React from 'react';

const HajjSnapshot = () => {
    return (
        <section className='mt-5 pt-3 container ps-5'>
            <div className="">
                <div class=" mx-2 py-2 bg-light shadow rounded mb-5">
                    <div className='py-1 ' style={{ background: '#02A3C1' }}>
                        <h3 className='font-bold text-center text-white' style={{ fontSize: '24px' }}>Package Snapshot</h3>
                    </div>
                    <div className=' text-center py-1'>
                        <div className="d-md-flex justify-content-around align-items-center">
                            <div className='my-1'>
                                <h6>Departure City</h6>
                                <p className='text-center m-0'>Hyderabad</p>
                            </div>
                            <div className="border_right_snapshot"></div>
                            <div className='my-1'>
                                <h6>Departure Date</h6>
                                <p className='text-center m-0'>28-11-2022</p>
                            </div>
                            <div className="border_right_snapshot"></div>
                            <div className='my-1'>
                                <h6>Arrival Date</h6>
                                <p className='text-center m-0'>29-11-2022</p>
                            </div>
                            <div className="border_right_snapshot"></div>
                            <div className='my-1'>
                                <h6>Remaining Pax</h6>
                                <p className='text-center m-0'>40 Members</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HajjSnapshot;