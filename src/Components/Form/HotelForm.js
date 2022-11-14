import React from 'react';
import { faCalendarDays,faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const HotelForm = () => {
    return (
        <form action="" className='bg-white p-4 mb-4'>
            <div className="row row-cols-2 row-cols-lg-4 g-2 g-lg-3">
                <div className='col'>
                    <div className="d-flex">
                        <span className="">
                            <FontAwesomeIcon style={{ width: "20px", height: "20px", color: '#02A3C1'}} icon={faLocationDot}></FontAwesomeIcon>
                        </span>
                        <label htmlFor="exampleInputDeparture" className="form-label ms-2 font-semibold font-uppercase">CITY OR LOCATION</label>
                    </div>
                    <input type="text" placeholder='Eg: India' className="form-control" />
                </div>
                <div className='col'>
                    <div className="d-flex">
                        <span className="">
                            <FontAwesomeIcon style={{ width: "20px", height: "20px", color: '#02A3C1'}} icon={faCalendarDays}></FontAwesomeIcon>
                        </span>
                        <label htmlFor="exampleInputDeparture" className="form-label font-semibold ms-2">CHECK IN</label>
                    </div>
                    <input type="date" placeholder='Eg: 1 Oct 2022' className="form-control" />
                </div>
                <div className='col'>
                    <div className="d-flex">
                        <span className="">
                            <FontAwesomeIcon style={{ width: "20px", height: "20px", color: '#02A3C1'}} icon={faCalendarDays}></FontAwesomeIcon>
                        </span>
                        <label htmlFor="exampleInputDeparture" className="form-label ms-2 font-semibold">CHECK OUT</label>
                    </div>
                    <input type="date" placeholder='Eg: 2 Oct 2022' className="form-control" />
                </div>
                <div className='col'>
                    <div className="d-flex">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 384 512"><path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" /></svg>
                        </span>
                        <label htmlFor="exampleInputDeparture" className="form-label ms-2 font-semibold">ROOMS</label>
                    </div>
                    <input type="text" placeholder='Day: DD MM YYYY' className="form-control" />
                </div>

            </div>
            <div className="d-md-flex justify-content-between align-items-center mt-4">
                <div className="d-flex gap-2 align-items-center">
                    <div className='px-1 w-25'>
                        <label htmlFor="exampleInputDeparture" className="form-label font-semibold">ADULT</label>
                        <div className="input-group">
                            <button className="btn btn-outline-secondary" type="button" id="inputGroupFileAddon04">
                                <span className="font-bold">+</span>
                            </button>
                            <input type="number" className="form-control text-center" placeholder='1' />
                            <button className="btn btn-outline-secondary" type="button" id="inputGroupFileAddon04">
                                <span className="font-bold">-</span>
                            </button>
                        </div>
                    </div>
                    <div className='px-1 w-25'>
                        <label htmlFor="exampleInputDeparture" className="form-label font-semibold">CHILD(REN)</label>
                        <div className="input-group">
                            <button className="btn btn-outline-secondary" type="button" id="inputGroupFileAddon04">
                                <span className="font-bold">+</span>
                            </button>
                            <input type="number" className="form-control text-center" placeholder='02' />
                            <button className="btn btn-outline-secondary" type="button" id="inputGroupFileAddon04">
                                <span className="font-bold">-</span>
                            </button>
                        </div>
                    </div>
                    <div className='px-1 w-25'>
                        <label htmlFor="exampleInputDeparture" className="form-label font-semibold">INFANT(S)</label>
                        <div className="input-group">
                            <button className="btn btn-outline-secondary" type="button" id="inputGroupFileAddon04">
                                <span className="font-bold">+</span>
                            </button>
                            <input type="number" className="form-control text-center" placeholder='02' />
                            <button className="btn btn-outline-secondary" type="button" id="inputGroupFileAddon04">
                                <span className="font-bold">-</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='m-2'>
                    <button className="search-btn" type="button">SEARCH</button>
                </div>
            </div>
        </form>
    );
};

export default HotelForm;