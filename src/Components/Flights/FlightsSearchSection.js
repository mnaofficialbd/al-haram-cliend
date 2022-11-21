import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const FlightsSearchSection = () => {
    return (
        <div className='py-4'>
            <form>
                <div className='row row-cols-2 row-cols-lg-6 g-3 g-lg-3'>

                    <div className='col bg-white me-3 me-lg-1 py-3'>
                        <div className="d-flex justify-content-between">
                            <p className="text-uppercase mb-2">From</p>
                            <FontAwesomeIcon style={{ width: "18px", height: "18px" }} icon={faLocationDot}></FontAwesomeIcon>
                        </div>
                        <div className='ps-2'>
                            <p className='text-uppercase font-semibold m-0' style={{ fontSize: '18px' }}>Mumbai</p>
                            <p className='m-0'>Mumbai Airport, India</p>
                        </div>
                    </div>

                    <div className='col bg-white me-3 me-lg-1 py-3'>
                        <div className="d-flex justify-content-between">
                            <p className="text-uppercase mb-2">To</p>
                            <FontAwesomeIcon style={{ width: "18px", height: "18px" }} icon={faLocationDot}></FontAwesomeIcon>
                        </div>
                        <div className='ps-2'>
                            <p className='text-uppercase font-semibold m-0' style={{ fontSize: '18px' }}>Medina</p>
                            <p className='m-0'>Medina Airport, Saudi</p>
                        </div>
                    </div>

                    <div className='col bg-white me-3 me-lg-1 py-3'>
                        <p className="text-uppercase mb-2">Departure</p>
                        <div className='ps-2'>
                            <p className='text-uppercase font-semibold m-0' style={{ fontSize: '18px' }}>11 aug 22</p>
                            <p className='m-0'>Thursday</p>
                        </div>
                    </div>

                    <div className='col bg-white me-3 me-lg-1 py-3'>
                        <p className="text-uppercase mb-2">Travler</p>
                        <div className='ps-2'>
                            <p className='text-uppercase font-semibold m-0' style={{ fontSize: '18px' }}>02</p>
                            <p className='m-0'>Passenger</p>
                        </div>
                    </div>

                    <div className='col bg-white me-3 me-lg-1 py-3'>
                        <p className="text-uppercase mb-2">Class</p>
                        <div className='ps-2'>
                            <p className='text-uppercase font-semibold m-0' style={{ fontSize: '18px' }}>Economy</p>
                            <p className='m-0'>PREMIUM ECONOMY</p>
                        </div>
                    </div>

                        <button className="col px-4 py-3" type="button">SEARCH</button>
                    {/* <div className='col bg-white px-4 py-3'>
                    </div> */}
                </div>
            </form>
        </div>
    );
};

export default FlightsSearchSection;