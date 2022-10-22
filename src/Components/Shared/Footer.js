import React from 'react';
import alHaramLogo from '../../Assets/UltimateCompanion/alHaramLogo.png';
import fbLogo from '../../Assets/Footer/fbIcon.png';
import twitLogo from '../../Assets/Footer/twitIcon.png';
import insLogo from '../../Assets/Footer/instaIcon.png';
import linLogo from '../../Assets/Footer/linkedInVector.png';

const Footer = () => {
    return (
        <footer style={{ background: '#02A3C1' }}>
            <div className="d-flex">
                <div>
                    <div>
                        <img src={alHaramLogo} alt="" />
                    </div>
                    <p className="text-capitalize">
                        One of the most trusted travel group providing best services with to its clients since decades. Our director’s lorem ipsum a sons of Maxim’s founder lorem ipsum, are running these companies.lorem ipsum and glow is offering personalised services at every step, as not only a travel agency but also for exclusive.
                    </p>
                    <div className="d-flex">
                        <img src={fbLogo} alt="" className="pl-2" />
                        <img src={twitLogo} alt="" className="pl-2" />
                        <img src={insLogo} alt="" className="pl-2" />
                        <img src={linLogo} alt="" className="pl-2" />
                    </div>
                </div>
                <div>

                </div>
                <div>

                </div>
                <div>

                </div>
                <div>

                </div>
            </div>
            <div className="d-flex">

            </div>
        </footer>
    );
};

export default Footer;