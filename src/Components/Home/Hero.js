import React from 'react';
import bgImg from '../../Assets/Backgrounds/alHaramTopBennerBg.png';
import FormSection from './FormSection';
import HeroSummerySection from './HeroSummerySection';

const Hero = () => {
    return (
        <section className='mt-5 pt-5'>
            <div style={{ background: `url(${bgImg})`, backgroundSize: 'cover', height: "100vh", backgroundRepeat: 'no-repeat' }} >
                <div className="container py-5">
                    {/* top title part */}
                    <div className='text-center my-2 text-white'>
                        <h4 className='text-bold text-uppercase' style={{ fontSize: '50px' }}>Your One Stop Shop For Hajj & Umrah Rituals</h4>
                    </div>

                    {/* -------select/search section------------ */}
                    <FormSection />

                    <HeroSummerySection />
                </div>
            </div>
        </section>
    );
};

export default Hero;