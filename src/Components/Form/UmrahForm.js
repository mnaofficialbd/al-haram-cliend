import { faCalendarDays, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const UmrahForm = () => {

    /* const plus = document.querySelector('.plus');
    const minus = document.querySelector('.minus');
    const num = document.querySelector('.num');
    let a = 1;
    plus.addEventListener('click', () => {
        a++;
        a = (a < 100) ? '0' + a : a;
        num.innerText = a;
    })
    minus.addEventListener('click', () => {
        if (a > 1) {
            a--;
            a = (a > 100) ? '0' + a : a;
            num.innerText = a;
        }
    }) */

    return (
        <form action="" className='bg-white p-4 mb-4'>
            <div className="row row-cols-2 row-cols-lg-4 g-2 g-lg-3">
                <div className='col'>
                    <div className="d-flex">
                        <span className="">
                            <FontAwesomeIcon style={{ width: "20px", height: "20px", color: '#02A3C1' }} icon={faLocationDot}></FontAwesomeIcon>
                        </span>
                        <label htmlFor="exampleInputDeparture" className="form-label ms-2 font-semibold font-uppercase">COUNTRY</label>
                    </div>
                    <input type="text" placeholder='Eg: India' className="form-control" />
                </div>
                <div className='col'>
                    <div className="d-flex">
                        <span className="">
                            <FontAwesomeIcon style={{ width: "20px", height: "20px", color: '#02A3C1' }} icon={faLocationDot}></FontAwesomeIcon>
                        </span>
                        <label htmlFor="exampleInputDeparture" className="form-label font-semibold ms-2">CITY</label>
                    </div>
                    <input type="text" placeholder='Eg: Mumbai' className="form-control" />
                </div>
                <div className='col'>
                    <div className="d-flex">
                        <span className="">
                            <FontAwesomeIcon style={{ width: "20px", height: "20px", color: '#02A3C1' }} icon={faCalendarDays}></FontAwesomeIcon>
                        </span>
                        <label htmlFor="exampleInputDeparture" className="form-label ms-2 font-semibold">DURATION</label>
                    </div>
                    <input type="date" placeholder='Eg: 2 Oct 2022' className="form-control" />
                </div>
                <div className='col'>
                    <div className="d-flex">
                        <span>
                            <FontAwesomeIcon style={{ width: "20px", height: "20px", color: '#02A3C1' }} icon={faCalendarDays}></FontAwesomeIcon>
                        </span>
                        <label htmlFor="exampleInputDeparture" className="form-label ms-2 font-semibold">TRAVEL DATE</label>
                    </div>
                    <input type="date" placeholder='Day: DD MM YYYY' className="form-control" />
                </div>

            </div>
            <div className="d-md-flex justify-content-between align-items-end mt-4">
                <div className="d-flex gap-2 align-items-center">
                    <div className='px-1' style={{MinWidth: '160px'}}>
                        <label htmlFor="exampleInputDeparture" className="form-label font-semibold">ADULT</label>
                        <div className="input-group">
                            <button className="btn btn-outline-secondary" type="button" id="inputGroupFileAddon04">
                                <span className="font-bold">+</span>
                            </button>
                            <span className="num form-control">01</span>
                            {/* <input type="number" className="form-control text-center" placeholder='1' /> */}
                            <button className="btn btn-outline-secondary" type="button" id="inputGroupFileAddon04">
                                <span className="font-bold">-</span>
                            </button>
                        </div>
                    </div>
                    <div className='px-1' style={{MinWidth: '160px'}}>
                        <label htmlFor="exampleInputDeparture" className="form-label font-semibold">CHILD(REN)</label>
                        <div className="input-group">
                            <button className="btn btn-outline-secondary" type="button" id="inputGroupFileAddon04">
                                <span className="font-bold">+</span>
                            </button>
                            <span className="num form-control">01</span>
                            {/* <input type="number" className="form-control text-center" placeholder='02' /> */}
                            <button className="btn btn-outline-secondary" type="button" id="inputGroupFileAddon04">
                                <span className="font-bold">-</span>
                            </button>
                        </div>
                    </div>
                    <div className='px-1' style={{MinWidth: '160px'}}>
                        <label htmlFor="exampleInputDeparture" className="form-label font-semibold">INFANT(S)</label>
                        <div className="input-group">
                            <button className="btn btn-outline-secondary" type="button">
                                <span className="font-bold plus">+</span>
                            </button>
                            <span className="num form-control">01</span>
                            {/* <input type="number" className="form-control text-center num" placeholder='01' /> */}
                            <button className="btn btn-outline-secondary" type="button" >
                                <span className="font-bold minus">-</span>
                            </button>
                        </div>
                    </div>

                    {/* custom btn */}
                    {/* <div>
                        <label htmlFor="exampleInputDeparture" className="form-label font-semibold">ADULT</label>
                        <div className="formBtn">
                            <span className="minus btn btn-outline-secondary">-</span>
                            <span className="num">01</span>
                            <span className="plus btn btn-outline-secondary">+</span>
                        </div>
                    </div> */}

                </div>
                <div className='m-2 '>
                    <button className="search-btn" type="button">SEARCH</button>

                </div>
            </div>
        </form>
    );
};

export default UmrahForm;