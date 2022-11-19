import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faShareNodes, faStar } from '@fortawesome/free-solid-svg-icons';

const PackageDetailsHeader = () => {
    return (
        <section className='px-4 pt-5 mx-5'>
            <div className='d-md-flex'>
                <div className='me-4'>
                    <h4 className="mb-2 classic_umrah_title me-4" >Classic Umrah Package</h4>
                </div>
                <div className="d-flex">
                    <div className="d-flex align-items-center me-3">
                        <FontAwesomeIcon className='me-2' style={{ color: 'rgb(230, 255, 5)', width: "18px", height: "18px" }} icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon className='me-2' style={{ color: 'rgb(230, 255, 5)', width: "18px", height: "18px" }} icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon className='me-2' style={{ color: 'rgb(230, 255, 5)', width: "18px", height: "18px" }} icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon className='me-2' style={{ color: 'rgb(230, 255, 5)', width: "18px", height: "18px" }} icon={faStar}></FontAwesomeIcon>
                    </div>
                    <div className=''>
                        <p className='font-semibold pt-3' style={{ fontSize: "18px", color: '#757575' }}>3014 Reviews</p>
                    </div>
                </div>
            </div>
            <div className='card_text_div'>
                <div className="d-md-flex font-semibold" style={{ fontSize: "18px", color: '#757575' }}>
                    <p className='me-2'>Package By <a href="/" className=''>Al Bushra Tours & Travels</a> |</p>
                    <div className='d-flex'>
                        <p className='me-2'>Package ID : 2489576 |</p>
                        <p className=''>Published Date: 11 Aug 22</p>
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
        </section>
    );
};

export default PackageDetailsHeader;