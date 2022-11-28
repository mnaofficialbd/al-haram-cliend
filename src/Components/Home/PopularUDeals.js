import React from 'react';
import PopularUmrahDCards from '../../Components/Home/PopularUmrahDCards';

const PopularUDeals = () => {

    const btnDatas = [
        { id: 1, title: 'Umrah Packages' },
        { id: 2, title: 'Land Packages' },
        { id: 3, title: 'Trending Packages' }
    ];

    return (
        <section className='container mt-5 pt-5'>
            <div className="">
                <div className=''>
                    <h3 className='text-uppercase font-bold m-0' style={{ fontSize: '2rem' }}>Popular umrah deals</h3>
                    <div className="d-md-flex justify-content-between align-items-center">
                        <div>
                            <p className='m-0' style={{ fontSize: '16px', color: '#777777' }}>Trending Umrah Packages From Popular Destinations</p>
                        </div>
                        <div className="d-flex justify-content-center my-1">
                            {
                                btnDatas.map(btnData => (
                                    <div key={btnData.id} className=''>
                                        <button className='details-btn me-2'>{btnData.title}</button>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div>
                    <PopularUmrahDCards />
                </div>
            </div>
        </section>
    );
};

export default PopularUDeals;