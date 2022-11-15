import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faBus, faCouch, faKaaba, faMugHot, faPlaneDeparture, faCalendarDays, faLocationDot, faUsers, faCalendarDay, faVcard } from '@fortawesome/free-solid-svg-icons';
import kaba from '../../Assets/umrahPackages/kaba.png';

const UmrahPackages = () => {
    const classicCardDatas = [
        // { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }
        { id: 1 }
    ]
    return (
        <section className='mt-5 pt-5'>
            <div className="row">
                <div className='col-2 px-2'>
                    <div className='bg-light border border-secondary rounded mx-5 h-50'>
                        <div className='py-3 ps-3' style={{ background: '#02A3C1' }}>
                            <h6 className='font-bold text-white' style={{ fontSize: '20px' }}>Budget Range</h6>
                        </div>
                        <div className='text-center d-flex flex-column align-items-center'>
                            <div>
                            <p className='' style={{ fontSize: '16px' }}>Rs 10,000 To 100,000</p>
                            </div>
                            <div>

                            </div>
                        </div>
                    </div>

                </div>

                {
                    classicCardDatas.map(classicData => (
                        <div key={classicData.id} className='col-9 mx-3 mb-5 px-3 bg-light border border-dark shadow'>
                            <div className='d-flex justify-content-between align-items-center'>
                                <div>
                                    <img src={kaba} alt="" />
                                </div>
                                <div className='mx-5'>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <div className='d-flex'>
                                            <div>
                                                <h5 className="mb-2 font-bold" style={{ color: '#575757', fontSize: '30px' }}>Classic Umrah Package</h5>
                                            </div>
                                            <div className="d-flex mx-3">
                                                <FontAwesomeIcon style={{ color: 'yellow', width: "18px", height: "18px" }} icon={faStar}></FontAwesomeIcon>
                                                <FontAwesomeIcon style={{ color: 'yellow', width: "18px", height: "18px" }} icon={faStar}></FontAwesomeIcon>
                                                <FontAwesomeIcon style={{ color: 'yellow', width: "18px", height: "18px" }} icon={faStar}></FontAwesomeIcon>
                                                <FontAwesomeIcon style={{ color: 'yellow', width: "18px", height: "18px" }} icon={faStar}></FontAwesomeIcon>
                                            </div>
                                        </div>
                                        <div>
                                            <p>Per Person</p>
                                        </div>
                                    </div>

                                    <div className='d-flex justify-content-between my-4'>
                                        <div className="row ">
                                            <div className="col-6">
                                                <div className="d-flex mb-2">
                                                    <FontAwesomeIcon className='me-3' style={{ color: '#575757', width: "24px", height: "24px" }} icon={faCalendarDays}></FontAwesomeIcon>
                                                    <p className='font-semibold' style={{ fontSize: '18px' }}>10 Days</p>
                                                </div>
                                                <div className="d-flex mb-2">
                                                    <FontAwesomeIcon className='me-3' style={{ color: '#575757', width: "24px", height: "24px" }} icon={faCalendarDay}></FontAwesomeIcon>
                                                    <p className='font-semibold' style={{ fontSize: '18px' }}>13 Sep 2022</p>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="d-flex">
                                                    <FontAwesomeIcon className='me-3' style={{ color: '#575757', width: "24px", height: "24px" }} icon={faUsers}></FontAwesomeIcon>
                                                    <p className='font-semibold' style={{ fontSize: '18px' }}>50 Members</p>
                                                </div>
                                                <div className="d-flex">
                                                    <FontAwesomeIcon className='me-3' style={{ color: '#575757', width: "24px", height: "24px" }} icon={faLocationDot}></FontAwesomeIcon>
                                                    <p className='font-semibold' style={{ fontSize: '18px' }}>Delhi - INDIA</p>
                                                </div>

                                            </div>
                                            <hr />
                                        </div>
                                        <div>
                                            <h4 className='font-bold mb-3' style={{ color: '#02A3C1' }}>₹ 120,000</h4>
                                            <button className='details-btn text-uppercase font-bold'>
                                                View details
                                            </button>
                                        </div>
                                    </div>
                                    <p className='font-semibold' style={{ fontSize: '20px' }}>INCLUSION</p>
                                    <div className='d-flex mt-3 justify-content-between'>
                                        <div className="d-flex mb-3">
                                            <span className='me-4 border border-secondary p-1'>
                                                <FontAwesomeIcon style={{ width: "26px", height: "26px" }} icon={faPlaneDeparture}></FontAwesomeIcon>
                                            </span>
                                            <span className='border border-secondary p-1'>
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
                                            <span className='mx-3 border border-secondary p-1'>
                                                <FontAwesomeIcon style={{ width: "26px", height: "26px" }} icon={faKaaba}></FontAwesomeIcon>
                                            </span>
                                        </div>
                                        <div className=''>
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

export default UmrahPackages;