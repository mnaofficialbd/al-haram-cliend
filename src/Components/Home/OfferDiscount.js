import React from 'react';

const OfferDiscount = () => {
    return (
        <div className='container mt-4 py-2'>
            <div className="d-flex justify-content-between align-items-end">
                <div>
                    <h3 className='text-uppercase text-[40px] font-semibold'>offers & discounts</h3>
                    <p>Trending Umrah Packages From Popular Destinations</p>
                </div>
                <div>
                    <button type="button" className="primary-btn text-[20px] font-bold">View All Umrah Offers</button>
                </div>
            </div>
        </div>
    );
};

export default OfferDiscount;