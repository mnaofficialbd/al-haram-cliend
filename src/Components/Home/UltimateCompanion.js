import React from 'react';
import mobileFrame from '../../Assets/UltimateCompanion/mobileFrame.png';
import alHaramLogo from '../../Assets/Icons/al-haram-final-logo.png';
import qrCode from '../../Assets/UltimateCompanion/qrCode.png';
import pStore from '../../Assets/UltimateCompanion/playStoreLogo.png';
import aStore from '../../Assets/UltimateCompanion/aStoreLogo.png';

const UltimateCompanion = () => {
    return (
        <section className='mt-5 pt-5'>
            <div className=' container p-5 d-md-flex ' style={{ background: '#ECFCFF' }}>
                <div className="">
                    <div><img src={alHaramLogo} alt="" /></div>
                    <div className='my-4 py-2'>
                        <h4 className='font-bold' style={{ fontSize: '40px' }}>Your ultimate spiritual travel companion</h4>
                        <p className='font-semibold text-capitalize' style={{ fontSize: '24px', color: '#757575' }}>Book in advance or last-minute with al-haram. <br />
                            Receive instant confirmation. Access your booking info offline.</p>
                    </div>
                    <div className="d-md-flex mt-5 justify-content-around ">
                        <div className="mb-3">
                            <h6 className='font-bold' style={{ fontSize: '24px' }}>Send A Link To Your Mobile Phone</h6>
                            <div className="input-group">
                                <select className="form-select" id="inputGroupSelect04" aria-label="Example select with button addon">
                                    <option selected>+91</option>
                                    <option value="1">+88</option>
                                    <option value="2">+96</option>
                                    <option value="3">+97</option>
                                </select>
                                <input type="text" className="form-control-lg" placeholder='123 4567 8910' aria-label="Dollar amount (with dot and two decimal places)" />
                                <button className="details-btn text-uppercase" type="button">Send</button>
                            </div>
                        </div>
                        <div className="px-3 mb-3 mx-auto text-center">
                            <div>
                                <h6 className='font-bold ' style={{ fontSize: '24px' }}>Scan QR Code</h6>
                            </div>
                            <div>
                                <img src={qrCode} alt="" className='' />
                            </div>
                        </div>
                        <div className="mb-3">
                            <h6 className='font-bold' style={{ fontSize: '24px' }}>Download The App</h6>
                            <div className="d-flex bg-dark justify-content-center text-white my-3 align-items-center p-2">
                                <div className='p-2'>
                                    <img src={pStore} alt="" style={{ width: '36px' }} />
                                </div>
                                <div className='text-center'>
                                    <p className='m-0' style={{ fontSize: '10px' }}>Android App Available On</p>
                                    <p className='m-0' style={{ fontSize: '14px' }}>Google Play Store</p>
                                </div>
                            </div>
                            <div className="d-flex bg-dark text-white justify-content-center my-3 align-items-center p-2">
                                <div className='p-2'>
                                    <img src={aStore} alt="" style={{ width: '36px' }} />
                                </div>
                                <div className='text-center'>
                                    <p className='m-0' style={{ fontSize: '10px' }}>Ios App Available On</p>
                                    <p className='m-0' style={{ fontSize: '14px' }}>App Store</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mx-auto text-center">
                    <img src={mobileFrame} alt="" className=" px-2" style={{ width: '260px' }} />
                </div>
            </div>

        </section>
    );
};

export default UltimateCompanion;