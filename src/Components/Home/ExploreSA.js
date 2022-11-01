import React from 'react';
import ExploreSACards from './ExploreSACards';

const ExploreSA = () => {
    return (
        <section className='mt-5 pt-5'>
            <div className="">
                <div className='text-center'>
                    <h3 className='text-uppercase text-[40px] font-semibold'>Explore Saudi Arabia</h3>
                    <p className='text-uppercase'>Discover best things to do restaurants, shopping, hotels, cafes and places</p>
                </div>
                <div style={{background: '#02A3C121'}}>
                    <ExploreSACards />
                </div>
            </div>
        </section>
    );
};

export default ExploreSA;