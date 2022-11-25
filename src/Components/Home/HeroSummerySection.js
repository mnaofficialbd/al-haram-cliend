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
        <section>
            <div className="container">
                {/* <div className="row g-4"> */}
                <div className="d-flex justify-content-center">
                    {
                        datas.map(data => (
                            // <div key={data.id} className="col-lg-3 col-6 col-md-6 summery-card ">
                            <div key={data.id} className="d-flex px-2 my-2 me-5 justify-content-between align-items-center summery-card ">
                                <div className='mx-2'>
                                    <img src={data.img} className="" alt="" style={{ width: '40px', height: '45px' }} />
                                </div>
                                <div className='mx-2 text-center my-3'>
                                    <h6>{data.subTitle}</h6>
                                    <h6>{data.title}</h6>
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