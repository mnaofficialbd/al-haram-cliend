import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import slideImg from '../../Assets/packageDetails/slideImg.png'

const HajjSlideSidebar = () => {

    const slidersData = [
        { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 },{id:8}
    ]
    return (
        <section className='mx-4'>
            <div className="mt-5 d-flex justify-content-center">
                <div className="details_slide px-5">
                    <div className="mb-3">
                        <Swiper 
                        cssMode={true} navigation={true} pagination={true}
                        mousewheel={true} keyboard={true}
                        modules={[Navigation, Pagination, Mousewheel, Keyboard]} className="">
                            {
                                slidersData.map(sliderData => (
                                    <SwiperSlide key={sliderData.id}>
                                        <div>
                                            <img src={slideImg} alt="" style={{height: '497px'}} className='' />
                                        </div>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>

                    </div>
                </div>

                <div class="px-2 details_sidebar" style={{ background: '#02A3C1' }} >
                    <div className='rounded py-3'>
                        <div className='p-3' >
                            <div>
                                <label for="formFile" class='mb-1 font-semibold text-white' style={{ fontSize: '18px' }}>Departure City</label>
                                <select class="sidebar_select_btn form-select form-select-lg mb-3" aria-label=".form-select-lg example" style={{ color: '#757575', fontSize: '16px' }}>
                                    <option selected>Ex Mumbai</option>
                                    <option value="1">Kolkata</option>
                                    <option value="2">Hydrebad</option>
                                    <option value="3">Dilhi</option>
                                </select>
                            </div>
                            <div>
                                <label for="formFile" class='mb-1 font-semibold text-white' style={{ fontSize: '18px' }}>Departure Date</label>
                                <select class="sidebar_select_btn form-select form-select-lg mb-3" aria-label=".form-select-lg example" style={{ color: '#757575', fontSize: '16px' }}>
                                    <option selected>11 Oct 2022</option>
                                    <option value="1">12 Oct 2022</option>
                                    <option value="2">13 Oct 2022</option>
                                    <option value="3">14 Oct 2022</option>
                                </select>
                            </div>
                            <div>
                                <label for="formFile" class=' font-semibold text-white' style={{ fontSize: '18px' }}>Package Category</label>
                                <select class="sidebar_select_btn mt-2 form-select form-select-lg mb-4" aria-label=".form-select-lg example" style={{ color: '#757575', fontSize: '16px' }}>
                                    <option selected>Luxury</option>
                                    <option value="1">Simple</option>
                                    <option value="2">VIP</option>
                                </select>
                            </div>
                            <div className='bg-white d-flex justify-content-between mb-4 px-4 align-items-center rounded sidebar_select_btn' >
                                <div>
                                    <p className='m-0' style={{ color: '#757575', fontSize: '16px' }}>Per Person</p>
                                </div>
                                <div>
                                    <h4 className='m-0' style={{ color: '#02A3C1', fontSize: '18px' }}>₹ 18000</h4>
                                </div>
                            </div>
                            <div className='mt-3'>
                                <button className='package_details_btn sidebar_select_btn font-semibold'>
                                    Make An Enquiry
                                </button>
                            </div>
                            <div className='mt-3'>
                                <button className='package_details_btn sidebar_select_btn font-semibold'>
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

export default HajjSlideSidebar;