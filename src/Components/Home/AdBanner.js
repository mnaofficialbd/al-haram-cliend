import React from 'react';
import adBanner from '../../Assets/Backgrounds/adBanner.png';

const AdBanner = () => {
    return (
        <div className='container d-md-flex justify-content-center mt-4 p-2'>
            <div className='my-4 p-2'>
                <img src={adBanner} alt="" style={{width: '580px'}} />
            </div>
            <div className='my-4 p-2'>
                <img src={adBanner} alt="" style={{width: '580px'}} />
            </div>
        </div>
    );
};

export default AdBanner;