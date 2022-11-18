import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import slideImg from '../../Assets/packageDetails/slideImg.png'

const SlideSidebar = () => {

    const countryDatas = [
        { id: 1, title: 'Egypt', num: 58 },
        { id: 2, title: 'India', num: 69 },
        { id: 3, title: 'Pakistan', num: 95 },
        { id: 4, title: 'Bangladesh', num: 65 },
        { id: 5, title: 'Malaysia', num: 35 },
        { id: 6, title: 'Indonesia', num: 48 },
        { id: 7, title: 'Turkey', num: 56 },
        { id: 8, title: 'Azerbaijan', num: 37 },
        { id: 9, title: 'Afghanistan', num: 25 },
    ]

    return (
        <section className='mt-5 pt-5 mx-4 details_slide_section'>

            <div className="details_slide px-5">
                <div className="border border-dark d-flex justify-content-center">
                    <Swiper navigation={true}  modules={[Navigation]} className="px-5">
                        <div className=''>
                            <SwiperSlide>
                                <div>
                                    <img src={slideImg} alt="" />
                                </div>
                            </SwiperSlide>
                        </div>
                        <div className='px-4 '>
                            <SwiperSlide><img src={slideImg} alt="" /></SwiperSlide>
                        </div>
                        <div className='px-4 '>
                            <SwiperSlide><img src={slideImg} alt="" /></SwiperSlide>
                        </div>
                    </Swiper>
                </div>
            </div>

            <div class="d-flex flex-column flex-shrink-0 px-2 details_sidebar" style={{ background: '#02A3C1' }} >
                <div className='rounded px-2 h-100'>

                    {/* =============Departure country section=============== */}
                    <div className='border border-white m-5'>
                        <div className='p-3 d-flex justify-content-between' >
                            <div>
                                <h6 className='font-bold text-white' style={{ fontSize: '20px' }}>Departure Country</h6>
                            </div>
                            <div>
                                <FontAwesomeIcon icon="fa-regular fa-chevron-down" />
                                {/* <FontAwesomeIcon icon={faChevronDown} /> */}
                            </div>
                        </div>
                        <div className='mt-3'>
                            {
                                countryDatas.map(countryData => (
                                    <div key={countryData.id} className="d-flex justify-content-between px-4 font-semibold">
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                            <label class="form-check-label" for="inlineCheckbox1">{countryData.title}</label>
                                        </div>
                                        <div>
                                            <p>({countryData.num})</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>



                </div>
            </div>
        </section>
    );
};

export default SlideSidebar;