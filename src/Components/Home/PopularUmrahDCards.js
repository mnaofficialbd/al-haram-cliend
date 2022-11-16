import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from "swiper";
import makkahImg from '../../Assets/ClassicPackages/pack2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBusSimple, faCouch, faKaaba, faPlaneDeparture } from '@fortawesome/free-solid-svg-icons';

const PopularUmrahDCards = () => {
    const btnDatas = [
        { id: 1, title: 'Umrah Packages' },
        { id: 2, title: 'Land Packages' },
        { id: 3, title: 'Hajj Packages' },
        { id: 4, title: 'Trending Packages' },
        { id: 5, title: 'Hotels' }
    ];

    const datas = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }]

    return (
        <section className='container mb-4 py-2'>
            <div className="">
                <div>

                    <div className="d-flex justify-content-center my-3">
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
                                        <div className="card h-100 border-0">
                                            <div className="inner">
                                                <img src={makkahImg} className="card-img-top" alt="..." />
                                            </div>
                                            <div className="card-body mt-3 p-0">
                                                <div className="">
                                                    <h5 className="card-title mb-2" style={{ color: '#575757' }}>Classic Umrah Package</h5>
                                                    <div style={{ fontSize: '16px' }}><span className='font-semibold mb-3'>Travel Date :</span> 20 Oct 22</div>
                                                    <div className="d-flex mb-3" style={{ color: '#02A3C1' }}>
                                                        <span className='vactor-border me-2'>
                                                        <FontAwesomeIcon style={{ width: "22px", height: "20px" }} icon={faKaaba}></FontAwesomeIcon>
                                                        </span>
                                                        <span className='vactor-border me-2'>
                                                        <FontAwesomeIcon style={{ width: "20px", height: "22px" }} icon={faPlaneDeparture}></FontAwesomeIcon>
                                                        </span>
                                                        <span className='vactor-border me-2'>
                                                        <FontAwesomeIcon style={{ width: "20px", height: "22px" }} icon={faCouch}></FontAwesomeIcon>
                                                        </span>
                                                        <span className='vactor-border'>
                                                        <FontAwesomeIcon style={{ width: "20px", height: "22px" }} icon={faBusSimple}></FontAwesomeIcon>
                                                        </span>
                                                    </div>
                                                    <h6 style={{ color: '#02A3C1', fontSize: '16px' }}><span className='font-semibold text-black '>Per Person  :</span>  ₹ 120,000</h6>
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