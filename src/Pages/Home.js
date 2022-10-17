import React from 'react';
import Hero from '../Components/Home/Hero';
import OfferDiscount from '../Components/Home/OfferDiscount';
import UmrahP from '../Components/Home/UmrahP';

const Home = () => {
    return (
        <div>
            <Hero />
            <UmrahP />
            <OfferDiscount />
        </div>
    );
};

export default Home;