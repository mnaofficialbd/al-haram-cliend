import { faCalendarDays, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const UmrahForm = () => {
    return (
        <form action="" className='bg-white p-4 mb-4'>
            <div className="row row-cols-2 row-cols-lg-4 g-2 g-lg-3">
                <div className='col'>
                    <div className="d-flex">
                        <span className="">
                            <FontAwesomeIcon style={{ width: "20px", height: "20px", color: '#02A3C1'}} icon={faLocationDot}></FontAwesomeIcon>
                        </span>
                        <label htmlFor="exampleInputDeparture" className="form-label ms-2 font-semibold font-uppercase">COUNTRY</label>
                    </div>
                    <input type="text" placeholder='Eg: India' className="form-control" />
                </div>
                <div className='col'>
                    <div className="d-flex">
                        <span className="">
                            <FontAwesomeIcon style={{ width: "20px", height: "20px", color: '#02A3C1'}} icon={faLocationDot}></FontAwesomeIcon>
                        </span>
                        <label htmlFor="exampleInputDeparture" className="form-label font-semibold ms-2">CITY</label>
                    </div>
                    <input type="text" placeholder='Eg: Mumbai' className="form-control" />
                </div>
                <div className='col'>
                    <div className="d-flex">
                        <span className="">
                        <FontAwesomeIcon style={{ width: "20px", height: "20px", color: '#02A3C1'}} icon={faCalendarDays}></FontAwesomeIcon>
                        </span>
                        <label htmlFor="exampleInputDeparture" className="form-label ms-2 font-semibold">DURATION</label>
                    </div>
                    <input type="date" placeholder='Eg: 2 Oct 2022' className="form-control" />
                </div>
                <div className='col'>
                    <div className="d-flex">
                        <span>
                            <FontAwesomeIcon style={{ width: "20px", height: "20px", color: '#02A3C1'}} icon={faCalendarDays}></FontAwesomeIcon>
                        </span>
                        <label htmlFor="exampleInputDeparture" className="form-label ms-2 font-semibold">TRAVEL DATE</label>
                    </div>
                    <input type="date" placeholder='Day: DD MM YYYY' className="form-control" />
                </div>

            </div>
            <div className="d-md-flex justify-content-between align-items-end mt-4">
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
                <div className='m-2 '>
                    <button className="search-btn" type="button">SEARCH</button>

                </div>
            </div>
        </form>
    );
};

export default UmrahForm;