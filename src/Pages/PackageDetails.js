import React from 'react';
import PackageDetailsHeader from '../Components/PackageDetails/PackageDetailsHeader';
import PackageSnapshot from '../Components/PackageDetails/PackageSnapshot';
import SlideSidebar from '../Components/PackageDetails/SlideSidebar';
import PackageAllDetailsTab from '../Components/PackageDetails/PackageAllDetailsTab';
// import UmrahPackagesHeader from '../Components/Umrah/UmrahPackagesHeader';

const PackageDetails = () => {
    return (
        <>
            {/* <UmrahPackagesHeader /> */}
            <PackageDetailsHeader />
            <SlideSidebar />
            <PackageSnapshot />
            <PackageAllDetailsTab />

        </>
    );
};

export default PackageDetails;