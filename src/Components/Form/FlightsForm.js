import React from 'react';
import { faCalendarDays,faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FlightsForm = () => {
    return (
        <form action="" className='bg-white p-4 mb-4'>
            <div className="row row-cols-2 row-cols-lg-4 g-2 g-lg-3">
                <div className='col'>
                    <div className="d-flex">
                        <span className="">
                            <FontAwesomeIcon style={{ width: "20px", height: "20px", color: '#02A3C1'}} icon={faLocationDot}></FontAwesomeIcon>
                        </span>
                        <label htmlFor="exampleInputDeparture" className="form-label ms-2 font-semibold font-uppercase">DEPARTURE</label>
                    </div>
                    <input type="text" placeholder='Eg: India' className="form-control" />
                </div>
                <div className='col'>
                    <div className="d-flex">
                        <span className="">
                            <FontAwesomeIcon style={{ width: "20px", height: "20px", color: '#02A3C1'}} icon={faLocationDot}></FontAwesomeIcon>
                        </span>
                        <label htmlFor="exampleInputDeparture" className="form-label font-semibold ms-2">DESTINATION</label>
                    </div>
                    <input type="text" placeholder='Eg: Mumbai' className="form-control" />
                </div>
                <div className='col'>
                    <div className="d-flex">
                        <span className="">
                            <FontAwesomeIcon style={{ width: "20px", height: "20px", color: '#02A3C1'}} icon={faCalendarDays}></FontAwesomeIcon>
                        </span>
                        <label htmlFor="exampleInputDeparture" className="form-label ms-2 font-semibold">DEPARTURE DATE</label>
                    </div>
                    <input type="date" placeholder='Day: DD MMM YYYY' className="form-control" />
                </div>
                <div className='col'>
                    <div className="d-flex">
                        <span>
                            <FontAwesomeIcon style={{ width: "20px", height: "20px", color: '#02A3C1'}} icon={faCalendarDays}></FontAwesomeIcon>
                        </span>
                        <label htmlFor="exampleInputDeparture" className="form-label ms-2 font-semibold">RETURN DATE</label>
                    </div>
                    <input type="date" placeholder='Day: DD MMM YYYY' className="form-control" />
                </div>


            </div>
            <div className="d-md-flex justify-content-between align-items-center mt-4">
                <div className="d-flex">
                    <div className='me-4'>
                        <label htmlFor="exampleInputDeparture" className="form-label font-semibold">AIRLINE</label>
                        <input type="text" placeholder='Eg: Qatar Airlines' className="form-control" />
                    </div>
                    <div className=''>
                        <label htmlFor="exampleInputDeparture" className="form-label font-semibold">CLASS</label>
                        <input type="date" placeholder='Eg: Economy' className="form-control" />
                    </div>
                </div>
                <div className="d-flex gap-2 align-items-center justify-content-end">
                    <div className='px-1' style={{MinWidth: '160px'}}>
                        <label htmlFor="exampleInputDeparture" className="form-label font-semibold">ADULT</label>
                        <div className="input-group">
                            <button className="btn btn-outline-secondary" type="button" id="inputGroupFileAddon04">
                                <span className="font-bold">-</span>
                            </button>
                            <span className="num form-control">01</span>
                            {/* <input type="number" className="form-control text-center" placeholder='1' /> */}
                            <button className="btn btn-outline-secondary" type="button" id="inputGroupFileAddon04">
                                <span className="font-bold">+</span>
                            </button>
                        </div>
                    </div>
                    <div className='px-1' style={{MinWidth: '160px'}}>
                        <label htmlFor="exampleInputDeparture" className="form-label font-semibold">CHILD(REN)</label>
                        <div className="input-group">
                            <button className="btn btn-outline-secondary" type="button" id="inputGroupFileAddon04">
                                <span className="font-bold">-</span>
                            </button>
                            <span className="num form-control">01</span>
                            {/* <input type="number" className="form-control text-center" placeholder='1' /> */}
                            <button className="btn btn-outline-secondary" type="button" id="inputGroupFileAddon04">
                                <span className="font-bold">+</span>
                            </button>
                        </div>
                    </div>
                    <div className='px-1' style={{MinWidth: '160px'}}>
                        <label htmlFor="exampleInputDeparture" className="form-label font-semibold">INFANT(S)</label>
                        <div className="input-group">
                            <button className="btn btn-outline-secondary" type="button" id="inputGroupFileAddon04">
                                <span className="font-bold">-</span>
                            </button>
                            <span className="num form-control">01</span>
                            {/* <input type="number" className="form-control text-center" placeholder='1' /> */}
                            <button className="btn btn-outline-secondary" type="button" id="inputGroupFileAddon04">
                                <span className="font-bold">+</span>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
            <hr />
            <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex">
                    <div class="form-check me-3">
                        <input class="form-check-input" type="checkbox" id="flexCheckChecked" />
                        <label class="form-check-label" htmlFor="flexCheckChecked">One-Way</label>
                    </div>
                    <div class="form-check me-3">
                        <input class="form-check-input" type="checkbox" id="flexCheckChecked" />
                        <label class="form-check-label" htmlFor="flexCheckChecked">Round-Trip</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="flexCheckChecked" />
                        <label class="form-check-label" htmlFor="flexCheckChecked">Multi-City</label>
                    </div>
                </div>
                <div className='m-2'>
                    <button className="search-btn" type="button">SEARCH</button>
                </div>
            </div>
        </form>
    );
};

export default FlightsForm;