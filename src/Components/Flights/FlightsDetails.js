import React from 'react';
import indigoLogo from '../../Assets/Flights/indiGoLogo.png';

const FlightsDetails = () => {
    return (
        <div>
            <div className='border-bottom pt-2 border-dark'>
                <div className='px-5 w-75'>
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
                <div className='px-5 w-75'>
                    <div className='text-center'>
                        <p className='m-0'>TRAVEL TIME: 3H 20M</p>
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
                    <div className="d-flex w-75 justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                            <img src={indigoLogo} alt="" />
                            <p className="font-semibold mb-0 ms-2">INDIGO</p>
                            <p className='mb-0'>(IN-855)</p>
                        </div>
                        <div>
                            <p  className='mb-0'>ECONOMY</p>
                        </div>
                        <div>
                            <p  className='mb-0'>454</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default FlightsDetails;