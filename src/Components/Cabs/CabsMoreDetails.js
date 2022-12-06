import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import carImg from '../../Assets/Cabs/carImg.png';
import { faCar, faChair, faClock, faFileInvoiceDollar, faLocationDot, faShield, faSuitcase } from '@fortawesome/free-solid-svg-icons';

const CabsMoreDetails = () => {

    const cardDatas = [
        { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }
    ]


    return (
        <section className='mt-5 pt-4 '>
            <div className='d-md-flex justify-content-center'>
                <div class="d-flex flex-column flex-shrink-0 cubs_SideBar" >
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
                <div className="cubs_CardSection">

                    {
                        cardDatas.map(cardData => (
                            <div key={cardData.id} className='mx-3 rounded border border-dark  mb-4 bg-white shadow'>
                                <div className=' d-md-flex justify-content-around w-100 text-uppercase'>
                                    <div className='w-25 py-3 px-2'>
                                        <div className='mb-4 pb-3'>
                                            <h4 className='m-0'>TOYOTA CAMRY</h4>
                                            <p className='text-center'>TL-767854</p>
                                        </div>
                                        <div className=''>
                                            <img src={carImg} alt="" />
                                        </div>
                                    </div>
                                    <div className='py-3 px-4 width_70'>
                                        <div className="d-flex mb-2 align-items-center" style={{ fontSize: '13px' }}>
                                            <h5 className='me-2 m-0' style={{ fontSize: '18px' }}>toyota camry or similar</h5>
                                            <p className='me-2' >white</p>
                                            <div className='border border-dark ms-2 px-2'>
                                                <p>649 rating</p>
                                            </div>
                                        </div>
                                        <div className="d-flex font-semibold" style={{ fontSize: '13px' }}>
                                            <div className="d-flex me-2 pe-2">
                                                <div className='me-2'>
                                                    <FontAwesomeIcon icon={faCar}></FontAwesomeIcon>
                                                </div>
                                                <p>1 unit</p>
                                            </div>
                                            <div className="d-flex me-2 pe-2">
                                                <div className='me-2'><FontAwesomeIcon icon={faChair}></FontAwesomeIcon> </div>
                                                <p>4 seats</p>
                                            </div>
                                            <div className="d-flex me-2 pe-1">
                                                <div className='me-2'><FontAwesomeIcon icon={faSuitcase}></FontAwesomeIcon> </div>
                                                <p>2 luggage bags</p>
                                            </div>
                                            <div className="d-flex ms-1">
                                                <div className='me-2'><FontAwesomeIcon icon={faClock}></FontAwesomeIcon> </div>
                                                <p>123 km</p>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center py-4 w-100">
                                            <div className='' style={{ fontSize: '13px' }}>
                                                <h6 style={{ fontSize: '16px' }}>Best Priced Car With Best Promise</h6>
                                                <li className='mb-2'>Toll and State Tax: Included</li>
                                                <li className='mb-2'>Free cancellation</li>
                                                <li>24/7 customer helpline</li>
                                            </div>
                                            <div>
                                                <h4>rs 28700.00</h4>
                                                <button className="details-btn">BOOK NOW</button>
                                            </div>
                                        </div>
                                        <div className="d-flex">
                                            <div className="my-2 me-3">
                                                <button className="d-flex align-items-center payment_btn">
                                                    <FontAwesomeIcon className='me-2' icon={faShield}></FontAwesomeIcon>
                                                    SAFETY STANDARD & RESTRICTIONS
                                                </button>
                                            </div>
                                            <div className="my-2">
                                                <button className="d-flex align-items-center payment_btn">
                                                    <FontAwesomeIcon className='me-2' icon={faFileInvoiceDollar}></FontAwesomeIcon>
                                                    PARTIAL PAYMENT
                                                </button>
                                            </div>
                                        </div>
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