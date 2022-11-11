import React from 'react';
import ExploreSACards from './ExploreSACards';

const ExploreSA = () => {
    return (
        <section className='mt-5 pt-5'>
            <div className="">
                <div className='text-center my-3'>
                    <h3 className='text-uppercase font-semibold' style={{ fontSize: '1.325rem' }}>Explore Saudi Arabia</h3>
                    <p className='text-uppercase' style={{color: '#777777', fontSize: '16px'}}>trending umrah packages from popular destinations</p>
                </div>
                <div style={{background: '#02A3C121'}}>
                    <ExploreSACards />
                </div>
            </div>
        </section>
    );
};

export default ExploreSA;