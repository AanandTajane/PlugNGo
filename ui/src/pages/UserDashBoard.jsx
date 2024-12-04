
import CustomTabPanel from '../components/CustomTabPanel';
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import UserTable from '../components/UserTable';
import HistoryGrid from '../components/HistoryGrid';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import Map from '../components/Map';
const UserDashBoard = () => {
  const navigate = useNavigate();
  CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  const [value, setValue] = React.useState(0);
  const a11yProps = (index) => {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const logout = () => {
    sessionStorage.clear();
    navigate('/login');
  }
  return (
    <Box sx={{
      marginTop: '25px',
      width: "100%",
      height: '100vh',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <Box sx={{ borderRadius: '5px', borderBottom: 1, backgroundColor: 'white' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Book a slot" {...a11yProps(0)} />
          <Tab label="View History" {...a11yProps(1)} />
          <Tab label="View Station In Map" {...a11yProps(1)} />
          <Button variant='contained' color='error' sx={{ marginLeft: "auto" }} onClick={logout}>Logout</Button>
        </Tabs>

      </Box>
      <CustomTabPanel value={value} index={0}>
        <div style={{
          backgroundColor: "white",
          display: 'flex',
          padding: '10px',
          borderRadius: '50px',
          flexDirection: "column"
        }}>

          <UserTable />
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <div style={{
          backgroundColor: "white",
          display: 'flex',
          padding: '10px',
          borderRadius: '50px',
          flexDirection: "column"
        }}>

          <HistoryGrid />
        </div>

      </CustomTabPanel>

      <CustomTabPanel value={value} index={2}>
        <div style={{
          backgroundColor: "white",
          display: 'flex',
          padding: '10px',
          borderRadius: '50px',
          flexDirection: "column"
        }}>
          <Map/>
         
        </div>

      </CustomTabPanel>
    </Box>
  );
}

export default UserDashBoard