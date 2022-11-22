import React from 'react';

const FlightsDetails = () => {
    return (
        <div>
            <div className='border-bottom pt-2 border-dark'>
                <div className='px-5 w-50'>
                    <div className='d-md-flex justify-content-between align-items-center'>
                        <div className=''>
                            <p className='font-semibold'>FLIGHTS DETAILS</p>
                        </div>
                        <div className=''>
                            <p className='font-semibold'>FARE BREAKUP</p>
                        </div>
                        <div className=''>
                            <p className='font-semibold'>BAGGAGE</p>
                        </div>
                        <div className=''>
                            <p className='font-semibold'>FARE POLICY</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='pt-2 '>
                <div className='px-5 w-50'>
                    <div className='text-center'>
                        <p>TRAVEL TIME: 3H 20M</p>
                    </div>
                    <div className='d-md-flex justify-content-between align-items-center'>
                        <div className=''>
                            <p className='font-semibold'>21:40 - TERMINAL: T3</p>
                        </div>
                        <div className=''>
                            <p className='font-semibold'>.................</p>
                        </div>
                        <div className=''>
                            <p className='font-semibold'>23:55 - MECCA - TERMINAL: T2D</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default FlightsDetails;