import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from "swiper";
import hotelSliderImg from '../../Assets/Hotel/hotelSilimarProImg.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';

const HotelSimilarProTab = () => {
    const datas = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }]

    return (
        <section className='container px-5'>
            <div className="mx-3 shadow">
                <div class="py-2">

                    {/* slider */}
                    <div>
                        <Swiper spaceBetween={30} slidesPerView={3} freeMode={true}
                            pagination={{ clickable: true }} modules={[FreeMode, Pagination]} className='px-4 pb-5'>
                            <div>
                                {
                                    datas.map(data => (
                                        <SwiperSlide key={data.id} className="shadow">
                                            <div className="card h-100 border-0">
                                                <div className="inner">
                                                    <img src={hotelSliderImg} className="card-img-top" alt="..." />
                                                </div>
                                                <div className="card-body mt-3 px-3 p-0">
                                                    <div className="">
                                                        <div className="d-flex justify-content-between">
                                                            <div>
                                                                <h5 className="card-title font-semibold mb-2" style={{ color: '#575757' }}>Al Hayat Hotel</h5>
                                                                <div className="d-flex align-items-center mb-2">
                                                                    <FontAwesomeIcon className='me-2' style={{ color: 'yellow', width: "16px", height: "16px" }} icon={faStar}></FontAwesomeIcon>
                                                                    <FontAwesomeIcon className='me-2' style={{ color: 'yellow', width: "16px", height: "16px" }} icon={faStar}></FontAwesomeIcon>
                                                                    <FontAwesomeIcon className='me-2' style={{ color: 'yellow', width: "16px", height: "16px" }} icon={faStar}></FontAwesomeIcon>
                                                                    <FontAwesomeIcon className='me-2' style={{ color: 'yellow', width: "16px", height: "16px" }} icon={faStar}></FontAwesomeIcon>
                                                                    <FontAwesomeIcon className='me-2' style={{ width: "16px", height: "16px" }} icon={faStar}></FontAwesomeIcon>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <h5 className="card-title semibold mb-2" style={{ color: '#575757' }}>Mecca</h5>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex my-3 justify-content-between">
                                                            <div>
                                                                <p className='font-semibold mb-2'>Deluxe Double Room</p>
                                                                <p className='mb-2'>Tax & Fees</p>
                                                                <p className='font-semibold'>Total Amount</p>
                                                            </div>
                                                            <div className='text-end'>
                                                                <p className='font-semibold mb-2'>Rs 1950</p>
                                                                <p className='mb-2'>49</p>
                                                                <p className='font-semibold'>Rs 1995</p>
                                                            </div>
                                                        </div>
                                                        <div className='text-center mb-3'>
                                                            <button className="details-btn">Book Now</button>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))
                                }
                            </div>
                        </Swiper>
                    </div>



                </div>
            </div>
        </section>
    );
};

export default HotelSimilarProTab;