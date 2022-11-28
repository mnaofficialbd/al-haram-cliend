import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from "swiper";
import star from '../../Assets/Reviews/star.png';
import mokkaMadina from '../../Assets/Reviews/mookaMadina.png';
import avatar from '../../Assets/Reviews/avatar.png';

const Reviews = () => {
    const datas = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }]
    return (
        <div className='pt-5 my-5' style={{ backgroundColor: '#02A3C1' }}>
            <h3 className="font-bold text-white text-capitalize text-white text-center" style={{ fontSize: '1.325rem' }}>What our Travelers are saying</h3>
            <p className="text-white text-capitalize text-white text-center ps-5 ms-3">trending umrah packages from popular destinations</p>
            <div className="d-md-flex">
                <div className="mx-3">

                    <div className=''>
                        <img src={mokkaMadina} alt="MokkaMadina" />
                    </div>

                </div>
                {/* <Swiper spaceBetween={20} slidesPerView={2} freeMode={true} grabCursor={true} */}
                <Swiper freeMode={true} grabCursor={true}
                    pagination={{ clickable: true }} modules={[FreeMode, Pagination]} className="pb-5 me-3" >
                    {
                        datas.map(data => (
                            <SwiperSlide key={data.id} className="bg-white w-25 card m-2 p-2 border border-secondary d-flex flex-column align-items-center">
                                <div className="d-flex flex-column border-0 p-1">
                                    <div className="d-flex">
                                        <img src={star} alt="" style={{ width: '20px' }} />
                                        <img src={star} alt="" style={{ width: '20px' }} />
                                        <img src={star} alt="" style={{ width: '20px' }} />
                                        <img src={star} alt="" style={{ width: '20px' }} />
                                        <img src={star} alt="" style={{ width: '20px' }} />
                                    </div>
                                    <div className='my-4'>
                                        <p className='text-capitilize font-semibold' style={{ fontSize: '12px', color: '#757575' }}>
                                            It was entertaining from the
                                            beginning till the end. The
                                            singing and acting was great.
                                        </p>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <div className='me-2'><img src={avatar} alt="" style={{ width: '40px' }} /></div>
                                        <div>
                                            <h6 className="font-bold m-0" style={{ fontSize: '12px' }}>John Smith</h6>
                                            <p className='m-0' style={{ fontSize: '10px' }}>11 Aug 2020</p></div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                        )}
                </Swiper>
            </div>
            
        </div>
    );
};

export default Reviews;