import React from 'react';
import ExploreSACards from './ExploreSACards';

const ExploreSA = () => {
    return (
        <section className='container mt-5 pt-5'>
            <div className="">
                <div className='my-3 ps-3'>
                    <h3 className='text-uppercase font-bold' style={{ fontSize: '2rem' }}>Explore Saudi Arabia</h3>
                    <p className='text-uppercase' style={{color: '#777777', fontSize: '16px'}}>trending umrah packages from popular destinations</p>
                </div>
                <div>
                    <ExploreSACards />
                </div>
            </div>
        </section>
    );
};

export default ExploreSA;