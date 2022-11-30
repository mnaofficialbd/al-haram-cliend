import React, { useState } from 'react';
import BusesForm from '../Form/BusesForm';
import FlightsForm from '../Form/FlightsForm';
import HotelForm from '../Form/HotelForm';
import UmrahForm from '../Form/UmrahForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBusSimple, faCouch, faKaaba, faPlaneDeparture } from '@fortawesome/free-solid-svg-icons';

const FormSection = () => {

    const [active, setActive] = useState('UmrahForm')
    
    return (
        <section className='container font-bold'>
            <div className="d-flex">
                <div className='me-2'>
                    <button className='details-btn' onClick={() => setActive('UmrahForm')} >
                        <span className='me-2'>
                            <FontAwesomeIcon style={{ width: "20px", height: "20px" }} icon={faKaaba}></FontAwesomeIcon>
                        </span>
                        UMRAH
                    </button>
                </div>
                <div className='me-2'>
                    <button className='details-btn' onClick={() => setActive('FlightsForm')} >
                        <span className='me-2'>
                            <FontAwesomeIcon style={{ width: "20px", height: "20px" }} icon={faPlaneDeparture}></FontAwesomeIcon>
                        </span>
                        FLIGHTS
                    </button>
                </div>
                <div className='me-2'>
                    <button className='details-btn' onClick={() => setActive('HotelForm')} >
                        <span className='me-2'>
                            <FontAwesomeIcon style={{ width: "20px", height: "20px" }} icon={faCouch}></FontAwesomeIcon>
                        </span>
                        HOTELS
                    </button>
                </div>
                <div>
                    <button className='details-btn' onClick={() => setActive('BusesForm')} >
                        <span className='me-2'>
                            <FontAwesomeIcon style={{ width: "20px", height: "20px" }} icon={faBusSimple}></FontAwesomeIcon>
                        </span>
                        BUSES
                    </button>
                </div>
            </div>
            {/* ===========umrah form=========== */}
            {active === 'UmrahForm' && <UmrahForm />}
            {/* ===========flight form=========== */}
            {active === 'FlightsForm' && <FlightsForm />}
            {/* ===========hotel form=========== */}
            {active === 'HotelForm' && <HotelForm />}
            {/* ===========buses form=========== */}
            {active === 'BusesForm' && <BusesForm />}
        </section>
    );
};

export default FormSection;