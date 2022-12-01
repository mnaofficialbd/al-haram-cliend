import { faRightLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const FlightsSearchSection = () => {
    return (
        <div className=''>
            <form>
                <div className='mx-4 d-md-flex justify-content-center text-white'>

                    <div className='width_13_75 p-1'>
                        <p className="text-uppercase m-0">From</p>
                        <input type="text" className='width_99' placeholder='Mumbai(Mum)' />
                    </div>
                    <div className='pb-1 d-flex align-items-end justify-content-center'>
                        <FontAwesomeIcon  className='border border-light rounded p-1' icon={faRightLeft}></FontAwesomeIcon>
                    </div>
                    <div className='width_13_75 p-1'>
                        <p className="text-uppercase m-0">To</p>
                        <input type="text" className='width_99' placeholder='Mumbai(Mum)' />
                    </div>

                    <div className='width_13_75 p-1'>
                        <p className="text-uppercase m-0">Departure</p>
                        <input type="text" className='width_99' placeholder='02 Dec 22' />
                    </div>

                    <div className='width_13_75 p-1'>
                        <p className="text-uppercase m-0">Return Date</p>
                        <input type="text" className='width_99' placeholder='06 Dec 22' />
                    </div>

                    <div className='width_13_75 p-1'>
                        <p className="text-uppercase m-0">Travellers</p>
                        <input type="text" className='width_99' placeholder='02 Adults' />
                    </div>

                    <div className='width_13_75 p-1'>
                        <p className="text-uppercase m-0">Class</p>
                        <input type="text" className='width_99' placeholder='Economy' />
                    </div>
                    <div className='pb-1 d-flex align-items-end justify-content-center'>
                        <button className="custom_btn px-1" type="submit">SEARCH</button>
                    </div>
                    {/* <div className='col bg-white px-4 py-3'>
                    </div> */}
                </div>
            </form>
        </div>
    );
};

export default FlightsSearchSection;