import React from 'react';

const HotelAmenitiesTab = () => {
    return (
        <section className='container px-5 '>
            <div className="ps-4">
                <div style={{ background: '#02A3C1' }}>
                    <h4 className='text-white py-2 text-center'>Amenities at Hotel Almati Inn</h4>
                </div>
                <table class="table table-bordered text-center w-100 shadow ">
                    <tbody>
                       <tr>
                            <td>Airport transportation (surcharge)</td>
                            <td>Bar/lounge</td>
                            <td>Internet</td>
                        </tr>  
                        <tr>
                            <td>Number of floors - 9</td>
                            <td>Air Conditioner</td>
                            <td>Transport to / from Hotel  Concierge</td>
                        </tr>
                        <tr>
                            <td>Coffee shop or café</td>
                            <td>Mini Bar (with liquor)</td>
                            <td>Rental Car Service</td>
                        </tr>
                        <tr>
                            <td>Dry cleaning/laundry</td>
                            <td>Separate Bedroom</td>
                            <td>Desk On Site</td>
                        </tr>
                        <tr>
                            <td>service Health club</td>
                            <td>Living Room</td>
                            <td>Room Service</td>
                        </tr>
                        <tr>
                            <td>Billiards or pool table</td>
                            <td>Space  Smoking</td>
                            <td>Beauty Salon</td>
                        </tr>
                        <tr>
                            <td>Total number of rooms - 108</td>
                            <td>Rooms Available</td>
                            <td>Fitness Centre</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default HotelAmenitiesTab;