import React from 'react';

const HotelPropertyRules = () => {
    return (
        <section className='container px-5'>
            <div className="mx-3">
                <div class="p-3 shadow">
                    <div className='p-2'>
                        <h3 className='font-bold' style={{
                            fontSize: '24px', color: '#757575'
                        }}>Hotel Property Rules </h3>
                    </div>
                    <div className='px-2' style={{ color: '#757575', fontSize: '16px' }}>
                        <li className='text-capitalize'>The property is well connected to the city and is located near the important locations of Delhi.</li>
                        <li className='text-capitalize'>The property offers modern amenities like a coffee shop, play area, activity centre, conference rooms, etc.</li>
                        <li className='text-capitalize'>The property is very close to the Airport and Railway station of the city and offers taxi services to make the to and fro commutation easy.</li>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default HotelPropertyRules;