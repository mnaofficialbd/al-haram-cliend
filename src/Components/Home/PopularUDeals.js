import React from 'react';
import PopularUmrahDCards from '../../Components/Home/PopularUmrahDCards';

const PopularUDeals = () => {
    return (
        <section className='container mt-5 pt-5'>
            <div className="d-md-flex flex-column justify-content-center align-items-center">
                <div className='text-center'>
                    <h3 className='text-uppercase font-semibold' style={{ fontSize: '1.325rem' }}>Popular umrah deals</h3>
                    <p style={{fontSize:'16px', color:'#777777'}}>Trending Umrah Packages From Popular Destinations</p>
                </div>
                <div>
                    <PopularUmrahDCards />
                </div>
            </div>
        </section>
    );
};

export default PopularUDeals;