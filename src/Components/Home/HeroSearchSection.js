import React from 'react';

const HeroSearchSection = () => {
    return (
        <div className=' my-4 py-4'>
            <form>
                <div className="row row-cols-2 row-cols-lg-6 bg-white ">
                    <div className="col py-3 border border-secondary">
                        <div className="d-flex justify-content-evenly">
                            <p className="">SELECT COUNTRY</p>
                            <span className="">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 448 512"><path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" /></svg>
                            </span>
                        </div>
                        <hr className='m-0' />
                        <div>
                            {/* <p  className='text-center font-semibold fs-4 m-0'>INDIA</p> */}
                            <input type="search" placeholder='INDIA' class="form-control text-center fs-4 border-0" />
                            {/* <input type="text" name="country" placeholder='INDIA' className='font-semibold fs-4 border-0 ' /> */}
                        </div>
                    </div>
                    <div className="col py-3 border border-secondary">
                        <div className="d-flex justify-content-evenly">
                            <p className="">SELECT CITY</p>
                            <span className="">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 448 512"><path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" /></svg>
                            </span>
                        </div>
                        <hr className='m-0' />
                        <div>
                            <p  className='text-center font-semibold fs-4 m-0'>HYDERABAD</p>
                            {/* <input type="text" name="city" placeholder='HYDERABAD' className='text-center border-0 shadow' /> */}
                        </div>
                    </div>
                    <div className="col py-3 border border-secondary">
                        <div className="d-flex justify-content-evenly">
                            <p className="">SELECT DURATION</p>
                            <span className="">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 448 512"><path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" /></svg>
                            </span>
                        </div>
                        <hr className='m-0' />
                        <div>
                            <p  className='text-center font-semibold fs-4 m-0'>1 - 10 DAYS</p>
                            {/* <input type="text" name="duration" placeholder='1 - 10 DAYS' className='text-center border-0 shadow' /> */}
                        </div>
                    </div>
                    <div className="col py-3 border border-secondary">
                        <div className="d-flex justify-content-evenly">
                            <p className="">TRAVEL DATE</p>
                            <span className="">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 448 512"><path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" /></svg>
                            </span>
                        </div>
                        <hr className='m-0' />
                        <div>
                            <p  className='text-center font-semibold fs-4 m-0'>2 SEP 2022</p>
                            {/* <input type="text" name="travelDate" placeholder='2 SEP 2022' className='text-center border-0 shadow' /> */}
                        </div>
                    </div>
                    <div className="col py-3 border border-secondary">
                        <div className="d-flex justify-content-evenly">
                            <p className="">SELECT PASSENGER</p>
                            <span className="">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 448 512"><path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" /></svg>
                            </span>
                        </div>
                        <hr className='m-0' />
                        <div>
                            <p  className='text-center font-semibold fs-4 m-0'>02</p>
                            {/* <input type="text" name="selectPassenger" placeholder='02' className='text-center border-0 font-bold fs-4' /> */}
                        </div>
                    </div>

                    <div className="col m-0 p-0 d-flex justify-content-center align-items-center" style={{backgroundColor: '#02A3C1'}}>
                        <div className="d-flex align-items-center justify-content-evenly text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 512 512">
                                    <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z" />
                                </svg>
                                <input class="btn" type="submit" value="Search" />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default HeroSearchSection;