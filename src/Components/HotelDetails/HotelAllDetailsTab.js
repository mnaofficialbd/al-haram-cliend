import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import HotelOverviewTab from './HotelOverviewTab'
import HotelUserReviews from './HotelUserReviews';
import HotelAmenitiesTab from './HotelAmenitiesTab';
import HotelRoomsTab from './HotelRoomsTab';
import HotelSimilarProTab from './HotelSimilarProTab';
import HotelLocationTab from './HotelLocationTab';
// import InformationSection from './InformationSection';
// import TermsConditions from './TermsConditions';
// import RoomSharing from './RoomSharing';
// import RoomSharingTable from './RoomSharingTable';
// import Itinerary from './Itinerary';
// import UserReviews from './UserReviews';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function HotelAllDetailsTab() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' ,marginTop: '50px' }}>
            <Box sx={{ borderBottom: 1,  borderColor: 'divider'}} >
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
                    <Tab className='mx-4' label="Rooms" {...a11yProps(0)} />
                    <Tab className='me-4' label="Overview" {...a11yProps(1)} />
                    <Tab className='me-4' label="Location" {...a11yProps(2)} />
                    <Tab className='me-4' label="Amenities" {...a11yProps(3)} />
                    <Tab className='me-4' label="Property Rules" {...a11yProps(4)} />
                    <Tab className='me-4' label="User Reviews" {...a11yProps(5)} />
                    <Tab className='' label="Similar Properties" {...a11yProps(6)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <HotelRoomsTab />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <HotelOverviewTab />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <HotelLocationTab />
            </TabPanel>
            <TabPanel value={value} index={3}>
                <HotelAmenitiesTab />
            </TabPanel>
            <TabPanel value={value} index={4}>
                {/* <Itinerary /> */}
            </TabPanel>
            <TabPanel value={value} index={5}>
                <HotelUserReviews />
            </TabPanel>
            <TabPanel value={value} index={6}>
                <HotelSimilarProTab />
            </TabPanel>
        </Box>
    );
}