import React from 'react';

const LandPacks = () => {
    return (
        <div className='container my-4 py-2'>
            <div className="d-md-flex justify-content-between align-items-end">
                <div>
                    <h3 className='text-uppercase text-[40px] font-semibold'>Land Packages</h3>
                    <p>Trending Umrah Packages From Popular Destinations</p>
                </div>
                <div>
                    <button type="button" className="primary-btn text-[20px] font-bold">View All Land Packages</button>
                </div>
            </div>
        </div>
    );
};

export default LandPacks;