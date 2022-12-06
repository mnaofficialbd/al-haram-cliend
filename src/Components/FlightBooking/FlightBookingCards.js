import React from 'react';
import indigoLogo from '../../Assets/Flights/indiGoLogo.png';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FlightBookingCards = () => {

    const cardDatas = [
        { id: 1 }, { id: 2 }
    ]

    return (
        <section className='px-5 mt-5 pt-4'>
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
                                        <button type='button'
                                            className="flight_view_details_btn mt-2">
                                            View Details
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
        </section>
    );
};

export default FlightBookingCards;