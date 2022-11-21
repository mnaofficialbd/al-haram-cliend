import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faBus, faCouch, faKaaba, faMugHot, faPlaneDeparture, faCalendarDays, faLocationDot, faUsers, faCalendarDay, faVcard } from '@fortawesome/free-solid-svg-icons';
import kaba from '../../Assets/umrahPackages/kaba.png';
import { NavLink } from 'react-router-dom';
import morningSunset from '../../Assets/Flights/Sunset.png';
import morningSun from '../../Assets/Flights/Sun.png';
import afternoonSunset from '../../Assets/Flights/afternoonSunset.png';
import eveningMoon from '../../Assets/Flights/moon.png';

const FlightsMoreDetails = () => {

    const classicCardDatas = [
        { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }
    ]
    const countryDatas = [
        { id: 1, title: 'Direct (5)', num: 13999 },
        { id: 2, title: '1 Stop (34)', num: 12999 },
        { id: 3, title: '2 Stop (65)', num: 19499 }
    ]
    const cityDatas = [
        { id: 1, title: 'Vistara(76)', num: 13456 },
        { id: 2, title: 'Indigo(33)', num: 17236 },
        { id: 3, title: 'Spaacejet(67)', num: 18447 },
        { id: 4, title: 'Gofirst(1)', num: 19499 }
    ]
    const monthDatas = [
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
        <section className='mt-5 pt-5 d-md-flex'>
            <div class="d-flex flex-column flex-shrink-0 px-2 bg-light umrahSideBar" >
                <div className='rounded px-2 h-100'>

                    {/* =============Departure country section=============== */}
                    <div className='bg-light border border-secondary mb-5 mx-2'>
                        <div className='px-4'>
                            <h6 className='font-bold py-3' style={{ fontSize: '22px' }}>FILTER BY</h6>
                        </div>

                        {/* stops section */}
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
                                countryDatas.map(countryData => (
                                    <div key={countryData.id} className="d-flex justify-content-between px-4 font-semibold">
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                            <label class="form-check-label" for="inlineCheckbox1">{countryData.title}</label>
                                        </div>
                                        <div>
                                            <p>Rs {countryData.num}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>

                        {/* airlines section */}
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
                                cityDatas.map(cityData => (
                                    <div key={cityData.id} className="d-flex justify-content-between px-4 font-semibold">
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                            <label class="form-check-label" for="inlineCheckbox1">{cityData.title}</label>
                                        </div>
                                        <div>
                                            <p>Rs {cityData.num}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        {/* =============TRAVEL & BAGGAGE section=============== */}

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
                                monthDatas.map(monthData => (
                                    <div key={monthData.id} className="d-flex justify-content-between px-4 font-semibold">
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                            <label class="form-check-label" for="inlineCheckbox1">{monthData.title}</label>
                                        </div>
                                        <div>
                                            <p>Rs {monthData.num}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        {/* =============departure section=============== */}
                        <div className='mt-4'>
                            <div className="px-4">
                                <p className='font-bold'>DEPARTURE TIME IN HYDERABAD</p>
                            </div>

                            <div className="px-5 d-md-flex justify-content-between">
                                {
                                    timeDatas.slice(0,2).map(timeData => (
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
                                    timeDatas.slice(2,4).map(timeData => (
                                        <div key={timeData.id} className='px-3 mb-3 text-center'>
                                            <img src={timeData.img} alt="" />
                                            <p className='m-0 font-semibold'>{timeData.title}</p>
                                            <p className='m-0 font-semibold'>{timeData.time}</p>
                                        </div>
                                    ))
                                }
                            </div>

                        </div>
                        {/* =============arrival section=============== */}
                        <div className='mt-4'>
                            <div className="px-4">
                                <p className='font-bold'>ARRIVAL TIME IN MEECA</p>
                            </div>

                            <div className="px-5 d-md-flex justify-content-between">
                                {
                                    timeDatas.slice(0,2).map(timeData => (
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
                                    timeDatas.slice(2,4).map(timeData => (
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
            <div className="umrahCardSection">

                {
                    classicCardDatas.map(classicData => (
                        <div key={classicData.id} className='mx-3 mb-5 bg-light shadow'>
                            <div className='d-md-flex align-items-center'>
                                <div className='card_img'>
                                    <img src={kaba} alt="" />
                                </div>
                                <div className='mx-3 w-100'>
                                    <div className='card_text_section'>
                                        <div className='d-flex'>
                                            <div>
                                                <h4 className="mb-2 classic_umrah_title" >Classic Umrah Package</h4>
                                            </div>
                                            <div className="d-flex align-items-center ms-3">
                                                <FontAwesomeIcon className='me-2' style={{ color: 'rgb(230, 255, 5)', width: "18px", height: "18px" }} icon={faStar}></FontAwesomeIcon>
                                                <FontAwesomeIcon className='me-2' style={{ color: 'rgb(230, 255, 5)', width: "18px", height: "18px" }} icon={faStar}></FontAwesomeIcon>
                                                <FontAwesomeIcon className='me-2' style={{ color: 'rgb(230, 255, 5)', width: "18px", height: "18px" }} icon={faStar}></FontAwesomeIcon>
                                                <FontAwesomeIcon className='me-2' style={{ color: 'rgb(230, 255, 5)', width: "18px", height: "18px" }} icon={faStar}></FontAwesomeIcon>
                                            </div>
                                        </div>
                                        <div className=''>
                                            <p className='font-semibold pt-3'>Per Person</p>
                                        </div>
                                    </div>

                                    <div className='card_text_div mt-2'>
                                        <div>
                                            <div className="d-flex ">
                                                <div className="me-3">
                                                    <div className="d-flex mb-2">
                                                        <FontAwesomeIcon className='me-3' style={{ color: '#575757', width: "24px", height: "24px" }} icon={faCalendarDays}></FontAwesomeIcon>
                                                        <p className='font-semibold' style={{ fontSize: '18px' }}>10 Days</p>
                                                    </div>
                                                    <div className="d-flex">
                                                        <FontAwesomeIcon className='me-3' style={{ color: '#575757', width: "24px", height: "24px" }} icon={faCalendarDay}></FontAwesomeIcon>
                                                        <p className='font-semibold' style={{ fontSize: '18px' }}>13 Sep 2022</p>
                                                    </div>
                                                </div>
                                                <div className="mx-3">
                                                    <div className="d-flex">
                                                        <FontAwesomeIcon className='me-3' style={{ color: '#575757', width: "24px", height: "24px" }} icon={faUsers}></FontAwesomeIcon>
                                                        <p className='font-semibold' style={{ fontSize: '18px' }}>50 Members</p>
                                                    </div>
                                                    <div className="d-flex">
                                                        <FontAwesomeIcon className='me-3' style={{ color: '#575757', width: "24px", height: "24px" }} icon={faLocationDot}></FontAwesomeIcon>
                                                        <p className='font-semibold' style={{ fontSize: '18px' }}>Delhi - INDIA</p>
                                                    </div>

                                                </div>
                                            </div>
                                            <hr />
                                        </div>

                                        <div className='block_to_flex'>
                                            <h4 className='font-semibold mb-3 text-end' style={{ fontSize: '30px', color: '#02A3C1' }}>₹ 120,000</h4>


                                            {/* <button
                                                onClick={() => handlePackageDetails(id)}
                                                className="text-uppercase font-bold umrah_details_btn me-2">
                                                View details
                                            </button> */}

                                            <NavLink to='/umrah/packageDetails' className='text-uppercase font-bold umrah_details_btn me-2'>View details</NavLink>
                                        </div>
                                    </div>
                                    <p className='font-semibold' style={{ fontSize: '20px' }}>INCLUSION</p>
                                    <div className='card_text_div mt-3'>
                                        <div className="d-flex pb-3">
                                            <span className='me-4 border border-secondary p-1'>
                                                <FontAwesomeIcon style={{ width: "26px", height: "26px" }} icon={faPlaneDeparture}></FontAwesomeIcon>
                                            </span>
                                            <span className='border border-secondary me-4 p-1'>
                                                <FontAwesomeIcon style={{ width: "26px", height: "26px" }} icon={faBus}></FontAwesomeIcon>
                                            </span>

                                            <span className='me-4 border border-secondary p-1'>
                                                <FontAwesomeIcon style={{ width: "26px", height: "26px" }} icon={faVcard} />

                                            </span>
                                            <span className='me-4 border border-secondary p-1'>
                                                <FontAwesomeIcon style={{ width: "26px", height: "26px" }} icon={faCouch}></FontAwesomeIcon>
                                            </span>
                                            <span className='me-4 border border-secondary p-1'>
                                                <FontAwesomeIcon style={{ width: "26px", height: "26px" }} icon={faMugHot}></FontAwesomeIcon>
                                            </span>
                                            <span className='border border-secondary p-1'>
                                                <FontAwesomeIcon style={{ width: "26px", height: "26px" }} icon={faKaaba}></FontAwesomeIcon>
                                            </span>
                                        </div>
                                        <div className='pb-3'>
                                            <button className='pax-btn font-capitalize font-bold'>
                                                40 Remaining Pax
                                            </button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    ))
                }




            </div>
        </section>
    );
};

export default FlightsMoreDetails;