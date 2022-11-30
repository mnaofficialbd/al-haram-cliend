import React from 'react';
import HajjDetailsHeader from '../Components/HajjDetails/HajjDetailsHeader';
import HajjSnapshot from '../Components/HajjDetails/HajjSnapshot';
import HajjSlideSidebar from '../Components/HajjDetails/HajjSlideSidebar';
import HajjAllDetailsTab from '../Components/HajjDetails/HajjAllDetailsTab';
// import UmrahPackagesHeader from '../Components/Umrah/UmrahPackagesHeader';

const HajjDetails = () => {
    return (
        <>
            {/* <UmrahPackagesHeader /> */}
            <HajjDetailsHeader />
            <HajjSlideSidebar />
            <HajjSnapshot />
            <HajjAllDetailsTab />

        </>
    );
};

export default HajjDetails;