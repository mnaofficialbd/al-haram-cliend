import React from 'react';
import exploreSAImg from '../../Assets/ExploreSA/exploreSA.png'

const ExploreSACards = () => {
    const eSADatas = [
        { id: 1, title: 'Dammam'},
        { id: 2, title: 'Riyadh'},
        { id: 3, title: 'Abiha'},
        { id: 4, title: 'Jeddah'},
        { id: 5, title: 'Mecca'},
        { id: 6, title: 'Madinah'},
        { id: 7, title: 'Al-khor'},
        { id: 8, title: 'Taif' },
    ]
    return (
        <section className='container mt-5 py-5'>
            <div className="row row-cols-2 row-cols-md-4 g-4">
                {
                    eSADatas.map(data =>
                        <div key={data.id} className="col">
                            <div className="d-flex align-items-center my-2">
                                <div>
                                    <img src={exploreSAImg} alt="..." />
                                </div>
                                <div className="ms-4">
                                    <h5 className='text-uppercase font-semibold' style={{fontSize: '22px'}}>{data.title}</h5>
                                    <p style={{fontSize: '18px', color:'#757575'}}>4,000 Listings</p>
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