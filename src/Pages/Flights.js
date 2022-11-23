import React from 'react';
import FlightsMoreDetails from '../Components/Flights/FlightsMoreDetails';
import FlightsSelection from '../Components/Flights/FlightsSelection';
import FlightsShowMoreBtn from '../Components/Flights/FlightsShowMoreBtn';
import FlightsSlider from '../Components/Flights/FlightsSlider';
import UmrahLogoTextHeader from '../Components/Umrah/UmrahLogoTextHeader';

const Flights = () => {
    return (
        <>
            <UmrahLogoTextHeader />
            <FlightsSelection />
            <FlightsSlider />
            <FlightsMoreDetails />
            <FlightsShowMoreBtn />
        </>
    );
};

export default Flights;