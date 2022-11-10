import React from 'react';
import makkahImg from '../../Assets/SpecialOffer/mokka.png';
import planeImg from '../../Assets/SpecialOffer/plane.png';
import roomImg from '../../Assets/SpecialOffer/room.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from "swiper";

const LandPacksCards = () => {

    const datas = [
        { id: 1, title: 'Explore Umrah Packages', img: makkahImg },
        { id: 2, title: 'Create your own umrah package', img: planeImg },
        { id: 3, title: 'Up to 70%   Discount!', img: roomImg },
        { id: 4, title: 'Explore Umrah Packages', img: makkahImg },
        { id: 5, title: 'Create your own umrah package', img: planeImg },
    ]

    return (
        <section className='container mt-4 py-2'>

            <Swiper spaceBetween={30} slidesPerView={3} freeMode={true}
                pagination={{ clickable: true}} modules={[FreeMode, Pagination]} className="mySwiper" >
                <div className=" g-5">
                    {
                        datas.map(data => (
                            <SwiperSlide key={data.id}>
                                <div className="">
                                    <div className="card h-100 ">
                                        <img src={data.img} className="card-img" alt="..." />
                                        <div className="card-img-overlay">
                                            <h2 className='text-uppercase text-white'>{data.title}</h2>
                                            <button type='button' className='btn btn-light text-uppercase px-4 rounded-0 mt-2'>View More</button>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </div>
            </Swiper>
        </section>
    );
};

export default LandPacksCards;