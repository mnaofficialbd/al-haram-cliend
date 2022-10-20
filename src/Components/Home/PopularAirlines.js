import React from 'react';
import indiGo from '../../Assets/PopularAirlines/IndiGo.png';
import qatar from '../../Assets/PopularAirlines/Qatar.png';
import saudia from '../../Assets/PopularAirlines/saudia.png';
import vistana from '../../Assets/PopularAirlines/Vistara.png';
import flydubai from '../../Assets/PopularAirlines/flydubai.png';

const PopularAirlines = () => {
    return (
        <section className='container mt-4 py-2'>
                <div className='my-4 py-4'>
                    <h3 className='text-uppercase text-[40px] font-semibold'>Explore Saudi Arabia</h3>
                </div>
                <div className='d-flex mb-4'>
                    <img src={indiGo} alt="" className='mx-2' />
                    <img src={qatar} alt="" className='mx-2' />
                    <img src={saudia} alt="" className='mx-2' />
                    <img src={vistana} alt="" className='mx-2' />
                    <img src={flydubai} alt="" className='mx-2' />
                </div>
        </section>
    );
};

export default PopularAirlines;