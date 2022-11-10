import React from 'react';
import Hero from '../Components/Home/Hero';
import DealsDiscount from '../Components/Home/DealsDiscount';
import ExploreSA from '../Components/Home/ExploreSA';
import WhyChooseUs from '../Components/Home/WhyChooseUs';
import UltimateCompanion from '../Components/Home/UltimateCompanion';
import Footer from '../Components/Shared/Footer';
import Reviews from '../Components/Home/Reviews';
import SubNavber from '../Components/Home/SubNavber';
import HeroSummerySection from '../Components/Home/HeroSummerySection';
import SpecialOffer from '../Components/Home/SpecialOffer';
import PopularUDeals from '../Components/Home/PopularUDeals';

const Home = () => {
    return (
        <div>
            <SubNavber />
            <Hero />
            <HeroSummerySection />
            <SpecialOffer />
            <PopularUDeals />
            <WhyChooseUs />
            <DealsDiscount />
            <Reviews />
            <ExploreSA />
            <UltimateCompanion />
            <Footer />
        </div>
    );
};

export default Home;