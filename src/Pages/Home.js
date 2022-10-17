import React from 'react';
import Hero from '../Components/Home/Hero';
import OfferDiscount from '../Components/Home/OfferDiscount';
import UmrahP from '../Components/Home/UmrahP';
import UmrahPacksCards from '../Components/Home/UmrahPacksCards';

const Home = () => {
    return (
        <div>
            <Hero />
            <UmrahP />
            <UmrahPacksCards />
            <OfferDiscount />
        </div>
    );
};

export default Home;