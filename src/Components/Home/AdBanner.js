import React from 'react';
import adBanner from '../../Assets/Backgrounds/adBanner.png';

const AdBanner = () => {
    return (
        <div className='container d-flex justify-content-between mt-4 p-2'>
            <div>
                <img src={adBanner} alt="" style={{width: '640px'}} />
            </div>
            <div>
                <img src={adBanner} alt="" style={{width: '640px'}} />
            </div>
        </div>
    );
};

export default AdBanner;