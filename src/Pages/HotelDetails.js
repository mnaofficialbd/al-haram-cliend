import React from 'react';
import HotelDetailsHeader from '../Components/HotelDetails/HotelDetailsHeader';
import HotelDetailsTitle from '../Components/HotelDetails/HotelDetailsTitle';
import HotelSlideSidebar from '../Components/HotelDetails/HotelSlideSidebar';

const HotelDetails = () => {
    return (
        <>
            <HotelDetailsTitle />
            <HotelDetailsHeader />
            <HotelSlideSidebar />
        </>
    );
};

export default HotelDetails;