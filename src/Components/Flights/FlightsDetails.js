import React, { useState } from 'react';
import FlightDetailsTab from './FlightDetailsTab';
import FareBreakupTab from './FareBreakupTab';
import BaggageTab from './BaggageTab';
import FarePolicyTab from './FarePolicyTab';

const FlightsDetails = () => {

    const [active, setActive] = useState('FlightDetailsTab')

    return (
        <div>
            <div className='border-bottom pt-2 border-dark'>
                <div className='px-4'>
                    <div className='d-md-flex mb-2 align-items-center'>
                        <div className='me-2'>
                            <button className="details-btn" onClick={() => setActive('FlightDetailsTab')}>
                            FLIGHTS DETAILS
                            </button>
                        </div>
                        <div className='me-2'>
                            <button className="details-btn" onClick={() => setActive('FareBreakupTab')}>
                                FARE BREAKUP
                                </button>
                        </div>
                        <div className='me-2'>
                            <button className="details-btn" onClick={() => setActive('BaggageTab')}>
                                BAGGAGE
                                </button>
                        </div>
                        <div className=''>
                            <button className="details-btn" onClick={() => setActive('FarePolicyTab')}>
                                FARE POLICY
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* ===========Flight Details Tab component=========== */}
            {active === 'FlightDetailsTab' && <FlightDetailsTab />}
            {/* ===========Fare Breakup Tab component=========== */}
            {active === 'FareBreakupTab' && <FareBreakupTab />}
            {/* ===========Baggage Tab component=========== */}
            {active === 'BaggageTab' && <BaggageTab />}
            {/* ===========Fare Policy Tab component=========== */}
            {active === 'FarePolicyTab' && <FarePolicyTab />}
            <FlightDetailsTab />
        </div>

    );
};

export default FlightsDetails;