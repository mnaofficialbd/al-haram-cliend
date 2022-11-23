import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faChair, faPlane } from '@fortawesome/free-solid-svg-icons';
import morningSunset from '../../Assets/Flights/Sunset.png';
import morningSun from '../../Assets/Flights/Sun.png';
import afternoonSunset from '../../Assets/Flights/afternoonSunset.png';
import eveningMoon from '../../Assets/Flights/moon.png';
import indigoLogo from '../../Assets/Flights/indiGoLogo.png';
import FlightsDetails from './FlightsDetails';
import { faCircle } from '@fortawesome/free-regular-svg-icons';

const FlightsMoreDetails = () => {

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
                    <div className='bg-light border border-secondary mb-5 mx-2'>
                        <div className='px-4'>
                            <h6 className='font-bold py-3' style={{ fontSize: '22px' }}>FILTER BY</h6>
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
                    <div className='d-md-flex justify-content-between align-items-center'>
                        <div className="d-flex width_40 align-items-center justify-content-around">
                            <div>
                                <p className="font-bold">AIRLINE</p>
                            </div>
                            <div>
                                <p className="font-bold">DEPARTURE</p>
                            </div>
                        </div>
                        <div className="width_20 text-center">
                            <p className="font-bold">DURATION</p>
                        </div>
                        <div className="d-flex width_40 align-items-center justify-content-around">
                            <div>
                                <p className="font-bold">ARRIVAL</p>
                            </div>
                            <div>
                                <p className="font-bold">PRICE</p>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    cardDatas.map(cardData => (
                        <div key={cardData.id} className='mx-3 rounded border border-dark py-4 my-3 bg-light shadow'>

                            <div className='d-md-flex border-bottom pb-2 border-dark justify-content-between align-items-center'>
                                <div className="d-flex width_40 justify-content-around align-items-center">
                                    <div>
                                        <img src={indigoLogo} alt="" />
                                        <h6>INDIGO</h6>
                                        <p className="m-0">(IN-855)</p>
                                    </div>
                                    <div>
                                        <h5 className="font-bold">21:40</h5>
                                        <h6>DELHI(T: 1D)</h6>
                                        <p className="m-0">TUE, 30 AUG 2022</p>
                                    </div>
                                </div>
                                <div className="width_20 d-flex flex-column justify-content-center align-items-center">
                                    <p>3H 20M (DIRECT)</p>
                                    <div className='d-flex align-items-center'>
                                        <FontAwesomeIcon className='' style={{ width: "12px", height: "12px" }} icon={faCircle}></FontAwesomeIcon>
                                        <p className="m-0" style={{ fontSize: '20px' }}>.....</p>
                                        <FontAwesomeIcon className='' style={{ width: "20px", height: "20px" }} icon={faPlane}></FontAwesomeIcon>
                                        <p className="m-0">.......</p>
                                        <FontAwesomeIcon className='' style={{ width: "12px", height: "12px" }} icon={faCircle}></FontAwesomeIcon>

                                    </div>
                                    <p>NON-STOP</p>
                                </div>
                                <div className="d-flex width_40 justify-content-around align-items-center">
                                    <div>
                                        <h5 className="font-bold">23:55</h5>
                                        <h6>MECCA(T: 2D)</h6>
                                        <p className="m-0">TUE, 30 AUG 2022</p>
                                    </div>
                                    <div>
                                        <h5 className="font-bold">RS 17,995/-</h5>
                                        <p className="">Return Per Traveller</p>
                                        <button className="details-btn">BOOK</button>
                                    </div>
                                </div>
                            </div>
                            <div className='border-bottom pt-2 border-dark'>
                                <div className='px-5 d-md-flex justify-content-between align-items-center'>
                                    <div className="d-flex width_40 justify-content-between">
                                        <div className='d-flex'>
                                            <FontAwesomeIcon className='me-2 pt-1' style={{ width: "18px", height: "18px" }} icon={faBriefcase}></FontAwesomeIcon>
                                            <p className='font-semibold'>15 KG (ONE PIECE ONLY) / 7 KG</p>
                                        </div>
                                        <div className='d-flex'>
                                            <FontAwesomeIcon className='me-2 pt-1' style={{ width: "18px", height: "18px" }} icon={faChair}></FontAwesomeIcon>
                                            <p className='font-semibold'>8 SEAT(S)</p>
                                        </div>
                                    </div>
                                    <div className="d-flex">
                                        <p className='font-semibold me-2'>FLIGHTS DETAILS</p>
                                        <p className='font-bold'> ˅ </p>
                                    </div>
                                </div>

                            </div>
                            <FlightsDetails />
                        </div>
                    ))
                }




            </div>
        </section>
    );
};

export default FlightsMoreDetails;