import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import slideImg from '../../Assets/Hotel/hotelSliderImg.png'

const HotelSlideSidebar = () => {

    const slidersData = [
        { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 },{id:8}
    ]
    return (
        <section className='mx-4'>
            <div className="mt-4 d-flex justify-content-center">
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
                                            <img src={slideImg} alt=""  style={{height: '578px'}} className='' />
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
                                <label for="formFile" class='mb-1 font-semibold text-white' style={{ fontSize: '18px' }}>Check In</label>
                                <input type="text" placeholder='11 Dec 2022' class="sidebar_select_btn border-0 px-2 mb-3" style={{ color: '#757575', fontSize: '16px' }} />
                            </div>
                            <div>
                                <label for="formFile" class='mb-1 font-semibold text-white' style={{ fontSize: '18px' }}>Check Out</label>
                                <input type="text" placeholder='11 Dec 2022' class="sidebar_select_btn border-0 px-2 mb-3" style={{ color: '#757575', fontSize: '16px' }} />
                            </div>
                            <div>
                                <label for="formFile" class='mb-1 font-semibold text-white' style={{ fontSize: '18px' }}>Room Type</label>
                                <input type="text" placeholder='Luxury' class="sidebar_select_btn border-0 px-2 mb-3" style={{ color: '#757575', fontSize: '16px' }} />
                            </div>
                            <div>
                                <label for="formFile" class=' font-semibold text-white' style={{ fontSize: '18px' }}>No of Person</label>
                                <select class="sidebar_select_btn mt-2 form-select form-select-lg mb-3" aria-label=".form-select-lg example" style={{ color: '#757575', fontSize: '16px' }}>
                                    <option selected>2 Adults</option>
                                    <option value="1">3 Adults</option>
                                    <option value="2">4 Adults</option>
                                </select>
                            </div>
                            <div>
                                <label for="formFile" class=' font-semibold text-white' style={{ fontSize: '18px' }}>No of Room</label>
                                <select class="sidebar_select_btn mt-2 form-select form-select-lg mb-4" aria-label=".form-select-lg example" style={{ color: '#757575', fontSize: '16px' }}>
                                    <option selected>2 Rooms</option>
                                    <option value="1">3 Rooms</option>
                                    <option value="2">4 Rooms</option>
                                </select>
                            </div>
                            <div className='mt-5'>
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

export default HotelSlideSidebar;