import React from 'react';
import { faCalendarDays, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const HotelSearchSection = () => {
    return (
        <section className='mt-5 p-5' style={{ background: '#02A3C1' }}>
            <div className='text-center py-3'>
                <h6 className='text-white' style={{fontSize: '32px'}}>Book Domestic And International Hotel Online</h6>
            </div>
            <div className='py-3'>
                <form>
                    <div className='d-md-flex justify-content-center'>

                        <div className='width_17 bg-white mb-2 me-3 me-lg-1 p-1'>
                            <div className="d-flex justify-content-between">
                                <p className="text-uppercase mb-2">City of location</p>
                                <FontAwesomeIcon style={{ width: "18px", height: "18px" }} icon={faLocationDot}></FontAwesomeIcon>
                            </div>
                            <div className='ps-2'>
                                <p className='text-uppercase font-semibold m-0' style={{ fontSize: '18px' }}>Makkah</p>
                            </div>
                        </div>

                        <div className='width_17 mb-2 bg-white me-3 me-lg-1 p-1'>
                            <div className="d-flex justify-content-between">
                                <p className="text-uppercase mb-2">Check In</p>
                                <FontAwesomeIcon style={{ width: "18px", height: "18px" }} icon={faCalendarDays}></FontAwesomeIcon>
                            </div>
                            <div className='ps-2'>
                                <p className='text-uppercase font-semibold m-0' style={{ fontSize: '18px' }}>5 Aug 22</p>
                            </div>
                        </div>

                        <div className='width_17 mb-2 bg-white me-3 me-lg-1 p-1'>
                            <div className="d-flex justify-content-between">
                                <p className="text-uppercase mb-2">Check Out</p>
                                <FontAwesomeIcon style={{ width: "18px", height: "18px" }} icon={faCalendarDays}></FontAwesomeIcon>
                            </div>
                            <div className='ps-2'>
                                <p className='text-uppercase font-semibold m-0' style={{ fontSize: '18px' }}>11 Aug 22</p>
                            </div>
                        </div>

                        <div className='width_10 bg-white mb-2 me-3 me-lg-1 p-1'>
                            <p className="text-uppercase mb-2">Room</p>
                            <div className='ps-2'>
                                <p className='text-uppercase font-semibold m-0' style={{ fontSize: '18px' }}>02</p>
                            </div>
                        </div>

                        <div className='width_17 bg-white me-3 mb-2 me-lg-1 p-1'>
                            <p className="text-uppercase mb-2">Guest</p>
                            <div className='ps-2'>
                                <p className='text-uppercase font-semibold m-0' style={{ fontSize: '18px' }}>02 Adults</p>
                            </div>
                        </div>

                        <button className="width_17 custom_btn mb-2 px-4 p-1" type="button">SEARCH</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default HotelSearchSection;