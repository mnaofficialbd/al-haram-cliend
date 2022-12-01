import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import morningSunset from '../../Assets/Flights/Sunset.png';
import morningSun from '../../Assets/Flights/Sun.png';
import afternoonSunset from '../../Assets/Flights/afternoonSunset.png';
import eveningMoon from '../../Assets/Flights/moon.png';
import indigoLogo from '../../Assets/Flights/indiGoLogo.png';
import FlightsDetails from './FlightsDetails';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

const FlightsMoreDetails = () => {

    const [show, setShow] = useState(false)

    const cardDatas = [
        { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }
    ]
    const popularFilters = [
        { id: 1, title: 'Direct (5)', num: 13999 },
        { id: 2, title: 'Morning Departure', num: 12999 },
        { id: 3, title: 'Indigo', num: 19499 }
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
        { id: 4, title: 'Gofirst(1)', num: 19499 },
        { id: 5, title: 'Vistara(76)', num: 13456 },
        { id: 6, title: 'Indigo(33)', num: 17236 },
        { id: 7, title: 'Spaacejet(67)', num: 18447 },
        { id: 8, title: 'Gofirst(1)', num: 19499 }
    ]
    const timeDatas = [
        { id: 1, title: 'Early Morning', img: morningSunset, time: '00:00 - 04:59' },
        { id: 2, title: 'Morning', img: morningSun, time: '05:00 - 11:59' },
        { id: 3, title: 'Afternoon', img: afternoonSunset, time: '12:00 - 17:59' },
        { id: 4, title: 'Evening', img: eveningMoon, time: '18:00 - 23:59' }
    ]

    return (
        <section className='mt-5 pt-4 '>
            <div className='container pe-5 me-4'>
                <p className='text-end mb-1 pe-3'>1,258 Packages Found</p>
            </div>
            <div className='d-md-flex justify-content-center'>
                <div class="d-flex flex-column flex-shrink-0 px-2 flights_SideBar" >
                    <div className='rounded px-2 h-100'>

                        {/* =============Departure country section=============== */}
                        <div className='mb-5 mx-2'>

                            {/* =============Filter section=============== */}
                            <div className='d-flex align-items-center justify-content-center text-white rounded py-3 text-center mb-4' style={{ background: '#02A3C1' }}>
                                <h6 className='font-semibold me-3 m-0' style={{ fontSize: '18px' }}>Filter By</h6>
                                <FontAwesomeIcon className='m-0' icon={faFilter}></FontAwesomeIcon>
                            </div>

                            <div className='border border-secondary rounded'>
                                {/* =============Budget Range section=============== */}
                                <div className='bg-light mb-2'>
                                    <div className='py-1 text-center' style={{ background: '#02A3C1' }}>
                                        <h6 className='font-semibold text-white' style={{ fontSize: '18px' }}>Budget Range</h6>
                                    </div>
                                    <div className='text-center bg-white py-3'>
                                        <p className='m-0' style={{ fontSize: '14px' }}>Rs 10,000 To 100,000</p>
                                        <div>
                                            <input className='' type="range" min="0" max="100" />
                                        </div>
                                    </div>
                                </div>
                                {/* Popular Filters part */}
                                <div className=''>
                                    <div className='py-2 mb-1 text-center' style={{ background: '#02A3C1' }}>
                                        <h6 className='font-semibold text-white m-0' style={{ fontSize: '18px' }}>Popular Filters</h6>
                                    </div>
                                    <div className="py-4">
                                        {
                                            popularFilters.map(popularFilter => (
                                                <div key={popularFilter.id} className="d-flex justify-content-between px-4">
                                                    <div class="form-check form-check-inline">
                                                        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                                        <label class="form-check-label" for="inlineCheckbox1">{popularFilter.title}</label>
                                                    </div>
                                                    <div>
                                                        <p>Rs {popularFilter.num}/-</p>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                                {/* stops part */}
                                <div className=''>
                                    <div className='py-2 mb-1 text-center' style={{ background: '#02A3C1' }}>
                                        <h6 className='font-semibold text-white m-0' style={{ fontSize: '18px' }}>Stops</h6>
                                    </div>
                                    <div className="py-4">
                                        {
                                            stopsDatas.map(stopsData => (
                                                <div key={stopsData.id} className="d-flex justify-content-between px-4">
                                                    <div class="form-check form-check-inline">
                                                        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                                        <label class="form-check-label" for="inlineCheckbox1">{stopsData.title}</label>
                                                    </div>
                                                    <div>
                                                        <p>Rs {stopsData.num}/-</p>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                                {/* airlines part */}
                                <div className=''>
                                    <div className='py-2 mb-1 text-center' style={{ background: '#02A3C1' }}>
                                        <h6 className='font-semibold text-white m-0' style={{ fontSize: '18px' }}>Airlines</h6>
                                    </div>
                                    <div className="py-4">
                                        {
                                            airlinesDatas.map(airlinesData => (
                                                <div key={airlinesData.id} className="d-flex justify-content-between px-4">
                                                    <div class="form-check form-check-inline">
                                                        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                                        <label class="form-check-label" for="inlineCheckbox1">{airlinesData.title}</label>
                                                    </div>
                                                    <div>
                                                        <p>Rs {airlinesData.num}/-</p>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                                {/* =============departure part=============== */}
                                <div className=''>
                                    <div className='py-2 mb-1 text-center' style={{ background: '#02A3C1' }}>
                                        <h6 className='font-semibold text-white m-0' style={{ fontSize: '16px' }}>DEPARTURE TIME IN HYDERABAD</h6>
                                    </div>

                                    <div className="d-md-flex justify-content-center">
                                        {
                                            timeDatas.map(timeData => (
                                                <div key={timeData.id} className='card shadow me-lg-1 mb-3 text-center'>
                                                    <img src={timeData.img} alt="" className='width_87' />
                                                    <div className="">
                                                        <p className='m-0' style={{ fontSize: '12px' }}>{timeData.title}</p>
                                                        <p className='m-0' style={{ fontSize: '12px' }}>{timeData.time}</p>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>


                                </div>
                                {/* =============arrival part=============== */}
                                <div className=''>
                                    <div className='py-2 mb-1 text-center' style={{ background: '#02A3C1' }}>
                                        <h6 className='font-semibold text-white m-0' style={{ fontSize: '16px' }}>DEPARTURE TIME IN HYDERABAD</h6>
                                    </div>

                                    <div className="d-md-flex justify-content-center">
                                        {
                                            timeDatas.map(timeData => (
                                                <div key={timeData.id} className='card shadow me-lg-1 mb-3 text-center'>
                                                    <img src={timeData.img} alt="" className='width_87' />
                                                    <div className="">
                                                        <p className='m-0' style={{ fontSize: '12px' }}>{timeData.title}</p>
                                                        <p className='m-0' style={{ fontSize: '12px' }}>{timeData.time}</p>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>

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
                                        <button type='button' onClick={() => setShow(!show)}
                                            className="flight_view_details_btn mt-2">
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
            </div>
        </section>
    );
};

export default FlightsMoreDetails;