import React from 'react';
import Hero from '../Components/Home/Hero';
import OfferDiscount from '../Components/Home/OfferDiscount';
import OffersDiscountsCards from '../Components/Home/OffersDiscountsCards';
import UmrahP from '../Components/Home/UmrahP';
import UmrahPacksCards from '../Components/Home/UmrahPacksCards';
import LandPacks from '../Components/Home/LandPacks';
import LandPacksCards from '../Components/Home/LandPacksCards';
import ExploreSA from '../Components/Home/ExploreSA';
import ExploreSACards from '../Components/Home/ExploreSACards';
import PopularAirlines from '../Components/Home/PopularAirlines';
import WhyBookUs from '../Components/Home/WhyBookUs';

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
            <ExploreSA />
            <ExploreSACards />
            <PopularAirlines />
            <WhyBookUs />
        </div>
    );
};

export default Home;