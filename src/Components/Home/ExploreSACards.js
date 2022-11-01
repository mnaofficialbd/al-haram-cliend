import React from 'react';
import exploreSAImg from '../../Assets/ExploreSA/exploreSA.png'

const ExploreSACards = () => {
    const eSADatas = [
        { id: 1, img: exploreSAImg, title: 'Dammam', subTitle: '4,000 Listings' },
        { id: 2, img: exploreSAImg, title: 'Riyadh', subTitle: '4,000 Listings' },
        { id: 3, img: exploreSAImg, title: 'Abiha', subTitle: '4,000 Listings' },
        { id: 4, img: exploreSAImg, title: 'Jeddah', subTitle: '4,000 Listings' },
        { id: 5, img: exploreSAImg, title: 'Mecca', subTitle: '4,000 Listings' },
        { id: 6, img: exploreSAImg, title: 'Madinah', subTitle: '4,000 Listings' },
        { id: 7, img: exploreSAImg, title: 'Al-khor', subTitle: '4,000 Listings' },
        { id: 8, img: exploreSAImg, title: 'Taif', subTitle: '4,000 Listings' },
    ]
    return (
        <section className='container mt-4 py-5'>
            <div className="row row-cols-1 row-cols-md-4 g-4">
                {
                    eSADatas.map(data =>
                        <div className="col">
                            <div className="d-flex align-items-center my-2">
                                <div>
                                    <img src={data.img} alt="..." />
                                </div>
                                <div className="ms-4">
                                    <h5 className='text-uppercase font-semibold' style={{fontSize: '22px'}}>{data.title}</h5>
                                    <p style={{fontSize: '18px', color:'#757575'}}>{data.subTitle}</p>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </section>

    );
};

export default ExploreSACards;