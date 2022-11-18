import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import slideImg from '../../Assets/packageDetails/slideImg.png'

const SlideSidebar = () => {


    return (
        <section className='mt-5 pt-5 mx-4 details_slide_section'>

            <div className="details_slide px-5">
                <div className="mb-3 d-flex justify-content-center">
                    <Swiper navigation={true} modules={[Navigation]} className="px-5">
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
                    <div className='my-5 mx-5'>
                        <div className='px-3' >
                            <div>
                                <label for="formFile" class='mb-1 font-bold text-white' style={{ fontSize: '20px' }}>Departure City</label>
                                <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example" style={{ color: '#757575', fontSize: '20px' , width: '520px', height: '58px' }}>
                                    <option selected>Ex Mumbai</option>
                                    <option value="1">Kolkata</option>
                                    <option value="2">Hydrebad</option>
                                    <option value="3">Dilhi</option>
                                </select>
                            </div>
                            <div>
                                <label for="formFile" class='mb-1 font-bold text-white' style={{ fontSize: '20px' }}>Departure Date</label>
                                <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example" style={{ color: '#757575', fontSize: '20px' , width: '520px', height: '58px' }}>
                                    <option selected>11 Oct 2022</option>
                                    <option value="1">12 Oct 2022</option>
                                    <option value="2">13 Oct 2022</option>
                                    <option value="3">14 Oct 2022</option>
                                </select>
                            </div>
                            <div>
                                <label for="formFile" class='mb-1 font-bold text-white' style={{ fontSize: '20px' }}>Package Category</label>
                                <select class="mt-2 form-select form-select-lg mb-3" aria-label=".form-select-lg example" style={{ color: '#757575', fontSize: '20px' ,width: '520px', height: '58px' }}>
                                    <option selected>Luxury</option>
                                    <option value="1">Simple</option>
                                    <option value="2">VIP</option>
                                </select>
                            </div>
                            <div className='bg-white d-flex justify-content-between mb-3 px-4 align-items-center rounded' style={{ width: '520px', height: '58px' }}>
                                <div>
                                    <p style={{ color: '#757575', fontSize: '20px' }}>Per Person</p>
                                </div>
                                <div>
                                    <h4 style={{ color: '#02A3C1', fontSize: '26px' }}>₹ 18000</h4>
                                </div>
                            </div>
                            <div className='mt-3'>
                                <button className='package_details_btn font-bold'>
                                    Make An Enquiry
                                </button>
                            </div>
                            <div className='mt-3'>
                                <button className='package_details_btn font-bold'>
                                    Book Now
                                </button>
                            </div>

                        </div>

                    </div>



                </div>
            </div>
        </section>
    );
};

export default SlideSidebar;