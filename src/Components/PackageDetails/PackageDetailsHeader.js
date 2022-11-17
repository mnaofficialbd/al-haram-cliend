import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const PackageDetailsHeader = () => {
    return (
        <section>
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
                        <p className='font-semibold pt-3'>Per Person</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PackageDetailsHeader;