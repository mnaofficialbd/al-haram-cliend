import React from 'react';
import bgImg from '../../Assets/Backgrounds/alHaramTopBennerBg.png';
import FormSection from './FormSection';

const Hero = () => {
    return (
        <section className=''>
            <div style={{ background: `url(${bgImg})`, backgroundSize: 'cover', height: "100vh", backgroundRepeat: 'no-repeat' }} >
                <div className="container py-5">
                    {/* top title part */}
                    <div className='text-center my-5 pb-5 text-white'>
                        <h4 className='text-bold text-uppercase' style={{fontSize: '24px'}}>budget-friendly & luxury package for a convenient hajj & umrah journey to the holly makkah & madina for muslim brothers & sisters</h4>
                    </div>

                    {/* -------select/search section------------ */}
                    <FormSection />

                </div>
            </div>
        </section>
    );
};

export default Hero;