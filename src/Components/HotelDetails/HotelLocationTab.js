import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

const containerStyle = {
    width: '58%',
    height: '50%'
  }

class HotelLocationTab extends Component {
    render() {
        return (
            <section className='mx-5 pt-2 pb-5'>

                <div className='d-md-flex justify-content-center '>

                    {/* sidebar */}
                    <div class="d-flex flex-column flex-shrink-0 px-1 me-3 rooms_tab_SideBar" >
                        <div className='h-100'>
                            <div className='text-center shadow'>
                                <div className='py-2' style={{ background: '#02A3C1' }}>
                                    <h6 className='font-semibold m-0 text-white' style={{ fontSize: '15px' }}>Around This Property</h6>
                                </div>
                                <div className="px-2 py-4" style={{ fontSize: '14px' }}>
                                    <div className="d-flex mb-3 justify-content-between">
                                        <li>Madinah</li>
                                        <p>5km</p>
                                    </div>
                                    <div className="d-flex mb-3 justify-content-between">
                                        <li>Haram Shareef</li>
                                        <p>10km</p>
                                    </div>
                                    <div className="d-flex mb-3 justify-content-between">
                                        <li>Masjid E Nabwi</li>
                                        <p>6km</p>
                                    </div>
                                    <div className="d-flex mb-2 justify-content-between">
                                        <li>Makkah Airport</li>
                                        <p>9km</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* map */}
                    <div className="hotel_room_CardSection">
                        <Map containerStyle={containerStyle} google={this.props.google} zoom={14}>

                            <Marker onClick={this.onMarkerClick}
                                name={'Current location'} />

                            <InfoWindow onClose={this.onInfoWindowClose}>
                            </InfoWindow>
                        </Map>
                    </div>
                </div>
            </section>
        );
    };
};

export default GoogleApiWrapper({
    apiKey: ("AIzaSyCT9VxlQ6qaHeGSG7JyBTlVXbtwZ4rkcFM")
})(HotelLocationTab)