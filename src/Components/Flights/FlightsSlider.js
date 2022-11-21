import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';

const FlightsSlider = () => {

    const datas = [
        { id: 1 },{ id: 2 },{ id: 3 },{ id: 4 },{ id: 5 },{ id: 6 },{ id: 7 },{ id: 8 },{ id: 9 },{ id: 10 },{ id: 11 },{ id: 12 },{ id: 13 },{ id: 14 }
    ]

    return (
        <section className='mt-5 py-4 mx-4 bg-white shadow'>
            <div className="mb-3">
                <Swiper navigation={true} spaceBetween={40} slidesPerView={10} freeMode={true}
                    modules={[FreeMode, Navigation]}
                    className="d-flex px-5">
                    <div>
                        {
                            datas.map(data => (
                                <SwiperSlide key={data.id} className="">
                                    <div className='text-center px-2 border border-success'>
                                        <p className='text-uppercase font-semibold m-0' style={{ fontSize: '18px' }}>Aug 10</p>
                                        <p className='m-0'>$ 191</p>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </div>
                    <div >
                        <FontAwesomeIcon className='me-2' style={{ width: "40px", height: "40px" }} icon={faCalendarDays}></FontAwesomeIcon>
                    </div>
                </Swiper>
            </div>
        </section>
    );
};

export default FlightsSlider;