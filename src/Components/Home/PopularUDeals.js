import React from 'react';
import PopularUmrahDCards from '../../Components/Home/PopularUmrahDCards';

const PopularUDeals = () => {
    return (
        <div className='container my-4 py-2'>
            <div className="d-md-flex flex-column justify-content-center align-items-center">
                <div className='text-center'>
                    <h3 className='text-uppercase font-semibold' style={{fontSize:'40px'}}>Popular umrah deals</h3>
                    <p style={{fontSize:'24px', color:'#777777'}}>Trending Umrah Packages From Popular Destinations</p>
                </div>
                <div>
                    <PopularUmrahDCards />
                </div>
            </div>
        </div>
    );
};

export default PopularUDeals;