import React from 'react';
import Hero from '../Components/Home/Hero';
// import OfferDiscount from '../Components/Home/OfferDiscount';
// import OffersDiscountsCards from '../Components/Home/OffersDiscountsCards';
// import UmrahP from '../Components/Home/UmrahP';
// import LandPacks from '../Components/Home/LandPacks';
// import LandPacksCards from '../Components/Home/LandPacksCards';
import ExploreSA from '../Components/Home/ExploreSA';
// import PopularAirlines from '../Components/Home/PopularAirlines';
import WhyChooseUs from '../Components/Home/WhyChooseUs';
import UltimateCompanion from '../Components/Home/UltimateCompanion';
import Footer from '../Components/Shared/Footer';
// import AdBanner from '../Components/Home/AdBanner';
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
            <SpecialOffer/>
            <PopularUDeals />
            <WhyChooseUs />
            {/* <AdBanner /> */}
            {/* <UmrahP /> */}
            {/* <OfferDiscount /> */}
            {/* <OffersDiscountsCards /> */}
            <Reviews />
            <ExploreSA />
            {/* <LandPacks /> */}
            {/* <LandPacksCards /> */}
            <UltimateCompanion />
            {/* <PopularAirlines /> */}
            <Footer />
        </div>
    );
};

export default Home;