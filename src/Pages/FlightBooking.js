import React from 'react';
import FlightBookingCards from '../Components/FlightBooking/FlightBookingCards';
import FlightBookingTitle from '../Components/FlightBooking/FlightBookingTitle';
import FlightBookingTravellerD from '../Components/FlightBooking/FlightBookingTravellerD';
import FlightBPriceSum from '../Components/FlightBooking/FlightBPriceSum';

const FlightBooking = () => {
    return (
        <>
            <FlightBookingTitle />
            <FlightBookingCards />
            <FlightBookingTravellerD />
            <FlightBPriceSum />
        </>
    );
};

export default FlightBooking;