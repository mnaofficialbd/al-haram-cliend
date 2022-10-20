import React from 'react';
import Hero from '../Components/Home/Hero';
import OfferDiscount from '../Components/Home/OfferDiscount';
import OffersDiscountsCards from '../Components/Home/OffersDiscountsCards';
import UmrahP from '../Components/Home/UmrahP';
import UmrahPacksCards from '../Components/Home/UmrahPacksCards';
import LandPacks from '../Components/Home/LandPacks';
import LandPacksCards from '../Components/Home/LandPacksCards';

const Home = () => {
    return (
        <div>
            <Hero />
            <UmrahP />
            <UmrahPacksCards />
            <OfferDiscount />
            <OffersDiscountsCards />
            <LandPacks />
            <LandPacksCards />
        </div>
    );
};

export default Home;