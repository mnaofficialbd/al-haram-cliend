import React from 'react';
import Hero from '../Components/Home/Hero';
import DealsDiscount from '../Components/Home/DealsDiscount';
import ExploreSA from '../Components/Home/ExploreSA';
import WhyChooseUs from '../Components/Home/WhyChooseUs';
import UltimateCompanion from '../Components/Home/UltimateCompanion';
import Reviews from '../Components/Home/Reviews';
import SpecialOffer from '../Components/Home/SpecialOffer';
import PopularUDeals from '../Components/Home/PopularUDeals';

const Home = () => {
    
    return (
        <>
            <Hero />
            <SpecialOffer />
            <PopularUDeals />
            <WhyChooseUs  />
            <DealsDiscount />
            <Reviews />
            <ExploreSA />
            <UltimateCompanion />
        </>
    );
};

export default Home;