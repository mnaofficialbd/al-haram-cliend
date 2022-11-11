import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from "swiper";
import makkahImg from '../../Assets/ClassicPackages/pack2.png';

const PopularUmrahDCards = () => {
    const btnDatas = [
        { id: 1, title: 'Umrah Packages' },
        { id: 2, title: 'Land Packages' },
        { id: 3, title: 'Hajj Packages' },
        { id: 4, title: 'Trending Packages' },
        { id: 5, title: 'Hotels' }
    ];

    const datas = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }]

    return (
        <section className='container mb-4 py-2'>
            <div className="">
                <div>

                    <div className="d-flex my-3">
                        {
                            btnDatas.map(btnData => (
                                <div key={btnData.id} className=''>
                                    <button className='details-btn me-2'>{btnData.title}</button>
                                </div>
                            ))
                        }
                    </div>

                    <Swiper spaceBetween={30} slidesPerView={4} freeMode={true}
                    pagination={{ clickable: true }} modules={[FreeMode, Pagination]} className='pb-5'>
                        <div>
                            {
                                datas.map(data => (
                                    <SwiperSlide key={data.id} className="">
                                        <div className="card box h-100 border-0">
                                            <div className="card_img">
                                                <img src={makkahImg} className="card-img-top" alt="..." />
                                            </div>
                                            <div className="card-body mt-3 p-0">
                                                <div className="">
                                                    <h5 className="card-title" style={{ color: '#575757' }}>Classic Umrah Package</h5>
                                                    <div style={{ fontSize: '12px' }}><span className='font-semibold'>Travel Date :</span> 20 Oct 22</div>
                                                    <div className="d-flex">
                                                        <span className='vactor-border'>
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill='#02A3C1' width="20" height="20" viewBox="0 0 640 512"><path d="M381 114.9L186.1 41.8c-16.7-6.2-35.2-5.3-51.1 2.7L89.1 67.4C78 73 77.2 88.5 87.6 95.2l146.9 94.5L136 240 77.8 214.1c-8.7-3.9-18.8-3.7-27.3 .6L18.3 230.8c-9.3 4.7-11.8 16.8-5 24.7l73.1 85.3c6.1 7.1 15 11.2 24.3 11.2H248.4c5 0 9.9-1.2 14.3-3.4L535.6 212.2c46.5-23.3 82.5-63.3 100.8-112C645.9 75 627.2 48 600.2 48H542.8c-20.2 0-40.2 4.8-58.2 14L381 114.9zM0 480c0 17.7 14.3 32 32 32H608c17.7 0 32-14.3 32-32s-14.3-32-32-32H32c-17.7 0-32 14.3-32 32z" /></svg>
                                                        </span>
                                                        <span className='vactor-border'>
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill='#02A3C1' width="20" height="20" viewBox="0 0 448 512"><path d="M224 0C348.8 0 448 35.2 448 80V96 416c0 17.7-14.3 32-32 32v32c0 17.7-14.3 32-32 32H352c-17.7 0-32-14.3-32-32V448H128v32c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32l0-32c-17.7 0-32-14.3-32-32V96 80C0 35.2 99.2 0 224 0zM64 128V256c0 17.7 14.3 32 32 32H352c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32H96c-17.7 0-32 14.3-32 32zM80 400c17.7 0 32-14.3 32-32s-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32zm288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32z" /></svg>
                                                        </span>
                                                        <span className='vactor-border'>
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill='#02A3C1' width="20" height="20" viewBox="0 0 640 512"><path d="M64 160C64 89.3 121.3 32 192 32H448c70.7 0 128 57.3 128 128v33.6c-36.5 7.4-64 39.7-64 78.4v48H128V272c0-38.7-27.5-71-64-78.4V160zM544 272c0-20.9 13.4-38.7 32-45.3c5-1.8 10.4-2.7 16-2.7c26.5 0 48 21.5 48 48V448c0 17.7-14.3 32-32 32H576c-17.7 0-32-14.3-32-32H96c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V272c0-26.5 21.5-48 48-48c5.6 0 11 1 16 2.7c18.6 6.6 32 24.4 32 45.3v48 32h32H512h32V320 272z" /></svg>
                                                        </span>
                                                        <span className='vactor-border'>
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill='#02A3C1' width="20" height="20" viewBox="0 0 576 512"><path d="M60 120l228 71.2L516 120 288 48.8 60 120zM278.5 1.5c6.2-1.9 12.9-1.9 19.1 0l256 80C566.9 85.6 576 98 576 112v16 0 21.2L292.8 237.7c-3.1 1-6.4 1-9.5 0L0 149.2V128 112C0 98 9.1 85.6 22.5 81.5l256-80zm23.9 266.8L576 182.8v46.5l-52.8 16.5c-8.4 2.6-13.1 11.6-10.5 20s11.6 13.1 20 10.5L576 262.8V400c0 14-9.1 26.4-22.5 30.5l-256 80c-6.2 1.9-12.9 1.9-19.1 0l-256-80C9.1 426.4 0 414 0 400V262.8l43.2 13.5c8.4 2.6 17.4-2.1 20-10.5s-2.1-17.4-10.5-20L0 229.2V182.8l273.7 85.5c9.3 2.9 19.3 2.9 28.6 0zm-185.5-2.6c-8.4-2.6-17.4 2.1-20 10.5s2.1 17.4 10.5 20l64 20c8.4 2.6 17.4-2.1 20-10.5s-2.1-17.4-10.5-20l-64-20zm352 30.5c8.4-2.6 13.1-11.6 10.5-20s-11.6-13.1-20-10.5l-64 20c-8.4 2.6-13.1 11.6-10.5 20s11.6 13.1 20 10.5l64-20zm-224 9.5c-8.4-2.6-17.4 2.1-20 10.5s2.1 17.4 10.5 20l38.5 12c9.3 2.9 19.3 2.9 28.6 0l38.5-12c8.4-2.6 13.1-11.6 10.5-20s-11.6-13.1-20-10.5l-38.5 12c-3.1 1-6.4 1-9.5 0l-38.5-12z" /></svg>
                                                        </span>
                                                    </div>
                                                    <h6 style={{ color: '#02A3C1', fontSize: '16px' }}><span className='font-semibold text-black'>Per Person  :</span>  ₹ 120,000</h6>
                                                </div>
                                                <div className='mt-3'>
                                                    <button className='popular-card-btn'>
                                                        <p className="font-capitalize font-semibold m-0" >
                                                            <span className='m-0 p-0' style={{ fontSize: '14px' }}>Al bushra tours & travels</span> <br />
                                                            <span className='m-0 p-0' style={{ fontSize: '10px' }}>Published date 11 aug 2022</span>
                                                        </p>
                                                    </button>
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
        </section>
    );
};

export default PopularUmrahDCards;