import React from 'react';
import DealsDiscountCards from './DealsDiscountCards';

const DealsDiscount = () => {
    return (
        <section className='container mt-5 py-5'>
            <div className="d-md-flex flex-column justify-content-center align-items-center">
                <div className='text-center'>
                    <h3 className='text-uppercase font-semibold' style={{fontSize:'40px'}}>Deals & Discounts</h3>
                    <p style={{fontSize:'24px', color:'#777777'}}>Trending Umrah Packages From Popular Destinations</p>
                </div>
                <div>
                    <DealsDiscountCards />
                </div>
            </div>
        </section>
    );
};

export default DealsDiscount;