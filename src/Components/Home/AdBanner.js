import React from 'react';
import adBanner from '../../Assets/Backgrounds/adBanner.png';

const AdBanner = () => {
    return (
        <div className='container d-md-flex justify-content-between mt-4 p-2'>
            <div className='my-4'>
                <img src={adBanner} alt="" style={{width: '600px'}} />
            </div>
            <div className='my-4'>
                <img src={adBanner} alt="" style={{width: '600px'}} />
            </div>
        </div>
    );
};

export default AdBanner;