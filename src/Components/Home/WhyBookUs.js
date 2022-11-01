import React from 'react';
import easyImg from '../../Assets/Footer/easyVector.png';
import priceImg from '../../Assets/Footer/priceVector.png';
import dealsImg from '../../Assets/Footer/dealsVector.png';
import supportImg from '../../Assets/Footer/SupportVector.png';

const WhyBookUs = () => {
    const bookDatas = [
        { id: 1, img: easyImg, title: 'Easy Booking' },
        { id: 2, img: priceImg, title: 'Lowest Price' },
        { id: 3, img: dealsImg, title: 'Exciting Deals' },
        { id: 4, img: supportImg, title: '24/7 Support' }
    ]
    return (
        <section className='mt-4 py-4'>
            <div style={{ background: '#02A3C1' }}>
                <div className=" container ">
                    <p>{bookDatas.length}</p>
                    {/* <div className="">
                        <p className='align-items-center text-center font-uppercase font-semibold' style={{ fontSize: '48px' }}>Why Choose Us ?</p>
                    </div>
                    {
                        bookDatas.map(bookData =>
                        (<div key={bookData?.id} className="align-items-center">
                            <div className='d-flex m-1 align-items-center'>
                                <div className='p-2'>
                                    <img src={bookData?.img} alt="" style={{ width: '40px'}} />
                                </div>
                                <div>
                                    <h6 className='text-center mx-2' style={{ fontSize: '32px' }}>{bookData?.title}</h6>
                                </div>
                            </div>
                        </div>)
                        )
                    } */}



                </div>
            </div>

        </section>
    );
};

export default WhyBookUs;