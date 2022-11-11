import React from 'react';
import verifyIcon from '../../Assets/SummaryIcon/verifyVector.png';
import guestIcon from '../../Assets/SummaryIcon/clientVector.png';
import bookingIcon from '../../Assets/SummaryIcon/bookingVector.png';
import packIcon from '../../Assets/SummaryIcon/packageVector.png';

const HeroSummerySection = () => {

    const datas = [
        { id: 1, title: 'VERIFIED AGENTS', subTitle: '1500+', img: verifyIcon },
        { id: 2, title: 'HAPPY GUESTS', subTitle: '1 LAKH+', img: guestIcon },
        { id: 3, title: 'BOOKINGS DONE', subTitle: '2 LAKH+', img: bookingIcon },
        { id: 4, title: 'PACKAGES', subTitle: '1K +', img: packIcon }
    ]

    return (
        <section style={{ backgroundColor: '#02A3C1' }}>
            <div className="container">
                <div className="row g-4">
                    {
                        datas.map(data => (
                            <div key={data.id} className="col-lg-3 col-6 col-md-6 summery-card">
                                <div className=''>
                                    <img src={data.img} className="mx-auto d-block" alt="..." />
                                </div>
                                <div className='text-center'>
                                    <h4>{data.subTitle}</h4>
                                    <h4>{data.title}</h4>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default HeroSummerySection;