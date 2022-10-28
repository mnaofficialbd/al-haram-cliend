import React from 'react';
import bgImg from '../../Assets/Backgrounds/alHaramTopBennerBg.png';
import HeroSearchSection from './HeroSearchSection';
import HeroSummerySection from './HeroSummerySection';

const Hero = () => {
    return (
        <section className=''>
            <div style={{ background: `url(${bgImg})`, backgroundSize: 'cover', height: "100vh", backgroundRepeat: 'no-repeat' }} className='bg-dark px-10 py-14'>
                <div className="container py-5">
                    {/* top title part */}
                    <div className='text-center my-5 pt-5 text-white'>
                        <h1 className='text-[32px] text-bold text-uppercase'>budget-friendly & luxury package for a convenient hajj & umrah journey to the holly makkah & madina for muslim brothers & sisters</h1>
                    </div>

                    {/* -------select/search section------------ */}
                    <HeroSearchSection />

                    {/* summery part */}
                    <HeroSummerySection />
                </div>
            </div>
        </section>
    );
};

export default Hero;