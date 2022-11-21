import React from 'react';
import FlightsMoreDetails from '../Components/Flights/FlightsMoreDetails';
import FlightsSelection from '../Components/Flights/FlightsSelection';
import FlightsSlider from '../Components/Flights/FlightsSlider';
import UmrahLogoTextHeader from '../Components/Umrah/UmrahLogoTextHeader';

const Flights = () => {
    return (
        <>
            <UmrahLogoTextHeader />
            <FlightsSelection />
            <FlightsSlider />
            <FlightsMoreDetails />
        </>
    );
};

export default Flights;