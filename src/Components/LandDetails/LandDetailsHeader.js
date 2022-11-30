import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faShareNodes, faStar } from '@fortawesome/free-solid-svg-icons';

const LandDetailsHeader = () => {
    return (
        <section className='mt-5 pt-5 mx-5'>
            <div className='pt-5 mx-5 px-5'>
                <div className="ms-4">
                    <div className='d-md-flex align-items-center'>
                        <div className='me-4'>
                            <h4 className="classic_umrah_title m-0 pe-4" >10 Days Umrah Package</h4>
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
                        <div className="d-md-flex font-semibold" style={{ fontSize: "16px", color: '#757575' }}>
                            <p className='m-0 pe-2'>Package By <a href="/" className=''>Al Bushra Tours & Travels</a> |</p>
                            <div className='d-md-flex'>
                                <p className='m-0 pe-2'>Package ID : 2489576 |</p>
                                <p className='m-0'>Published Date: 11 Aug 22</p>
                            </div>
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

export default LandDetailsHeader;