import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import OverviewSection from './OverviewSection'
import InformationSection from './InformationSection';
import TermsConditions from './TermsConditions';
// import RoomSharing from './RoomSharing';
import RoomSharingTable from './RoomSharingTable';
import Itinerary from './Itinerary';
import UserReviews from './UserReviews';

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

export default function PackageAllDetailsTab() {
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
                <OverviewSection />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <InformationSection />
            </TabPanel>
            <TabPanel value={value} index={2}>
                {/* <RoomSharing /> */}
                <RoomSharingTable />
            </TabPanel>
            <TabPanel value={value} index={3}>
                <Itinerary />
            </TabPanel>
            <TabPanel value={value} index={4}>
                <UserReviews />
            </TabPanel>
            <TabPanel value={value} index={5}>
                <TermsConditions />
            </TabPanel>
        </Box>
    );
}