import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from "swiper";
import star from '../../Assets/Reviews/star.png';
import mokkaMadina from '../../Assets/Reviews/mookaMadina.png';
import avatar from '../../Assets/Reviews/avatar.png';

const Reviews = () => {
    const datas = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }]
    return (
        <div className='container pt-5 my-5 position-relative' style={{ backgroundColor: '#D6F8FF' }}>
            <h3 className="font-bold text-capitalize text-center">What our Travelers are saying</h3>
            <div className="d-md-flex">
                <div><img src={mokkaMadina} alt="" /></div>

                <Swiper
                    slidesPerView={2} spaceBetween={30} slidesPerGroup={2} loop={true} loopFillGroupWithBlank={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true} modules={[Pagination, Navigation]} >
                    <div className="d-md-flex position-absolute top-25 start-50">
                        {
                            datas.map(data => (
                                <SwiperSlide key={data.id} className='bg-white m-2 p-4 border border-secondary d-flex flex-column '>
                                    <div className="d-flex">
                                        <img src={star} alt="" style={{ width: '26px' }} /> <img src={star} alt="" style={{ width: '26px' }} /> <img src={star} alt="" style={{ width: '26px' }} />  <img src={star} alt="" style={{ width: '26px' }} /> <img src={star} alt="" style={{ width: '26px' }} />
                                    </div>
                                    <div className='my-4'>
                                        <p className='text-capitilize font-semibold' style={{ fontSize: '24px', color: '#757575' }}>
                                            It was entertaining from the
                                            beginning till the end. The
                                            singing and acting was great.
                                        </p>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <div><img src={avatar} alt="" style={{ width: '67px' }} /></div>
                                        <div><p className="font-bold mx-2" style={{ fontSize: '24px' }}>John Smith</p></div>
                                        <div><p style={{ fontSize: '16px' }}>11 Aug 2020</p></div>
                                    </div>
                                </SwiperSlide>
                            ))}
                    </div>
                </Swiper>
            </div>
        </div>
    );
};

export default Reviews;