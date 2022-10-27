import React from 'react';
import bgImg from '../../Assets/Backgrounds/alHaramTopBennerBg.png';

const Hero = () => {
    return (
        <section className=''>
            <div style={{ background: `url(${bgImg})`, backgroundSize: 'cover', height: "100vh", backgroundRepeat: 'no-repeat' }} className='bg-dark px-10 py-14'>
                <div className="container py-5">
                    {/* top title part */}
                    <div className='text-center my-5 pt-5 text-white'>
                        <h1 className='text-[32px] text-bold text-uppercase'>budget-friendly & luxury package for a convenient hajj & umrah journey to the holly makkah & madina for muslim brothers & sisters</h1>
                    </div>

                    {/* -------select part------------ */}
                    <div className=' my-4 p-4'>
                        <form>
                            <div className="row row-cols-2 row-cols-lg-5 bg-white py-4">
                                <div className="col py-2">
                                    <div className="d-flex">
                                        <p className="">Search Country</p>
                                        <span className="">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 448 512"><path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" /></svg>
                                        </span>
                                    </div>
                                    <div>
                                        <input type="" name="" value="" className=''/>
                                    </div>
                                </div>
                                <div className="col py-2">
                                    <div className="d-flex">
                                        <p className="">Search Country</p>
                                        <span className="">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 448 512"><path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" /></svg>
                                        </span>
                                    </div>
                                    <div>
                                        <input type="" name="" value="" />
                                    </div>
                                </div>
                                <div className="col py-2">
                                    <div className="d-flex">
                                        <p className="">Search Country</p>
                                        <span className="">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 448 512"><path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" /></svg>
                                        </span>
                                    </div>
                                    <div>
                                        <input type="" name="" value="" />
                                    </div>
                                </div>
                                <div className="col py-2">
                                    <div className="d-flex">
                                        <p className="">Search Country</p>
                                        <span className="">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 448 512"><path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" /></svg>
                                        </span>
                                    </div>
                                    <div>
                                        <input type="" name="" value="" />
                                    </div>
                                </div>

                                <div className="col py-2">
                                    <input class="btn btn-success" type="submit" value="Submit" />
                                </div>
                            </div>
                        </form>
                    </div>


                    {/* summery part */}
                    <div className="row g-4 text-white">
                        <div className="col-lg-3 col-12 col-md-6 ">
                            <div className=''>
                                <img src="https://i.ibb.co/nkWZkJg/verify-icon.png" className="mx-auto d-block" alt="..." />
                            </div>
                            <div className='text-center'>
                                <h3>1500+</h3>
                                <h3>VERIFIED AGENTS</h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-12 col-md-6">
                            <div className=''>
                                <img src="https://i.ibb.co/zZ5xjq3/happy-client.png" className="mx-auto d-block" alt="..." />
                            </div>
                            <div className='text-center'>
                                <h3>1 LAKH+</h3>
                                <h3>HAPPY GUESTS</h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-12 col-md-6">
                            <div className=''>
                                <img src="https://i.ibb.co/7bNCkqD/booking-icon.png" className="mx-auto d-block" alt="..." />
                            </div>
                            <div className='text-center'>
                                <h3>2 LAKH+</h3>
                                <h3>BOOKINGS DONE</h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-12 col-md-6">
                            <div className=''>
                                <img src="https://i.ibb.co/pRt0XrG/package-icon.png" className="mx-auto d-block" alt="..." />
                            </div>
                            <div className='text-center'>
                                <h3>1K+</h3>
                                <h3>PACKAGES</h3>
                            </div>
                        </div>



                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;