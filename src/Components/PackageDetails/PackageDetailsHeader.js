import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faShareNodes, faStar } from '@fortawesome/free-solid-svg-icons';

const PackageDetailsHeader = () => {
    return (
        <section className='px-4'>
            <div className='d-md-flex'>
                <div>
                    <h4 className="mb-2 classic_umrah_title" >Classic Umrah Package</h4>
                </div>
                <div className="d-flex">
                    <div className="d-flex align-items-center ms-3">
                        <FontAwesomeIcon className='me-2' style={{ color: 'rgb(230, 255, 5)', width: "18px", height: "18px" }} icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon className='me-2' style={{ color: 'rgb(230, 255, 5)', width: "18px", height: "18px" }} icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon className='me-2' style={{ color: 'rgb(230, 255, 5)', width: "18px", height: "18px" }} icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon className='me-2' style={{ color: 'rgb(230, 255, 5)', width: "18px", height: "18px" }} icon={faStar}></FontAwesomeIcon>
                    </div>
                    <div className=''>
                        <p className='font-semibold pt-3'>3014 Reviews</p>
                    </div>
                </div>
            </div>
            <div className='card_text_div'>
                <div className="d-flex">
                    <p>Package By <a href="/" className=''>Al Bushra Tours & Travels</a> |</p>
                    <p>Package ID : 2489576 |</p>
                    <p>Published Date: 11 Aug 22</p>
                </div>
                <div className="d-flex">
                    <button className='details-btn'>
                        <FontAwesomeIcon style={{ width: "18px", height: "18px" }} icon={faShareNodes}></FontAwesomeIcon>
                    </button>
                    <button className='details-btn ms-2'>
                        <FontAwesomeIcon  style={{ width: "18px", height: "18px" }} icon={faDownload}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default PackageDetailsHeader;