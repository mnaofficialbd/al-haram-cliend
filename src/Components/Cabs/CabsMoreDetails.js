import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import bociLogo from '../../Assets/Hotel/bociLogo.png';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-regular-svg-icons';

const CabsMoreDetails = () => {

    const cardDatas = [
        { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }
    ]
    
    
    

    return (
        <section className='mt-5 pt-4 '>
            <div className='d-md-flex justify-content-center'>
                <div class="d-flex flex-column flex-shrink-0 bus_SideBar" >
                    <div className='rounded px-2 h-100'>

                        {/* =============Departure country section=============== */}
                        <div className='mb-5 mx-2'>


                            <div className='rounded'>

                                {/* transfer */}
                                <div className='border border-dark px-4 py-4 mb-4' style={{ fontSize: '13px' }}>
                                    <h5 className='ps-3' style={{ fontSize: '20px' }}>YOUR TRANSFER</h5>

                                    <div className="d-flex px-1 my-3 ">
                                        <div>
                                            <FontAwesomeIcon className='' icon={faLocationDot}></FontAwesomeIcon>
                                        </div>
                                        <div className='ms-2 w-100'>
                                            <p>PICK-UP LOCATION</p>
                                            <input type="text" className='border-0 w-100' placeholder='MUMBAI,MAHARASHTRA GALI NO 6' />
                                        </div>
                                    </div>
                                    <div className="d-flex px-1 my-3 ">
                                        <div>
                                            <FontAwesomeIcon className='' icon={faLocationDot}></FontAwesomeIcon>
                                        </div>
                                        <div className='ms-2 w-100'>
                                            <p>DROP-OFF LOCATION</p>
                                            <input type="text" className='border-0 w-100' placeholder='DELHI,GHAZIABAD 45 STREET 2' />
                                        </div>
                                    </div>
                                    <div className="d-flex px-1 my-3">
                                        <div>
                                            <FontAwesomeIcon className='' icon={faLocationDot}></FontAwesomeIcon>
                                        </div>
                                        <div className='ms-2 w-100'>
                                            <p>PICK-UP DATE & TIME</p>
                                            <input type="text" className='border-0 w-100' placeholder='12/12/22  04:30PM' />
                                        </div>
                                    </div>
                                    <div className="d-flex px-1 my-3">
                                        <div>
                                            <FontAwesomeIcon className='' icon={faLocationDot}></FontAwesomeIcon>
                                        </div>
                                        <div className='ms-2 w-100'>
                                            <p>PASSENGER</p>
                                            <input type="text" className='border-0 w-100' placeholder='1 ADLUT' />
                                        </div>
                                    </div>

                                </div>



                                {/* =============Filter section=============== */}
                                <div className='bg-light mb-4  border border-dark' style={{ fontSize: '13px' }}>

                                    <h5 className='m-0 mb-3 pt-2 text-center' style={{ fontSize: '20px' }}>FILTER</h5>
                                    <div className='px-4 bg-white '>
                                        <h6 className='m-0' style={{ fontSize: '17px' }}>CAB TYPE</h6>
                                        <div className='pt-3'>
                                            <div class="form-check ">
                                                <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                                <label class="form-check-label" for="inlineCheckbox1">HATCH BACK</label>
                                            </div>
                                            <div class="form-check ">
                                                <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                                <label class="form-check-label" for="inlineCheckbox1">SEDAN</label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                                <label class="form-check-label" for="inlineCheckbox1">SUV</label>
                                            </div>
                                        </div>
                                        <hr />
                                        <h6 className='m-0' style={{ fontSize: '17px' }}>FUEL TYPE</h6>
                                        <div className='py-3' >
                                            <div class="form-check ">
                                                <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                                <label class="form-check-label" for="inlineCheckbox1">DIESEL</label>
                                            </div>
                                            <div class="form-check ">
                                                <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                                <label class="form-check-label" for="inlineCheckbox1">ANY</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* =============why book us section=============== */}
                                <div className='bg-light pb-2 border border-dark' style={{ fontSize: '13px' }}>

                                    <h5 className='m-0 mb-3 pt-2 text-center' style={{ fontSize: '20px' }}>WHY BOOK WITH US</h5>
                                    <div className='px-4 bg-white '>
                                        <div className='pt-3'>
                                            <h6 className='m-0 text-uppercase' style={{ fontSize: '16px' }}>FREE CANCELLATION</h6>
                                            <p className='text-capitalize'>You can cancel your cab before 12 hour</p>
                                        </div>
                                        <div className='pt-3'>
                                            <h6 className='m-0 text-uppercase' style={{ fontSize: '16px' }}>easy payment option</h6>
                                            <p className='text-capitalize'>Pay online via card, net banking, UPI, etc</p>
                                        </div>
                                        <div className='pt-3'>
                                            <h6 className='m-0 text-uppercase' style={{ fontSize: '16px' }}>top rated drivers</h6>
                                            <p className='text-capitalize'>You will ride with top-rated drivers</p>
                                        </div>
                                        <div className='py-3'>
                                            <h6 className='m-0 text-uppercase' style={{ fontSize: '16px' }}>best prices ever!</h6>
                                            <p className='text-capitalize'>Book your cab at pocket-friendly rates! No need to compare</p>
                                        </div>
                                        

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                {/* details part */}
                <div className="flights_CardSection">

                    {
                        cardDatas.map(cardData => (
                            <div key={cardData.id} className='mx-3 rounded border border-dark  mb-4 bg-white shadow'>
                                <div className='d-md-flex border-bottom pb-2 border-dark align-items-center'>

                                    <div className="width_20 d-flex align-items-center justify-content-center">
                                        <div>
                                            <img src={bociLogo} alt="" style={{ width: "60px" }} />
                                        </div>
                                        <div>
                                            <h6 className='m-0'>B TRAVELS</h6>
                                            <p className="m-0" style={{ fontSize: '10px' }}>VOLVO AC MULTI AXLE</p>
                                            <p className="m-0" style={{ fontSize: '10px' }}>SEATER/SLEEPER (2+1)</p>
                                        </div>
                                    </div>
                                    <div className="width_20 d-flex flex-column align-items-center">
                                        <h5 className="m-0 font-bold">21:40</h5>
                                        <h6 className='m-0'>DELHI</h6>
                                    </div>

                                    <div className="width_20 d-flex flex-column justify-content-center align-items-center">
                                        <p className='m-0' style={{ fontSize: '10px' }}>3H 20M (DIRECT)</p>
                                        <div className='d-flex align-items-center'>
                                            <FontAwesomeIcon className='' style={{ width: "12px", height: "12px" }} icon={faCircle}></FontAwesomeIcon>
                                            <p className="m-0">--------------</p>
                                            <FontAwesomeIcon className='' style={{ width: "12px", height: "12px" }} icon={faCircle}></FontAwesomeIcon>

                                        </div>
                                        <p className='m-0' style={{ fontSize: '10px' }}>NON-STOP</p>
                                    </div>

                                    <div className="width_20 d-flex flex-column align-items-center">
                                        <h5 className="m-0 font-bold">23:55</h5>
                                        <h6 className='m-0'>MECCA</h6>
                                    </div>
                                    <div className="width_20 pt-4 d-flex flex-column align-items-center ">
                                        <h5 className="font-bold m-0">₹ 1,995</h5>
                                        <p className="m-0">Per Person</p>
                                        <button type='button' className="flight_view_details_btn mt-2">
                                            SELECT SEAT
                                        </button>
                                    </div>
                                </div>


                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default CabsMoreDetails;