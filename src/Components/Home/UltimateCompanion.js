import React from 'react';
import mobileFrame from '../../Assets/UltimateCompanion/mobileFrame.png';
import alHaramLogo from '../../Assets/UltimateCompanion/alHaramLogo.png';
import qrCode from '../../Assets/UltimateCompanion/qrCode.png';
import pStore from '../../Assets/UltimateCompanion/playStoreLogo.png';
import aStore from '../../Assets/UltimateCompanion/aStoreLogo.png';

const UltimateCompanion = () => {
    return (
        <section className=' container p-2 row mx-auto' style={{ background: '#ECFCFF' }}>
            <div className="col-8">
                <div>
                    <div><img src={alHaramLogo} alt="" /></div>
                    <h4>Your ultimate spiritual travel companion</h4>
                    <p>Book in advance or last-minute with al-haram. Receive instant confirmation. Access your booking info offline.</p>
                </div>
                <div className="row">
                    <div className="col-6">
                        <h6>Send a link to your mobile phone</h6>
                    </div>
                    <div className="col-2">
                        <h6>Scan QR Code</h6>
                        <img src={qrCode} alt="" style={{width: '152px'}} />
                    </div>
                    <div className="col-4">
                        <h6>Download The Spp</h6>
                        <div className="d-flex">
                            <img src={pStore} alt="" />
                            <div>
                                <p>Android App Available On</p>
                                <p>Google Play Store</p>
                            </div>
                        </div>
                        <div className="d-flex">
                            <img src={aStore} alt="" />
                            <div>
                                <p>Ios App Available On</p>
                                <p>App Store</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-2">
                <img src={mobileFrame} alt="" style={{width: '245px'}} />
            </div>
        </section>
    );
};

export default UltimateCompanion;