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
                <h3 className='text-uppercase text-[40px] font-semibold'>Popular Airlines</h3>
            </div>
            <div className='d-md-flex mb-4'>
                <div>
                    <img src={indiGo} alt="" className='m-1' />
                </div>
                <div>
                    <img src={qatar} alt="" className='m-1' />
                </div>
                <div>
                    <img src={saudia} alt="" className='m-1' />
                </div>
                <div>
                    <img src={vistana} alt="" className='m-1' />
                </div>
                <div>
                    <img src={flydubai} alt="" className='m-1' />
                </div>
            </div>
        </section>
    );
};

export default PopularAirlines;