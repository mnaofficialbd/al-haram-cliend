import React from 'react';
import indigoLogo from '../../Assets/Flights/indiGoLogo.png';

const FlightDetailsTab = () => {
    return (
        <section className='pt-2 mb-4'>
            <div className='px-4'>

                <div className="border border-secondary rounded">
                    <div className="border-bottom border-secondary py-2 px-3">
                        <p className='m-0 text-uppercase font-semibold' style={{ fontSize: '12px' }}>Departure - saturday march 26</p>
                    </div>
                    <div className="d-flex my-2 px-3 w-100 justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                            <img src={indigoLogo} alt="" className='width_17' />
                            <p className="font-semibold mb-0 ms-2" style={{ fontSize: '14px' }}>INDIGO</p>
                            <p className='mb-0' style={{ fontSize: '14px' }}>(IN-855)</p>
                        </div>
                        <div>
                            <p className='mb-0 pe-5 me-5' style={{ fontSize: '13px' }}>ECONOMY</p>
                        </div>
                    </div>

                    <div className="px-3">
                        <table class="table table-borderless">
                            <tbody style={{ fontSize: '14px' }}>
                                <tr>
                                    <td style={{ fontSize: '12px' }}>8:35 PM</td>
                                    <td className='text-center'>Jinnah International Airport Karachi Pakistan</td>
                                    <td>Airbus 320 (4515)</td>
                                </tr>
                                <tr>
                                    <td style={{ fontSize: '11px' }}>3 H 15m</td>
                                    <td></td>
                                    <td>Wifi Available</td>
                                </tr>
                                <tr>
                                    <td style={{ fontSize: '12px' }}>11:25 PM</td>
                                    <td className='text-center'>Jinnah International Airport Karachi Pakistan</td>
                                    <td>Usb Outlets</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FlightDetailsTab;