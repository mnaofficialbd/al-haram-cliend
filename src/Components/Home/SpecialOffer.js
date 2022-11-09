import React from 'react';
import makkahImg from '../../Assets/SpecialOffer/mokka.png';
import planeImg from '../../Assets/SpecialOffer/plane.png';
import roomImg from '../../Assets/SpecialOffer/room.png';

const SpecialOffer = () => {

    const datas = [
        { id: 1, title: 'Explore Umrah Packages', img: makkahImg },
        { id: 2, title: 'Create your own umrah package', img: planeImg },
        { id: 3, title: 'Up to 70%   Discount!', img: roomImg }
    ]

    return (
        <section className='container mt-4 pt-4'>
            <div className="text-center my-5">
                <h3 className='text-uppercase' style={{ fontSize: '40px' }}>Special Offers</h3>
                <p className="text-capitalize" style={{ color: '#777777', fontSize: '24px' }}>These popular destinations have a lot to offer</p>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-5">
                {
                    datas.map(data => (
                        <div key={data.id} className="col">
                            <div className="card h-100 ">
                                <img src={data.img} className="card-img" alt="..." />
                                <div className="card-img-overlay">
                                    <h2 className='text-uppercase text-white'>{data.title}</h2>
                                    <button type='button' className='btn btn-light text-uppercase px-4 rounded-0 mt-2'>View More</button>
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