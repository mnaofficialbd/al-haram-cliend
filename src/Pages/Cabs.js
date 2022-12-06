import React from 'react';
import CabsMoreDetails from '../Components/Cabs/CabsMoreDetails';
import CabsSearchSection from '../Components/Cabs/CabsSearchSection';
import CabsShowMoreBtn from '../Components/Cabs/CabsShowMoreBtn';

const Cabs = () => {
    return (
        <>
            <CabsSearchSection />
            <CabsMoreDetails />
            <CabsShowMoreBtn />
        </>
    );
};

export default Cabs;