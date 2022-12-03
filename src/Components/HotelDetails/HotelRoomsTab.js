import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBath, faBed, faCar, faChampagneGlasses, faLock, faMugHot, faWifi } from '@fortawesome/free-solid-svg-icons';
import roomImg from '../../Assets/Hotel/RoomImg.png';

const HotelRoomsTab = () => {
    /* const navigate = useNavigate();
    const handlePackageDetails = (id) => {
        navigate(`/umrah/packageDetails/${id}`);
    }; */


    const classicCardDatas = [
        { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }
    ]

    return (
        <section className='pt-2'>

            <div className='d-md-flex justify-content-center'>
                {/* cards */}
                <div className="hotel_room_CardSection">
                    {
                        classicCardDatas.map(classicData => (
                            <div key={classicData.id} className='mx-3 mb-4 bg-light shadow'>
                                <div className='d-md-flex align-items-center'>
                                    <div className='card_img'>
                                        <img src={roomImg} alt="" className='' />
                                    </div>
                                    <div className='mx-3 w-100'>
                                        <div className='card_text_section pt-2'>
                                            <div>
                                                <h4 className="mb-1 classic_umrah_title" >Deluxe Double Room</h4>
                                            </div>
                                            <div className=''>
                                                <h4 className="mb-1 classic_umrah_title" >RS 7,500/-</h4>
                                            </div>
                                        </div>
                                        <div>
                                            <p className='text-end mb-4' style={{fontSize: '11px'}}>Per Night</p>
                                        </div>
                                        <div className='text-uppercase mb-4' style={{ fontSize: '10px' }}>
                                            <li className=''>
                                                <strong>amenenites :</strong> Television, Wi-Fi, Hair dryer, Towels, Dining, Music, GYM and more.
                                            </li>
                                            <li className='my-3'>
                                                <strong>includes :</strong> Free Parking, Breakfast, gst
                                            </li>
                                            <li className=''>
                                                <strong>maximum :</strong> 4 Persons
                                            </li>
                                        </div>
                                        <div className='card_text_div mt-3'>
                                            <div className="d-flex pb-3">
                                                <span className='me-3 details-btn p-1'>
                                                    <FontAwesomeIcon style={{ width: "22px", height: "22px" }} icon={faBath}></FontAwesomeIcon>
                                                </span>
                                                <span className='details-btn me-3 p-1'>
                                                    <FontAwesomeIcon style={{ width: "22px", height: "22px" }} icon={faWifi}></FontAwesomeIcon>
                                                </span>

                                                <span className='me-3 details-btn p-1'>
                                                    <FontAwesomeIcon style={{ width: "22px", height: "22px" }} icon={faMugHot} />

                                                </span>
                                                <span className='me-3 details-btn p-1'>
                                                    <FontAwesomeIcon style={{ width: "22px", height: "22px" }} icon={faLock}></FontAwesomeIcon>
                                                </span>
                                                <span className='me-3 details-btn p-1'>
                                                    <FontAwesomeIcon style={{ width: "22px", height: "22px" }} icon={faCar}></FontAwesomeIcon>
                                                </span>
                                                <span className='details-btn me-3 p-1'>
                                                    <FontAwesomeIcon style={{ width: "22px", height: "22px" }} icon={faChampagneGlasses}></FontAwesomeIcon>
                                                </span>
                                                <span className='details-btn  p-1'>
                                                    <FontAwesomeIcon style={{ width: "22px", height: "22px" }} icon={faBed}></FontAwesomeIcon>
                                                </span>
                                            </div>
                                            <div className='pb-3'>
                                                <button className='pax-btn text-uppercase'>
                                                    Book now
                                                </button>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                {/* sidebar */}
                <div class="d-flex flex-column flex-shrink-0 px-1 rooms_tab_SideBar" >
                    <div className='h-100'>
                        <div className='py-4 text-center shadow text-uppercase' style={{ background: 'white' }}>
                            <h6 className='font-semibold mb-4 pb-2' style={{ fontSize: '18px' }}>TOTAL PRICE</h6>
                            <p className='mb-2' style={{fontSize: '13px'}}>double delux room</p>
                            <p style={{fontSize: '13px'}}>1 room for 1 night</p>
                            <hr />
                            <h6 className='font-semibold' style={{ fontSize: '16px' }}>rs 7500.00</h6>
                            <hr />
                            <button className="details-btn">continue</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HotelRoomsTab;