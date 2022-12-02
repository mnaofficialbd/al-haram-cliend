import React from 'react';
import HotelDetails from '../Components/Hotel/HotelDetails';
import HotelSearchSection from '../Components/Hotel/HotelSearchSection';
import HotelShowMoreBtn from '../Components/Hotel/HotelShowMoreBtn';

const Hotel = () => {
    return (
        <>
            <HotelSearchSection />
            <HotelDetails />
            <HotelShowMoreBtn />
        </>
    );
};

export default Hotel;