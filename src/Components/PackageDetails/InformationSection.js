import React from 'react';

const InformationSection = () => {
    return (
        <section className='shadow '>
            <div className='d-md-flex p-4 pt-0 mx-5' style={{ color: '#757575' }}>
                <div className=''>
                    <div className='py-2' style={{ background: '#02A3C1' }}>
                        <p className='text-white text-center m-0'>Inclusions</p>
                    </div>
                    <div className='py-4 mx-lg-5' style={{ fontSize: '16px' }}>
                        <li className='text-capitalize'>Air fare</li>
                        <li className='text-capitalize'>Accommodation</li>
                        <li className='text-capitalize'>Breakfast, Lunch & Dinner</li>
                        <li className='text-capitalize'>Umrah Visa</li>
                        <li className='text-capitalize'>Transportation</li>
                        <li className='text-capitalize'>Ziyarat & Umrah</li>
                        <li className='text-capitalize'>Support of Own Akbar Executive</li>
                        <li className='text-capitalize'>GST & TCS</li>
                    </div>
                </div>
                <div className=''>
                    <div className='py-2' style={{ background: '#02A3C1' }}>
                        <p className='text-white text-center m-0'>Exclusions</p>
                    </div>
                    <div className='py-4 mx-lg-5' style={{ fontSize: '16px' }}>
                        <li className='text-capitalize'>RT PCR</li>
                        <li className='text-capitalize'>Any Expenses of Personel in nature</li>
                    </div>
                </div>
                
            </div>
        </section>
    );
};

export default InformationSection;