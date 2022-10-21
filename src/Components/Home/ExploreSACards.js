import React from 'react';
import makkahImg from '../../Assets/ExploreSA/makkah.png'
import madinaImg from '../../Assets/ExploreSA/madina.png'
import jeddahImg from '../../Assets/ExploreSA/jeddah.png'
import riyadhImg from '../../Assets/ExploreSA/riyadh.png'

const ExploreSACards = () => {
    return (
        <section className='container mb-4 py-2 text-white'>
            <div className="row row-cols-1 row-cols-md-4 g-4">
                <div className="col">
                    <div className="card h-100 ">
                        <img src={makkahImg} className="card-img" alt="..." />
                        <div className="card-img-overlay text-center align-items-end">
                            <h2 className='text-uppercase'>Makkah</h2>
                            <p className='text-uppercase'>The holy city of prophet muhammad (pbuh)</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={madinaImg} className="card-img" alt="..." />
                        <div className="card-img-overlay text-center">
                            <h2 className='text-uppercase'>Madina</h2>
                            <p className='text-uppercase'>The holy city of prophet muhammad (pbuh)</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={jeddahImg} className="card-img" alt="..." />
                        <div className="card-img-overlay text-center">
                            <h2 className='text-uppercase'>Jeddah</h2>
                            <p className='text-uppercase'>The holy city of prophet muhammad (pbuh)</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={riyadhImg} className="card-img" alt="..." />
                        <div className="card-img-overlay text-center">
                            <h2 className='text-uppercase'>Riyadh</h2>
                            <p className='text-uppercase'>The holy city of prophet muhammad (pbuh)</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>

    );
};

export default ExploreSACards;