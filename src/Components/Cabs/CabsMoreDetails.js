import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import morningSunset from '../../Assets/Flights/Sunset.png';
import morningSun from '../../Assets/Flights/Sun.png';
import afternoonSunset from '../../Assets/Flights/afternoonSunset.png';
import eveningMoon from '../../Assets/Flights/moon.png';
import bociLogo from '../../Assets/Hotel/bociLogo.png';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

const CabsMoreDetails = () => {

    const cardDatas = [
        { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }
    ]
    const busTypes = [
        { id: 1, title: 'ac' },
        { id: 2, title: 'non ac' },
        { id: 3, title: 'sleeper' },
        { id: 4, title: 'seater' },
    ]
    const feeCancellations = [
        { id: 1, title: '12 hours' },
        { id: 2, title: '24 hours' },
        { id: 3, title: '48 hours' },
        { id: 4, title: '72 hours' },
    ]
    const boardingPoints = [
        { id: 1, title: 'anand rao circle' },
        { id: 2, title: '8th mile bus stop' },
        { id: 3, title: 'anand rao circle' },
        { id: 4, title: '8th mile bus stop' },
        { id: 5, title: 'anand rao circle' },
        { id: 6, title: 'new delhi gate no 5' },
    ]
    const droppingPoints = [
        { id: 1, title: 'anand rao circle' },
        { id: 2, title: '8th mile bus stop' },
        { id: 3, title: 'anand rao circle' },
        { id: 4, title: '8th mile bus stop' },
        { id: 5, title: 'anand rao circle' },
        { id: 6, title: 'new delhi gate no 5' },
    ]
    const busOperators = [
        { id: 1, title: 'm a travels' },
        { id: 2, title: 'baalaji travels' },
        { id: 3, title: 'john travels' },
        { id: 4, title: '8th mile bus stop' },
        { id: 5, title: 'smith travels' },
        { id: 6, title: 'new delhi travels' },
    ]
    const amenities = [
        { id: 1, title: 'cctv', num: 4 },
        { id: 2, title: 'gps', num: 6 },
        { id: 3, title: 'snacks', num: 4 },
        { id: 4, title: 'wifi', num: 6 },
        { id: 5, title: 'fan', num: 4 },
        { id: 6, title: 'blankets', num: 6 }
    ]

    const timeDatas = [
        { id: 1, title: 'Early Morning', img: morningSunset, time: '00:00 - 04:59' },
        { id: 2, title: 'Morning', img: morningSun, time: '05:00 - 11:59' },
        { id: 3, title: 'Afternoon', img: afternoonSunset, time: '12:00 - 17:59' },
        { id: 4, title: 'Evening', img: eveningMoon, time: '18:00 - 23:59' }
    ]

    return (
        <section className='mt-5 pt-4 '>
            <div className='container pe-5 me-5'>
                <p className='text-end mb-1 pe-2'>1,258 Buses Found</p>
            </div>
            <div className='d-md-flex justify-content-center'>
                <div class="d-flex flex-column flex-shrink-0 bus_SideBar" >
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
                                <div className='bg-light mb-2 '>
                                    <div className='px-4 bg-white pt-4'>
                                        <div className='py-2' style={{ fontSize: '14px' }}>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                                <label class="form-check-label" for="inlineCheckbox1">ON TIME GUARANTEE</label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                                <label class="form-check-label" for="inlineCheckbox1">GPS ENABLED BUSES</label>
                                            </div>
                                        </div>
                                        <h5 className='m-0'>PRICE</h5>
                                        <div className="d-flex py-2 justify-content-between" style={{ fontSize: '14px' }}>
                                            <p className='m-0'>RS 1200</p>
                                            <p className='m-0'>RS 2500</p>
                                        </div>
                                        <div>
                                            <input className='w-100' type="range" min="0" max="100" />
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                                {/* busTypes part */}
                                <div className=''>
                                    <div className="pt-2">
                                        <h5 className='font-semibold px-4 text-uppercase'>bus Type</h5>
                                        {
                                            busTypes.map(busType => (
                                                <div key={busType.id} className="px-4" style={{ fontSize: '14px' }}>
                                                    <input class="form-check-input me-2" type="checkbox" id="inlineCheckbox1" value="option1" />
                                                    <label class="form-check-label text-uppercase" for="inlineCheckbox1">{busType.title}</label>
                                                </div>
                                            ))
                                        }
                                    </div>
                                    <hr />
                                </div>
                                {/* feeCancellations part */}
                                <div className=''>
                                    <div className="pt-2">
                                        <h5 className='font-semibold px-4 text-uppercase'>fee Cancellation</h5>
                                        {
                                            feeCancellations.map(feeCancellation => (
                                                <div key={feeCancellation.id} className="px-4" style={{ fontSize: '14px' }}>
                                                    <input class="form-check-input me-2" type="checkbox" id="inlineCheckbox1" value="option1" />
                                                    <label class="form-check-label text-uppercase" for="inlineCheckbox1">{feeCancellation.title}</label>
                                                </div>
                                            ))
                                        }
                                    </div>
                                    <hr />
                                </div>

                                {/* =============departure part=============== */}
                                <div className=''>
                                    <h5 className='font-semibold px-4 '>DEPARTURE TIME</h5>

                                    <div className="d-flex justify-content-center">
                                        {
                                            timeDatas.slice(0, 2).map(timeData => (
                                                <div key={timeData.id} className='card shadow m-1 px-4 py-2 text-center'>
                                                    <img src={timeData.img} alt="" className='' />
                                                    <div className="">
                                                        <p className='m-0' style={{ fontSize: '12px' }}>{timeData.title}</p>
                                                        <p className='m-0' style={{ fontSize: '12px' }}>{timeData.time}</p>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                    <div className="d-flex justify-content-center">
                                        {
                                            timeDatas.slice(2, 4).map(timeData => (
                                                <div key={timeData.id} className='card shadow m-1 px-4 py-2 text-center'>
                                                    <img src={timeData.img} alt="" className='' />
                                                    <div className="">
                                                        <p className='m-0' style={{ fontSize: '12px' }}>{timeData.title}</p>
                                                        <p className='m-0' style={{ fontSize: '12px' }}>{timeData.time}</p>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                    <hr />

                                    {/* accordion part */}
                                    <div class="accordion accordion-flush" id="accordionFlushExample">
                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="flush-headingOne">
                                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                    BOARDING POINTS
                                                </button>
                                            </h2>
                                            <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                                <div className="accordion-body">
                                                    <input type="text" className='px-2 w-100' placeholder='Search Boarding Point' />
                                                    {
                                                        boardingPoints.map(boardingPoint => (
                                                            <div key={boardingPoint.id} className="mt-2" style={{ fontSize: '14px' }}>
                                                                <input class="form-check-input me-2" type="checkbox" id="inlineCheckbox1" value="option1" />
                                                                <label class="form-check-label text-capitalize" for="inlineCheckbox1">{boardingPoint.title}</label>
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="flush-headingTwo">
                                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                                    DROPPING POINTS
                                                </button>
                                            </h2>
                                            <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                                <div className="accordion-body">
                                                    <input type="text" className='px-2 w-100' placeholder='Search Dropping Point' />
                                                    {
                                                        droppingPoints.map(droppingPoint => (
                                                            <div key={droppingPoint.id} className="pt-2" style={{ fontSize: '14px' }}>
                                                                <input class="form-check-input me-2" type="checkbox" id="inlineCheckbox1" value="option1" />
                                                                <label class="form-check-label text-capitalize" for="inlineCheckbox1">{droppingPoint.title}</label>
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="flush-headingThree">
                                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                                    AMENITIES
                                                </button>
                                            </h2>
                                            <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                                <div class="accordion-body">
                                                    <h5 className='font-semibold '>AMENITIES</h5>
                                                    {
                                                        amenities.map(amenitie => (
                                                            <div key={amenitie.id} className="d-flex justify-content-between pt-2" style={{ fontSize: '14px' }}>
                                                                <div class="form-check form-check-inline">
                                                                    <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                                                    <label class="form-check-label" for="inlineCheckbox1">{amenitie.title}</label>
                                                                </div>
                                                                <div>
                                                                    <p>({amenitie.num})</p>
                                                                </div>
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="flush-headingFour">
                                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                                    BUS OPERATION
                                                </button>
                                            </h2>
                                            <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                                                <div class="accordion-body">
                                                    <input type="text" className='px-2 w-100' placeholder='Search Bus Opetator' />
                                                    {
                                                        busOperators.map(busOperator => (
                                                            <div key={busOperator.id} className="pt-2" style={{ fontSize: '14px' }}>
                                                                <input class="form-check-input me-2" type="checkbox" id="inlineCheckbox1" value="option1" />
                                                                <label class="form-check-label text-capitalize" for="inlineCheckbox1">{busOperator.title}</label>
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* details part */}
                <div className="flights_CardSection">
                    <div className='mx-3 text-white py-3 shadow' style={{ background: '#02A3C1' }}>
                        <div className='d-md-flex justify-content-center align-items-center'>
                            <div className="width_20 text-center">
                                <p className="font-bold">Bus Operator</p>
                            </div>
                            <div className="width_20 text-center">
                                <p className="font-bold">Departure</p>
                            </div>
                            <div className="width_20 text-center">
                                <p className="font-bold">Duration</p>
                            </div>
                            <div className="width_20 text-center">
                                <p className="font-bold">Arrival</p>
                            </div>
                            <div className="width_20 text-center">
                                <p className="font-bold">Price</p>
                            </div>
                        </div>
                    </div>
                    {
                        cardDatas.map(cardData => (
                            <div key={cardData.id} className='mx-3 rounded border border-dark  my-3 bg-white shadow'>
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