import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from "swiper";
import star from '../../Assets/Reviews/star.png';
import mokkaMadina from '../../Assets/Reviews/mookaMadina.png';
import avatar from '../../Assets/Reviews/avatar.png';

const Reviews = () => {
    const datas = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }]
    return (
        <div className='container pt-5 my-5' style={{ backgroundColor: '#D6F8FF' }}>
            <h3 className="font-bold text-capitalize text-center" style={{ fontSize: '1.325rem' }}>What our Travelers are saying</h3>
            <div className="d-md-flex">
                <div className="mx-3">

                    <div className='p-2'>
                        <img src={mokkaMadina} alt="MokkaMadina" />
                    </div>

                </div>
                <Swiper spaceBetween={30} slidesPerView={2} freeMode={true} grabCursor={true}
                    pagination={{ clickable: true }} modules={[FreeMode, Pagination]} className="pb-5" >
                    {
                        datas.map(data => (
                            <SwiperSlide key={data.id} className="bg-white m-2 p-5 border border-secondary d-flex flex-column">
                                <div className=" border-0 mx-2">
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
                                    <div className="d-flex align-items-center justify-content-center">
                                        <div><img src={avatar} alt="" style={{ width: '40px' }} /></div>
                                        <div><p className="font-bold mx-2" style={{ fontSize: '12px' }}>John Smith</p></div>
                                        <div><p style={{ fontSize: '10px' }}>11 Aug 2020</p></div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                        )}
                </Swiper>
            </div>
            {/* <div className="d-md-flex">
                <div>
                    <img src={mokkaMadina} alt="MokkaMadina" />
                    </div>

                <Swiper
                    slidesPerView={'auto'} spaceBetween={30} freeMode={true} grabCursor={true}
                    pagination={{ clickable: true }} modules={[FreeMode, Pagination]} className='pb-5 px-5 mx-2'>
                    <div className="d-md-flex">
                        {
                            datas.map(data => (
                                <SwiperSlide key={data.id} className='bg-white m-2 p-5 border border-secondary d-flex flex-column '>
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
                                    <div className="d-flex align-items-center justify-content-center">
                                        <div><img src={avatar} alt="" style={{ width: '40px' }} /></div>
                                        <div><p className="font-bold mx-2" style={{ fontSize: '12px' }}>John Smith</p></div>
                                        <div><p style={{ fontSize: '10px' }}>11 Aug 2020</p></div>
                                    </div>
                                </SwiperSlide>
                            ))}
                    </div>
                </Swiper>
            </div> */}
        </div>
    );
};

export default Reviews;