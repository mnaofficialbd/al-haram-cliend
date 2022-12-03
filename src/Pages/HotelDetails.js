import React from 'react';
import HotelDetailsHeader from '../Components/HotelDetails/HotelDetailsHeader';
import HotelDetailsTitle from '../Components/HotelDetails/HotelDetailsTitle';
import HotelSlideSidebar from '../Components/HotelDetails/HotelSlideSidebar';
import HotelAllDetailsTab from '../Components/HotelDetails/HotelAllDetailsTab';

const HotelDetails = () => {
    return (
        <>
            <HotelDetailsTitle />
            <HotelDetailsHeader />
            <HotelSlideSidebar />
            <HotelAllDetailsTab />
        </>
    );
};

export default HotelDetails;