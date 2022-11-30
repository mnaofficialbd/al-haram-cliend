import React from 'react';
import LandDetailsHeader from '../Components/LandDetails/LandDetailsHeader';
import LandSnapshot from '../Components/LandDetails/LandSnapshot';
import LandSlideSidebar from '../Components/LandDetails/LandSlideSidebar';
import LandAllDetailsTab from '../Components/LandDetails/LandAllDetailsTab';
// import UmrahPackagesHeader from '../Components/Umrah/UmrahPackagesHeader';

const LandDetails = () => {
    return (
        <>
            {/* <UmrahPackagesHeader /> */}
            <LandDetailsHeader />
            <LandSlideSidebar />
            <LandSnapshot />
            <LandAllDetailsTab />

        </>
    );
};

export default LandDetails;