import React from 'react';
// import AboutUmrahPackage from '../Components/PackageDetails/AboutUmrahPackage';
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
            {/* <AboutUmrahPackage /> */}

        </>
    );
};

export default PackageDetails;