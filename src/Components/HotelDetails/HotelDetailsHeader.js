import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faMapLocationDot, faShareNodes, faStar } from '@fortawesome/free-solid-svg-icons';

const HotelDetailsHeader = () => {
    return (
        <section className='mt-4 pt-5 mx-5'>
            <div className='mx-5 px-5'>
                <div className="ms-4">
                    <div className='d-md-flex align-items-center'>
                        <div className='me-4'>
                            <h4 className="classic_umrah_title m-0 pe-4" >Universal Luxury Grand Hotel</h4>
                        </div>
                        <div className="d-flex">
                            <div className="d-flex align-items-center me-2">
                                <FontAwesomeIcon className='me-2' style={{ color: 'rgb(230, 255, 5)', width: "14px", height: "14px" }} icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon className='me-2' style={{ color: 'rgb(230, 255, 5)', width: "14px", height: "14px" }} icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon className='me-2' style={{ color: 'rgb(230, 255, 5)', width: "14px", height: "14px" }} icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon className='me-2' style={{ color: 'rgb(230, 255, 5)', width: "14px", height: "14px" }} icon={faStar}></FontAwesomeIcon>
                            </div>
                            <div className=''>
                                <p className='font-semibold pt-3' style={{ fontSize: "16px", color: '#757575' }}>3014 Reviews</p>
                            </div>
                        </div>
                    </div>
                    <div className='card_text_div'>
                        <div className="d-flex align-items-center font-semibold" style={{ fontSize: "16px", color: '#757575' }}>
                        <FontAwesomeIcon className='me-2' style={{ width: "18px", height: "18px" }} icon={faMapLocationDot}></FontAwesomeIcon>
                            <p className='m-0'>28800 Orchard Lake Road, Suite 180 Farmington Hills, U.S.A</p>
                            
                        </div>
                        <div className="d-flex">
                            <button className='details-btn'>
                                <FontAwesomeIcon style={{ width: "18px", height: "18px" }} icon={faShareNodes}></FontAwesomeIcon>
                            </button>
                            <button className='details-btn ms-2'>
                                <FontAwesomeIcon style={{ width: "18px", height: "18px" }} icon={faDownload}></FontAwesomeIcon>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HotelDetailsHeader;