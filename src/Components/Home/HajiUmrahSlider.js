import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from "swiper";
import hajiBanner from '../../Assets/Backgrounds/hajiUmrahBanner.png';

const HajiUmrahSlider = () => {
    const datas = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }]
    return (
        <section className='container mb-4 py-2'>
            <div className="">
                <div>

                    <Swiper spaceBetween={30} slidesPerView={1} freeMode={true} pagination={{ clickable: true }} modules={[FreeMode, Pagination]} className='pb-5'>
                        <div>
                            {
                                datas.map(data => (
                                    <SwiperSlide key={data.id} className="">
                                        <div className="">
                                            <img src={hajiBanner} alt="" />
                                        </div>
                                    </SwiperSlide>
                                ))
                            }
                        </div>
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default HajiUmrahSlider;