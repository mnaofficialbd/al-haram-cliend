import React from 'react';

const BusSearchSection = () => {
    return (
        <section className='mt-5 pt-5 pb-2' style={{ background: '#02A3C1' }}>
            <div className='mt-5'>
                <form>
                    <div className='mx-4 d-md-flex pb-3 justify-content-center text-white'>

                        <div className='width_13_75 p-1'>
                            <p className="text-uppercase m-0">City or location</p>
                            <input type="text" className='width_99' placeholder='Mumbai(Mum)' />
                        </div>

                        <div className='width_13_75 p-1'>
                            <p className="text-uppercase m-0">Check-in</p>
                            <input type="text" className='width_99' placeholder='02 Dec 22' />
                        </div>

                        <div className='width_13_75 p-1'>
                            <p className="text-uppercase m-0">Check-out</p>
                            <input type="text" className='width_99' placeholder='06 Dec 22' />
                        </div>

                        <div className='width_13_75 p-1'>
                            <p className="text-uppercase m-0">Rooms</p>
                            <input type="text" className='width_99' placeholder='02 Rooms' />
                        </div>

                        <div className='width_13_75 p-1'>
                            <p className="text-uppercase m-0">Guests</p>
                            <input type="text" className='width_99' placeholder='2 Guests' />
                        </div>
                        <div className='pb-1 d-flex align-items-end justify-content-center'>
                            <button className="custom_btn px-1" type="submit">SEARCH</button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default BusSearchSection;