import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import LandOverviewSection from './LandOverviewSection'
import LandInformationSection from './LandInformationSection';
import LandTermsConditions from './LandTermsConditions';
// impoLandrt RoomSharing from './RoomSharing';
import LandRoomSharingTable from './LandRoomSharingTable';
import LandItinerary from './LandItinerary';
import LandUserReviews from './LandUserReviews';

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

export default function LandAllDetailsTab() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '92%' ,marginTop: '50px' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider'}} >
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
                    <Tab label="Overview" {...a11yProps(0)} />
                    <Tab label="Important Information" {...a11yProps(1)} />
                    <Tab label="Room Sharing" {...a11yProps(2)} />
                    <Tab label="Itinerary" {...a11yProps(3)} />
                    <Tab label="User Reviews" {...a11yProps(4)} />
                    <Tab label="Terms & Conditions" {...a11yProps(5)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <LandOverviewSection />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <LandInformationSection />
            </TabPanel>
            <TabPanel value={value} index={2}>
                {/* <RoomSharing /> */}
                <LandRoomSharingTable />
            </TabPanel>
            <TabPanel value={value} index={3}>
                <LandItinerary />
            </TabPanel>
            <TabPanel value={value} index={4}>
                <LandUserReviews />
            </TabPanel>
            <TabPanel value={value} index={5}>
                <LandTermsConditions />
            </TabPanel>
        </Box>
    );
}