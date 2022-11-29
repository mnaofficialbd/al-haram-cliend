import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faBus, faCouch, faKaaba, faMugHot, faFilter, faPlaneDeparture, faCalendarDays, faLocationDot, faUsers, faCalendarDay, faVcard, faSort } from '@fortawesome/free-solid-svg-icons';
import kaba from '../../Assets/umrahPackages/kaba.png';
import { NavLink } from 'react-router-dom';
import UmrahPackagesTitle from '../Shared/UmrahPackagesTitle';

const UmrahPackages = () => {
    /* const navigate = useNavigate();
    const handlePackageDetails = (id) => {
        navigate(`/umrah/packageDetails/${id}`);
    }; */


    const classicCardDatas = [
        { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }
    ]
    const countryDatas = [
        { id: 1, title: 'Egypt', num: 58 },
        { id: 2, title: 'India', num: 69 },
        { id: 3, title: 'Pakistan', num: 95 },
        { id: 4, title: 'Bangladesh', num: 65 },
        { id: 5, title: 'Malaysia', num: 35 },
        { id: 6, title: 'Indonesia', num: 48 },
        { id: 7, title: 'Turkey', num: 56 },
        { id: 8, title: 'Azerbaijan', num: 37 },
        { id: 9, title: 'Afghanistan', num: 25 },
    ]
    const cityDatas = [
        { id: 1, title: 'Mumbai', num: 58 },
        { id: 2, title: 'Delhi', num: 69 },
        { id: 3, title: 'Lahore', num: 95 },
        { id: 4, title: 'Kuala Lampur', num: 65 },
        { id: 5, title: 'Bombay', num: 35 },
        { id: 6, title: 'Kolkuta', num: 48 },
        { id: 7, title: 'Cairo', num: 56 },
        { id: 8, title: 'Baku', num: 37 },
        { id: 9, title: 'Kabul', num: 25 },
    ]
    const monthDatas = [
        { id: 1, title: 'Oct 2022', num: 58 },
        { id: 2, title: 'Nov 2022', num: 69 },
        { id: 3, title: 'Dec 2022', num: 95 },
        { id: 4, title: 'Jan 2023', num: 65 },
        { id: 5, title: 'Feb 2023', num: 35 },
        { id: 6, title: 'March 2023', num: 48 }
    ]
    const daysDatas = [
        { id: 1, title: '7 To 10 Days', num: 58 },
        { id: 2, title: '10 To 15 Days', num: 69 },
        { id: 3, title: '15 To 18 Days', num: 95 },
        { id: 4, title: '12 To 23 Days', num: 65 },
        { id: 5, title: '12 To 56 Days', num: 35 },
        { id: 6, title: '1 To 10 Days', num: 48 }
    ]
    return (
        <section className='mt-5 pt-5'>
            <UmrahPackagesTitle />

            <div className='mt-4 pt-4'>
                <div className='container pe-5 me-5'>
                    <p className='text-end mb-1 pe-5 me-2'>1,258 Packages Found</p>
                </div>
                <div className='d-md-flex justify-content-center'>
                    <div class="d-flex flex-column flex-shrink-0 px-2 umrahSideBar" >
                        <div className='rounded px-2 h-100'>

                            {/* =============Filter section=============== */}
                            <div className='d-flex align-items-center justify-content-center text-white rounded py-2 text-center mb-4 mx-2' style={{ background: '#02A3C1' }}>
                                <h6 className='font-semibold me-3 m-0' style={{ fontSize: '18px' }}>Filter By</h6>
                                <FontAwesomeIcon className='m-0' icon={faFilter}></FontAwesomeIcon>
                            </div>
                            {/* =============Budget Range section=============== */}
                            <div className='bg-light border border-secondary rounded mb-4 mx-2'>
                                <div className='py-1 text-center' style={{ background: '#02A3C1' }}>
                                    <h6 className='font-semibold text-white' style={{ fontSize: '18px' }}>Budget Range</h6>
                                </div>
                                <div className='text-center bg-white py-2'>
                                    <p className='' style={{ fontSize: '14px' }}>Rs 10,000 To 100,000</p>
                                    <div>
                                        <input type="range" min="0" max="100" />

                                    </div>
                                </div>
                            </div>

                            {/* =============Departure country section=============== */}
                            <div className='bg-light border border-secondary mb-4 mx-2'>
                                <div className='p-1' style={{ background: '#02A3C1' }}>
                                    <div className='text-center'>
                                        <h6 className='font-semibold  text-white' style={{ fontSize: '18px' }}>Departure Country</h6>
                                    </div>
                                </div>
                                <div className='mt-2'>
                                    {
                                        countryDatas.map(countryData => (
                                            <div key={countryData.id} className="d-flex justify-content-between bg-white px-4">
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                                    <label class="form-check-label" style={{ fontSize: '14px' }} for="inlineCheckbox1">{countryData.title}</label>
                                                </div>
                                                <div>
                                                    <p style={{ fontSize: '14px' }}>({countryData.num})</p>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>

                            {/* =============Departure City section=============== */}
                            <div className='bg-light border border-secondary mb-4 mx-2'>
                                <div className='p-1 text-center' style={{ background: '#02A3C1' }}>
                                    <div>
                                        <h6 className='font-semibold text-white' style={{ fontSize: '18px' }}>Departure City</h6>
                                    </div>
                                </div>
                                <div className='mt-3'>
                                    {
                                        cityDatas.map(cityData => (
                                            <div key={cityData.id} className="d-flex justify-content-between bg-white px-4">
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                                    <label class="form-check-label" for="inlineCheckbox1" style={{ fontSize: '14px' }}>{cityData.title}</label>
                                                </div>
                                                <div>
                                                    <p style={{ fontSize: '14px' }}>({cityData.num})</p>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            {/* =============Month of Travel section=============== */}
                            <div className='bg-light border border-secondary mb-4 mx-2'>
                                <div className='p-1 text-center' style={{ background: '#02A3C1' }}>
                                    <div>
                                        <h6 className='font-semibold text-white' style={{ fontSize: '18px' }}>Month of Travel</h6>
                                    </div>
                                </div>
                                <div className='mt-3'>
                                    {
                                        monthDatas.map(monthData => (
                                            <div key={monthData.id} className="d-flex justify-content-between bg-white px-4">
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                                    <label class="form-check-label" for="inlineCheckbox1" style={{ fontSize: '14px' }}>{monthData.title}</label>
                                                </div>
                                                <div>
                                                    <p style={{ fontSize: '14px' }}>({monthData.num})</p>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            {/* =============No Of Days section=============== */}
                            <div className='bg-light border border-secondary mb-4 mx-2'>
                                <div className='p-1 text-center' style={{ background: '#02A3C1' }}>
                                    <div>
                                        <h6 className='font-semibold text-white' style={{ fontSize: '18px' }}>No Of Days</h6>
                                    </div>
                                </div>
                                <div className='mt-3'>
                                    {
                                        daysDatas.map(daysData => (
                                            <div key={daysData.id} className="d-flex justify-content-between bg-white px-4">
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                                    <label class="form-check-label" for="inlineCheckbox1" style={{ fontSize: '14px' }}>{daysData.title}</label>
                                                </div>
                                                <div>
                                                    <p style={{ fontSize: '14px' }}>({daysData.num})</p>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="umrahCardSection">

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
                            classicCardDatas.map(classicData => (
                                <div key={classicData.id} className='mx-3 mb-4 bg-light shadow'>
                                    <div className='d-md-flex align-items-center'>
                                        <div className='card_img'>
                                            <img src={kaba} alt="" className='width_90' />
                                        </div>
                                        <div className='mx-3 w-100'>
                                            <div className='card_text_section'>
                                                <div className='d-flex'>
                                                    <div>
                                                        <h4 className="mb-1 classic_umrah_title" >Classic Umrah Package</h4>
                                                    </div>
                                                    <div className="d-flex align-items-center ms-3">
                                                        <FontAwesomeIcon className='me-2' style={{ color: 'rgb(230, 255, 5)', width: "12px", height: "12px" }} icon={faStar}></FontAwesomeIcon>
                                                        <FontAwesomeIcon className='me-2' style={{ color: 'rgb(230, 255, 5)', width: "12px", height: "12px" }} icon={faStar}></FontAwesomeIcon>
                                                        <FontAwesomeIcon className='me-2' style={{ color: 'rgb(230, 255, 5)', width: "12px", height: "12px" }} icon={faStar}></FontAwesomeIcon>
                                                        <FontAwesomeIcon className='me-2' style={{ color: 'rgb(230, 255, 5)', width: "12px", height: "12px" }} icon={faStar}></FontAwesomeIcon>
                                                    </div>
                                                </div>
                                                <div className=''>
                                                    <p className='font-semibold pt-3'>Per Person</p>
                                                </div>
                                            </div>

                                            <div className='card_text_div mt-1'>
                                                <div>
                                                    <div className="d-flex ">
                                                        <div className="me-3">
                                                            <div className="d-flex mb-1">
                                                                <FontAwesomeIcon className='me-3' style={{ color: '#02A3C1', width: "20px", height: "20px" }} icon={faCalendarDays}></FontAwesomeIcon>
                                                                <p className='font-semibold' style={{ fontSize: '14px' }}>10 Days</p>
                                                            </div>
                                                            <div className="d-flex">
                                                                <FontAwesomeIcon className='me-3' style={{ color: '#02A3C1', width: "20px", height: "20px" }} icon={faCalendarDay}></FontAwesomeIcon>
                                                                <p className='font-semibold' style={{ fontSize: '14px' }}>13 Sep 2022</p>
                                                            </div>
                                                        </div>
                                                        <div className="mx-3">
                                                            <div className="d-flex">
                                                                <FontAwesomeIcon className='me-3' style={{ color: '#02A3C1', width: "20px", height: "20px" }} icon={faUsers}></FontAwesomeIcon>
                                                                <p className='font-semibold' style={{ fontSize: '14px' }}>50 Members</p>
                                                            </div>
                                                            <div className="d-flex">
                                                                <FontAwesomeIcon className='me-3' style={{ color: '#02A3C1', width: "20px", height: "20px" }} icon={faLocationDot}></FontAwesomeIcon>
                                                                <p className='font-semibold' style={{ fontSize: '14px' }}>Delhi - INDIA</p>
                                                            </div>

                                                        </div>
                                                    </div>
                                                    <hr className='my-0 py-1' />
                                                </div>

                                                <div className='block_to_flex'>
                                                    <h5 className='font-semibold mb-3 text-end' style={{ fontSize: '24px', color: '#02A3C1' }}>₹ 120,000</h5>


                                                    {/* <button
                                                onClick={() => handlePackageDetails(id)}
                                                className="text-uppercase font-bold umrah_details_btn me-2">
                                                View details
                                            </button> */}

                                                    <NavLink to='/umrah/packageDetails' className='text-uppercase font-semibold umrah_details_btn'>View details</NavLink>
                                                </div>
                                            </div>
                                            <p className='font-semibold' style={{ fontSize: '16px' }}>INCLUSION</p>
                                            <div className='card_text_div mt-3'>
                                                <div className="d-flex pb-3">
                                                    <span className='me-4 details-btn p-1'>
                                                        <FontAwesomeIcon style={{ width: "22px", height: "22px" }} icon={faPlaneDeparture}></FontAwesomeIcon>
                                                    </span>
                                                    <span className='details-btn me-4 p-1'>
                                                        <FontAwesomeIcon style={{ width: "22px", height: "22px" }} icon={faBus}></FontAwesomeIcon>
                                                    </span>

                                                    <span className='me-4 details-btn p-1'>
                                                        <FontAwesomeIcon style={{ width: "22px", height: "22px" }} icon={faVcard} />

                                                    </span>
                                                    <span className='me-4 details-btn p-1'>
                                                        <FontAwesomeIcon style={{ width: "22px", height: "22px" }} icon={faCouch}></FontAwesomeIcon>
                                                    </span>
                                                    <span className='me-4 details-btn p-1'>
                                                        <FontAwesomeIcon style={{ width: "22px", height: "22px" }} icon={faMugHot}></FontAwesomeIcon>
                                                    </span>
                                                    <span className='details-btn  p-1'>
                                                        <FontAwesomeIcon style={{ width: "22px", height: "22px" }} icon={faKaaba}></FontAwesomeIcon>
                                                    </span>
                                                </div>
                                                <div className='pb-3'>
                                                    <button className='pax-btn font-capitalize'>
                                                        40 Remaining Pax
                                                    </button>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UmrahPackages;