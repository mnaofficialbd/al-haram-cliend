import React from 'react';
import adBanner from '../../Assets/Backgrounds/adBanner.png';

const AdBanner = () => {
    return (
        <div className='container d-flex g-4'>
            <div><img src={adBanner} alt="" /></div>
            <div><img src={adBanner} alt="" /></div>
        </div>
    );
};

export default AdBanner;