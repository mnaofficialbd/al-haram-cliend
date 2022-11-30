import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import morningSunset from '../../Assets/Flights/Sunset.png';
import morningSun from '../../Assets/Flights/Sun.png';
import afternoonSunset from '../../Assets/Flights/afternoonSunset.png';
import eveningMoon from '../../Assets/Flights/moon.png';
import indigoLogo from '../../Assets/Flights/indiGoLogo.png';
import FlightsDetails from './FlightsDetails';
import { faCircle } from '@fortawesome/free-regular-svg-icons';

const FlightsMoreDetails = () => {

    const [show, setShow] = useState(false)

    const cardDatas = [
        { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }
    ]
    const stopsDatas = [
        { id: 1, title: 'Direct (5)', num: 13999 },
        { id: 2, title: '1 Stop (34)', num: 12999 },
        { id: 3, title: '2 Stop (65)', num: 19499 }
    ]
    const airlinesDatas = [
        { id: 1, title: 'Vistara(76)', num: 13456 },
        { id: 2, title: 'Indigo(33)', num: 17236 },
        { id: 3, title: 'Spaacejet(67)', num: 18447 },
        { id: 4, title: 'Gofirst(1)', num: 19499 }
    ]
    const travelDatas = [
        { id: 1, title: 'Seat Choice Included', num: 12999 },
        { id: 2, title: 'Hand Baggage Included', num: 19499 }
    ]
    const timeDatas = [
        { id: 1, title: 'Early Morning', img: morningSunset, time: '00:00 - 04:59' },
        { id: 2, title: 'Morning', img: morningSun, time: '05:00 - 11:59' },
        { id: 3, title: 'Afternoon', img: afternoonSunset, time: '12:00 - 17:59' },
        { id: 4, title: 'Evening', img: eveningMoon, time: '18:00 - 23:59' }
    ]

    return (
        <section className='mt-5 pt-5 d-md-flex justify-content-center'>
            <div class="d-flex flex-column flex-shrink-0 px-2 bg-light flights_SideBar" >
                <div className='rounded px-2 h-100'>

                    {/* =============Departure country section=============== */}
                    <div className='border border-secondary mb-5 mx-2'>
                        <div className='px-4'>
                            <h6 className='font-bold text-center py-3' style={{ fontSize: '22px' }}>FILTER BY</h6>
                        </div>

                        {/* stops part */}
                        <div className='mt-4'>
                            <div className="d-flex justify-content-between px-4">
                                <div>
                                    <p className='font-bold'>STOP</p>
                                </div>
                                <div>
                                    <p className='font-bold'>FROM</p>
                                </div>
                            </div>
                            {
                                stopsDatas.map(stopsData => (
                                    <div key={stopsData.id} className="d-flex justify-content-between px-4 font-semibold">
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                            <label class="form-check-label" for="inlineCheckbox1">{stopsData.title}</label>
                                        </div>
                                        <div>
                                            <p>Rs {stopsData.num}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        {/* airlines part */}
                        <div className='mt-4'>
                            <div className="d-flex justify-content-between px-4">
                                <div>
                                    <p className='font-bold'>AIRLINES</p>
                                </div>
                                <div>
                                    <p className='font-bold'>FROM</p>
                                </div>
                            </div>
                            {
                                airlinesDatas.map(airlinesData => (
                                    <div key={airlinesData.id} className="d-flex justify-content-between px-4 font-semibold">
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                            <label class="form-check-label" for="inlineCheckbox1">{airlinesData.title}</label>
                                        </div>
                                        <div>
                                            <p>Rs {airlinesData.num}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        {/* =============TRAVEL & BAGGAGE part=============== */}
                        <div className='mt-4'>
                            <div className="d-flex justify-content-between px-4">
                                <div>
                                    <p className='font-bold'>TRAVEL & BAGGAGE</p>
                                </div>
                                <div>
                                    <p className='font-bold'>FROM</p>
                                </div>
                            </div>
                            {
                                travelDatas.map(travelData => (
                                    <div key={travelData.id} className="d-flex justify-content-between px-4 font-semibold">
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                            <label class="form-check-label" for="inlineCheckbox1">{travelData.title}</label>
                                        </div>
                                        <div>
                                            <p>Rs {travelData.num}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        {/* =============departure part=============== */}
                        <div className='mt-4'>
                            <div className="px-4">
                                <p className='font-bold'>DEPARTURE TIME IN HYDERABAD</p>
                            </div>

                            <div className="px-5 d-md-flex justify-content-between">
                                {
                                    timeDatas.slice(0, 2).map(timeData => (
                                        <div key={timeData.id} className='px-3 mb-3 text-center'>
                                            <img src={timeData.img} alt="" />
                                            <p className='m-0 font-semibold'>{timeData.title}</p>
                                            <p className='m-0 font-semibold'>{timeData.time}</p>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className="px-5 d-md-flex justify-content-between">
                                {
                                    timeDatas.slice(2, 4).map(timeData => (
                                        <div key={timeData.id} className='px-3 mb-3 text-center'>
                                            <img src={timeData.img} alt="" />
                                            <p className='m-0 font-semibold'>{timeData.title}</p>
                                            <p className='m-0 font-semibold'>{timeData.time}</p>
                                        </div>
                                    ))
                                }
                            </div>

                        </div>
                        {/* =============arrival part=============== */}
                        <div className='mt-4'>
                            <div className="px-4">
                                <p className='font-bold'>ARRIVAL TIME IN MEECA</p>
                            </div>

                            <div className="px-5 d-md-flex justify-content-between">
                                {
                                    timeDatas.slice(0, 2).map(timeData => (
                                        <div key={timeData.id} className='px-3 mb-3 text-center'>
                                            <img src={timeData.img} alt="" />
                                            <p className='m-0 font-semibold'>{timeData.title}</p>
                                            <p className='m-0 font-semibold'>{timeData.time}</p>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className="px-5 d-md-flex justify-content-between">
                                {
                                    timeDatas.slice(2, 4).map(timeData => (
                                        <div key={timeData.id} className='px-3 mb-3 text-center'>
                                            <img src={timeData.img} alt="" />
                                            <p className='m-0 font-semibold'>{timeData.title}</p>
                                            <p className='m-0 font-semibold'>{timeData.time}</p>
                                        </div>
                                    ))
                                }
                            </div>

                        </div>
                    </div>
                </div>
            </div>


            {/* details part */}
            <div className="flights_CardSection">
                <div className='mx-3 text-white pt-2 shadow' style={{ background: '#02A3C1' }}>
                    <div className='d-md-flex justify-content-center align-items-center'>
                        <div className="width_20 text-center">
                            <p className="font-bold">AIRLINE</p>
                        </div>
                        <div className="width_20 text-center">
                            <p className="font-bold">DEPARTURE</p>
                        </div>
                        <div className="width_20 text-center">
                            <p className="font-bold">DURATION</p>
                        </div>
                        <div className="width_20 text-center">
                            <p className="font-bold">ARRIVAL</p>
                        </div>
                        <div className="width_20 text-center">
                            <p className="font-bold">PRICE</p>
                        </div>
                    </div>
                </div>
                {
                    cardDatas.map(cardData => (
                        <div key={cardData.id} className='mx-3 rounded border border-dark  my-3 bg-light shadow'>
                            <div className='d-md-flex border-bottom pb-2 border-dark align-items-center'>

                                <div className="width_20 d-flex align-items-center justify-content-center">
                                    <div>
                                        <img src={indigoLogo} alt="" style={{ width: "60px" }} />
                                    </div>
                                    <div>
                                        <h6 className='m-0'>INDIGO</h6>
                                        <p className="m-0" style={{ fontSize: '12px' }}>(IN-855)</p>
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
                                    <h5 className="font-bold m-0">₹ 80,000</h5>
                                    <p className="m-0">Per Person</p>
                                    <button type='button' onClick={()=>setShow(!show)}
                                    className="flight_view_details_btn">
                                        View Details
                                        </button>
                                </div>
                            </div>
                            {
                                show && <FlightsDetails />
                            }
                        </div>
                    ))
                }
            </div>
        </section>
    );
};

export default FlightsMoreDetails;