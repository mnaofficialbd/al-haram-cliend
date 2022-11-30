import React from 'react';
import FlightDetailsTab from './FlightDetailsTab';

const FlightsDetails = () => {
    return (
        <div>
            <div className='border-bottom pt-2 border-dark'>
                <div className='px-4'>
                    <div className='d-md-flex mb-2 align-items-center'>
                        <div className='me-2'>
                            <button className="details-btn">FLIGHTS DETAILS</button>
                        </div>
                        <div className='me-2'>
                            <button className="details-btn">FARE BREAKUP</button>
                        </div>
                        <div className='me-2'>
                            <button className="details-btn">BAGGAGE</button>
                        </div>
                        <div className=''>
                            <button className="details-btn">FARE POLICY</button>
                        </div>
                    </div>
                </div>
            </div>
            <FlightDetailsTab />
        </div>

    );
};

export default FlightsDetails;