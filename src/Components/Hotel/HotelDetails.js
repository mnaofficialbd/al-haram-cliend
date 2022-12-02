import { faFilter, faMapLocationDot, faSort, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import roomImg from '../../Assets/Hotel/RoomImg.png';

const HotelDetails = () => {

    const roomCardDatas = [
        { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }, { id: 10 }, { id: 11 }, { id: 12 }
    ]
    const suggestDatas = [
        { id: 1, title: 'Related Excellent By travellers', num: 58 },
        { id: 2, title: '5 star hotels', num: 69 },
        { id: 3, title: 'free cancellation', num: 95 },
        { id: 4, title: 'near mecca', num: 65 },
        { id: 5, title: 'free breakfast', num: 35 },
        { id: 6, title: 'low budget hotels', num: 48 },
        { id: 7, title: '3 star hotels', num: 56 },
        { id: 8, title: 'lorem ipsum', num: 37 },
        { id: 9, title: 'apartments', num: 25 },
    ]
    const priceDatas = [
        { id: 1, title: 'Rs 0 - Rs 1,000', num: 58 },
        { id: 2, title: 'Rs 1,000 - Rs 2,000', num: 69 },
        { id: 3, title: 'Rs 2,000 - Rs 5,000', num: 95 },
        { id: 4, title: 'Rs 5,000 - Rs 10,000', num: 65 },
        { id: 5, title: 'Rs 10,000 - Rs 20,000', num: 35 },
        { id: 6, title: 'Rs 30,000+', num: 48 }
    ]
    const starDatas = [
        { id: 1, title: '5 Star', num: 58 },
        { id: 2, title: '4 Star', num: 69 },
        { id: 3, title: '3 Star', num: 95 }
    ]
    const propertyDatas = [
        { id: 1, title: 'Hotel', num: 58 },
        { id: 2, title: 'Apartment', num: 69 },
        { id: 3, title: 'Villa', num: 95 },
        { id: 4, title: 'Homestay', num: 95 }
    ]
    const amenetiesDatas = [
        { id: 1, title: 'Wi-Fi', num: 58 },
        { id: 2, title: 'Spa', num: 69 },
        { id: 3, title: 'Swimming Pool', num: 95 },
        { id: 4, title: 'Room service', num: 95 }
    ]
    const userRatings = [
        { id: 1, title: '4.5 & Above (Excellent)', num: 58 },
        { id: 2, title: '4 & above (verygood)', num: 69 },
        { id: 3, title: '3 & above good', num: 95 },
    ]
    const hotelChains = [
        { id: 1, title: 'accor', num: 58 },
        { id: 2, title: 'best western', num: 69 },
        { id: 3, title: 'taj hotels', num: 95 },
        { id: 4, title: 'the park hotel', num: 95 },
        { id: 5, title: 'novotel', num: 95 },
        { id: 6, title: 'al hayat hotel', num: 95 },
        { id: 7, title: 'hyaat hotel', num: 95 },
        { id: 8, title: 'west inn', num: 95 },
    ]
    const businessDatas = [
        { id: 1, title: 'karol bagh', num: 58 },
        { id: 2, title: 'gulberg', num: 69 },
        { id: 3, title: 'saddar', num: 95 },
        { id: 4, title: 'the mall road', num: 95 },
    ]
    const transitDatas = [
        { id: 1, title: 'aero city', num: 58 },
        { id: 2, title: 't3 delhi airport (igi)', num: 69 },
        { id: 3, title: 'isbt kashmer gate', num: 95 },
        { id: 4, title: 'pahar gunj', num: 95 },
    ]
    const diningDatas = [
        { id: 1, title: 'aero city', num: 58 },
        { id: 2, title: 't3 delhi airport (igi)', num: 69 },
        { id: 3, title: 'isbt kashmer gate', num: 95 },
        { id: 4, title: 'pahar gunj', num: 95 },
    ]


    return (
        <section className='mt-4 pt-4'>

            <div className='container pe-5 me-5'>
                <p className='text-end mb-1 pe-5 me-2'>1,258 Packages Found</p>
            </div>
            <div className='d-md-flex justify-content-center'>
                <div class="d-flex flex-column flex-shrink-0 px-2 hotel_SideBar" >
                    <div className='rounded px-2 h-100'>

                        {/* =============Filter section=============== */}
                        <div className='d-flex align-items-center justify-content-center text-white rounded py-2 text-center mb-3' style={{ background: '#02A3C1' }}>
                            <h6 className='font-semibold me-3 py-1 m-0' style={{ fontSize: '18px' }}>Filter By</h6>
                            <FontAwesomeIcon className='m-0 py-1' icon={faFilter}></FontAwesomeIcon>
                        </div>
                        <div className="border border-secondary">

                            {/* =============Suggested For You section=============== */}
                            <div className='mb-4'>
                                <div className='p-1' style={{ background: '#02A3C1' }}>
                                    <div className='text-center'>
                                        <h6 className='font-semibold m-0 py-2 text-white' style={{ fontSize: '18px' }}>Suggested For You</h6>
                                    </div>
                                </div>
                                <div className='mt-2'>
                                    {
                                        suggestDatas.map(suggestData => (
                                            <div key={suggestData.id} className="d-flex justify-content-between bg-white px-4">
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                                    <label class="form-check-label text-capitalize" style={{ fontSize: '14px' }} for="inlineCheckbox1">{suggestData.title}</label>
                                                </div>
                                                <div>
                                                    <p style={{ fontSize: '14px' }}>({suggestData.num})</p>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            {/* =============price section=============== */}
                            <div className='mb-4'>
                                <div className='p-1' style={{ background: '#02A3C1' }}>
                                    <div className='text-center'>
                                        <h6 className='font-semibold m-0 py-2 text-white' style={{ fontSize: '18px' }}>Price (Per Night)</h6>
                                    </div>
                                </div>
                                <div className='mt-2'>
                                    {
                                        priceDatas.map(priceData => (
                                            <div key={priceData.id} className="d-flex justify-content-between bg-white px-4">
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                                    <label class="form-check-label text-capitalize" style={{ fontSize: '14px' }} for="inlineCheckbox1">{priceData.title}</label>
                                                </div>
                                                <div>
                                                    <p style={{ fontSize: '14px' }}>({priceData.num})</p>
                                                </div>
                                            </div>
                                        ))
                                    }
                                    <div className="px-4">
                                        <h6>Your Budget</h6>
                                        <div className="d-flex">
                                            <div className='w-25'>
                                                <input className='width_99 text-center' type="text" placeholder='Min' />
                                            </div>
                                            <p className='m-0 px-2'>to</p>
                                            <div className='w-25'>
                                                <input className='width_99 text-center' type="text" placeholder='Max' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* =============star section=============== */}
                            <div className='mb-4'>
                                <div className='p-1' style={{ background: '#02A3C1' }}>
                                    <div className='text-center'>
                                        <h6 className='font-semibold m-0 py-2 text-white' style={{ fontSize: '18px' }}>Star Category</h6>
                                    </div>
                                </div>
                                <div className='mt-2'>
                                    {
                                        starDatas.map(starData => (
                                            <div key={starData.id} className="d-flex justify-content-between bg-white px-4">
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                                    <label class="form-check-label text-capitalize" style={{ fontSize: '14px' }} for="inlineCheckbox1">{starData.title}</label>
                                                </div>
                                                <div>
                                                    <p style={{ fontSize: '14px' }}>({starData.num})</p>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            {/* =============property section=============== */}
                            <div className='mb-4'>
                                <div className='p-1' style={{ background: '#02A3C1' }}>
                                    <div className='text-center'>
                                        <h6 className='font-semibold m-0 py-2 text-white' style={{ fontSize: '18px' }}>Property Type</h6>
                                    </div>
                                </div>
                                <div className='mt-2'>
                                    {
                                        propertyDatas.map(propertyData => (
                                            <div key={propertyData.id} className="d-flex justify-content-between bg-white px-4">
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                                    <label class="form-check-label text-capitalize" style={{ fontSize: '14px' }} for="inlineCheckbox1">{propertyData.title}</label>
                                                </div>
                                                <div>
                                                    <p style={{ fontSize: '14px' }}>({propertyData.num})</p>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            {/* =============property section=============== */}
                            <div className='mb-4'>
                                <div className='p-1' style={{ background: '#02A3C1' }}>
                                    <div className='text-center'>
                                        <h6 className='font-semibold m-0 py-2 text-white' style={{ fontSize: '18px' }}>Ameneties</h6>
                                    </div>
                                </div>
                                <div className='mt-2'>
                                    {
                                        amenetiesDatas.map(amenetiesData => (
                                            <div key={amenetiesData.id} className="d-flex justify-content-between bg-white px-4">
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                                    <label class="form-check-label text-capitalize" style={{ fontSize: '14px' }} for="inlineCheckbox1">{amenetiesData.title}</label>
                                                </div>
                                                <div>
                                                    <p style={{ fontSize: '14px' }}>({amenetiesData.num})</p>
                                                </div>
                                            </div>
                                        ))
                                    }
                                    <div className="px-4 text-end">
                                        <p style={{ fontSize: '11px' }}>Show 18 More</p>
                                    </div>
                                </div>
                            </div>
                            {/* =============userRatings section=============== */}
                            <div className='mb-4'>
                                <div className='p-1' style={{ background: '#02A3C1' }}>
                                    <div className='text-center'>
                                        <h6 className='font-semibold m-0 py-2 text-white' style={{ fontSize: '18px' }}>User Ratings</h6>
                                    </div>
                                </div>
                                <div className='mt-2'>
                                    {
                                        userRatings.map(userRating => (
                                            <div key={userRating.id} className="d-flex justify-content-between bg-white px-4">
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                                    <label class="form-check-label text-capitalize" style={{ fontSize: '14px' }} for="inlineCheckbox1">{userRating.title}</label>
                                                </div>
                                                <div>
                                                    <p style={{ fontSize: '14px' }}>({userRating.num})</p>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            {/* =============Hotel Chains section=============== */}
                            <div className='mb-4'>
                                <div className='p-1' style={{ background: '#02A3C1' }}>
                                    <div className='text-center'>
                                        <h6 className='font-semibold m-0 py-2 text-white' style={{ fontSize: '18px' }}>Hotel Chains</h6>
                                    </div>
                                </div>
                                <div className='mt-2'>
                                    {
                                        hotelChains.map(hotelChain => (
                                            <div key={hotelChain.id} className="d-flex justify-content-between bg-white px-4">
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                                    <label class="form-check-label text-capitalize" style={{ fontSize: '14px' }} for="inlineCheckbox1">{hotelChain.title}</label>
                                                </div>
                                                <div>
                                                    <p style={{ fontSize: '14px' }}>({hotelChain.num})</p>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            {/* =============Locality section=============== */}
                            <div className='mb-4'>
                                <div className='p-1' style={{ background: '#02A3C1' }}>
                                    <div className='text-center'>
                                        <h6 className='font-semibold m-0 py-2 text-white' style={{ fontSize: '18px' }}>Locality</h6>
                                    </div>
                                </div>
                                <div className='mt-4'>
                                    <div className="mx-4">
                                        <p className="font-semibold text-capitalize">business & shopping hubs</p>
                                    </div>
                                    {
                                        businessDatas.map(businessData => (
                                            <div key={businessData.id} className="d-flex justify-content-between bg-white px-4">
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                                    <label class="form-check-label text-capitalize" style={{ fontSize: '14px' }} for="inlineCheckbox1">{businessData.title}</label>
                                                </div>
                                                <div>
                                                    <p style={{ fontSize: '14px' }}>({businessData.num})</p>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                                <div className='mt-4'>
                                    <div className="mx-4">
                                        <p className="font-semibold text-capitalize">near transit hubs</p>
                                    </div>
                                    {
                                        transitDatas.map(transitData => (
                                            <div key={transitData.id} className="d-flex justify-content-between bg-white px-4">
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                                    <label class="form-check-label text-capitalize" style={{ fontSize: '14px' }} for="inlineCheckbox1">{transitData.title}</label>
                                                </div>
                                                <div>
                                                    <p style={{ fontSize: '14px' }}>({transitData.num})</p>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                                <div className='mt-2'>
                                    <div className="mx-4">
                                        <p className="font-semibold text-capitalize">known for dining & shopping</p>
                                    </div>
                                    {
                                        diningDatas.map(diningData => (
                                            <div key={diningData.id} className="d-flex justify-content-between bg-white px-4">
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                                    <label class="form-check-label text-capitalize" style={{ fontSize: '14px' }} for="inlineCheckbox1">{diningData.title}</label>
                                                </div>
                                                <div>
                                                    <p style={{ fontSize: '14px' }}>({diningData.num})</p>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
                <div className="hotel_CardSection">

                    {/* ============================== */}

                    <div className="px-3 py-1 rounded mx-3 mb-3" style={{ background: '#E9E9E9' }}>
                        <div className="d-flex justify-content-between">
                            <div className="d-flex align-items-center">
                                <div className='d-flex align-items-center'>
                                    <p className='m-0 font-semibold me-4'>Sort By</p>
                                    <FontAwesomeIcon className='m-0 me-4' icon={faSort}></FontAwesomeIcon>
                                </div>
                                <div><p className='m-0 me-4'>Departure</p></div>
                                <div><p className='m-0 me-4'>Price</p></div>
                                <div><p className='m-0'>Duration</p></div>
                            </div>
                            <div>
                                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            </div>
                        </div>
                    </div>

                    {/* ============================= */}

                    {
                        roomCardDatas.map(roomData => (
                            <div key={roomData.id} className='mx-3 mb-4 bg-light shadow'>
                                <div className='d-md-flex align-items-center'>
                                    <div className='card_img'>
                                        <img src={roomImg} alt="" className='' />
                                    </div>
                                    <div className='mx-3 d-flex justify-content-between align-items-center w-100'>
                                        <div className="width_70 border-end border-dark">
                                            <div className="d-flex mb-3 justify-content-between">
                                                <div className="d-flex align-items-center">
                                                    <FontAwesomeIcon className='me-2' style={{ color: 'rgb(230, 255, 5)', width: "12px", height: "12px" }} icon={faStar}></FontAwesomeIcon>
                                                    <FontAwesomeIcon className='me-2' style={{ color: 'rgb(230, 255, 5)', width: "12px", height: "12px" }} icon={faStar}></FontAwesomeIcon>
                                                    <FontAwesomeIcon className='me-2' style={{ color: 'rgb(230, 255, 5)', width: "12px", height: "12px" }} icon={faStar}></FontAwesomeIcon>
                                                    <FontAwesomeIcon className='me-2' style={{ color: 'rgb(230, 255, 5)', width: "12px", height: "12px" }} icon={faStar}></FontAwesomeIcon>
                                                </div>
                                                <div>
                                                    <p className='m-0 pe-2' style={{ fontSize: '12px' }}>2676 Reviews</p>
                                                </div>
                                            </div>
                                            <div>
                                                <div>
                                                    <h4 className="mb-1 classic_umrah_title" >Universal Luxury Grand Hotel</h4>
                                                </div>
                                                <div className='my-2'>
                                                    <div className="d-flex align-items-center py-3 m-0">
                                                        <FontAwesomeIcon className='me-2' icon={faMapLocationDot}></FontAwesomeIcon>
                                                        <p className='m-0' style={{ fontSize: '14px' }}>28800 Orchard Lake Road,</p>
                                                    </div>
                                                    <p className='pb-3 m-0' style={{ fontSize: '14px' }}>Suite 180 Farmington Hills, U.S.A</p>
                                                </div>

                                                <div className='mb-2'>
                                                    <button className="details-btn">Breakfast Included</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-25 d-flex flex-column align-items-end text-end">
                                            <h5 className='m-0 font-semibold pb-2'>$ 2975</h5>
                                            <p className='m-0 py-1' style={{ fontSize: '13px' }}>2565 Taxes & fees</p>
                                            <p className='m-0 pb-2' style={{ fontSize: '11px' }}>Per Night</p>
                                            <button className="details-btn my-2">Book Now</button>
                                            <p className='m-0 pt-1' style={{ fontSize: '11px' }}>Cancellation Charges Apply</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default HotelDetails;