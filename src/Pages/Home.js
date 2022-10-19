import React from 'react';
import Hero from '../Components/Home/Hero';
import OfferDiscount from '../Components/Home/OfferDiscount';
import OffersDiscountsCards from '../Components/Home/OffersDiscountsCards';
import UmrahP from '../Components/Home/UmrahP';
import UmrahPacksCards from '../Components/Home/UmrahPacksCards';

const Home = () => {
    return (
        <div>
            <Hero />
            <UmrahP />
            <UmrahPacksCards />
            <OfferDiscount />
            <OffersDiscountsCards />
        </div>
    );
};

export default Home;