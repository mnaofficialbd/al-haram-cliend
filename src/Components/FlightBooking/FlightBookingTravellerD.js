import React from 'react';

const FlightBookingTravellerD = () => {
    return (
        <section className='px-4'>
            <div className="text-center my-4">
                <h5 className='m-0'>Traveller Details</h5>
            </div>
            <div className="shadow p-4">
                <div className='mb-4'>
                    <div>
                        <h6>Adult</h6>
                        <p>Name should be same as in passport</p>
                    </div>
                    <div className="d-flex">
                        <div className='me-3'>
                            <input type="text" />
                        </div>
                        <div className='me-3'>
                            <input type="text" className='px-2' placeholder='First Name' />
                        </div>
                        <div>
                            <input type="text" className='px-2' placeholder='Last Name' />
                        </div>
                    </div>
                </div>
                <div className='mb-4'>
                    <div>
                        <h6>Contact Detail</h6>
                        <p>Your Mobile number will be used only for sending flight related communication</p>
                    </div>
                    <div className="d-flex">
                        <div>
                            <input type="text" />
                        </div>
                        <div>
                            <input type="number" className='px-2' placeholder='123 456 78910' />
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <div className='mx-2'><button className="details-btn">Add Adult</button></div>
                    <div className='mx-2'><button className="details-btn">Add Seats</button></div>
                    <div className='mx-2'><button className="details-btn">Add Meals</button></div>
                    <div className='mx-2'><button className="details-btn">Add Bagagge</button></div>
                </div>
            </div>

        </section>
    );
};

export default FlightBookingTravellerD;