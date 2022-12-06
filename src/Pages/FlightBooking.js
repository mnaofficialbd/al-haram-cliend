import React from 'react';
import FlightBookingCards from '../Components/FlightBooking/FlightBookingCards';
import FlightBookingTitle from '../Components/FlightBooking/FlightBookingTitle';
import FlightBookingTravellerD from '../Components/FlightBooking/FlightBookingTravellerD';

const FlightBooking = () => {
    return (
        <>
            <FlightBookingTitle />
            <FlightBookingCards />
            <FlightBookingTravellerD />
        </>
    );
};

export default FlightBooking;