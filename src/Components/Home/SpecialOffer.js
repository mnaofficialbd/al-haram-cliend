import React from 'react';
import makkahImg from '../../Assets/SpecialOffer/mokka.png';
import planeImg from '../../Assets/SpecialOffer/plane.png';
import roomImg from '../../Assets/SpecialOffer/room.png';

const SpecialOffer = () => {

    const datas = [
        { id: 1, title1: 'Explore Umrah', title2:'Packages', img: makkahImg },
        { id: 2, title1: 'Create your own', title2:'umrah package', img: planeImg },
        { id: 3, title1: 'Up to 70%', title2:'Discount!', img: roomImg }
    ]

    return (
        <section className='container mt-4 pt-4'>
            <div className="text-center my-5">
                <h3 className='text-uppercase' style={{ fontSize: '1.325rem' }}>Special Offers</h3>
                <p className="text-capitalize" style={{ color: '#777777', fontSize: '16px' }}>These popular destinations have a lot to offer</p>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-5">
                {
                    datas.map(data => (
                        <div key={data.id} className="col">
                            <div className="card h-100 ">
                                <img src={data.img} className="card-img" alt="..." />
                                <div className="card-img-overlay p-5">
                                    <h4 className='text-uppercase text-white' style={{ fontSize: '1.5rem' }}>{data.title1} <br></br> {data.title2} </h4>
                                    <button type='button' className='btn btn-light text-uppercase px-4 rounded-0 mt-2' style={{ fontSize: '14px' }}>View More</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    );
};

export default SpecialOffer;