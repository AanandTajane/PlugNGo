import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import CustomTabPanel from '../components/CustomTabPanel';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { request, setAuthHeader } from '../axios_helper';
import UserTable from '../components/UserTable';
import { useNavigate } from "react-router-dom";
import AdminMap from '../components/AdminMap';


const AdminDashBoard = () => {
  const navigate = useNavigate();
  CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  const a11yProps = (index) => {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const onChangeHandle = (e) => {
    setChargingStation((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
  }));
  }

  const onSubmit = (e) =>{
    if (
      chargingStation.stationName === '' ||
      chargingStation.location === '' ||
      chargingStation.pincode === '' ||
      chargingStation.taluka === '' ||
      chargingStation.district === '' ||
      chargingStation.slotsAvailable === '' ||
      chargingStation.latitude === '' ||
      chargingStation.longitude === ''
    ) {
      console.log('One or more attributes are empty.');
    } else {
      console.log(chargingStation);
        // axios.post("http://localhost:8080/stations/save", chargingStation, {
        //     header: {
        //         "Content-Type": "application/json",
        //     },
        // }).then(() => {
        //     alert("Data Saved Successfully.")
        // });

        request(
          "POST",
          "/stations/save",
          {
            stationName : chargingStation.stationName,
            location : chargingStation.location,
            pincode:chargingStation.pincode,
            taluka :chargingStation.taluka,
            district:chargingStation.district,
            slotsAvailable :chargingStation.slotsAvailable,
            latitude :chargingStation.latitude,
            longitude:chargingStation.longitude
          }).then(
          (response) => {
              alert("Data saved successfully...")
             
          }).catch(
          (error) => {
            alert(error);
          }
      );
    }
   
  } 

  const [chargingStation, setChargingStation] = React.useState({
    stationName:'',
    location:'',
    pincode:'',
    taluka:'',
    district:'',
    slotsAvailable:'',
    latitude:'',
    longitude:''
  })

  const [value, setValue] = React.useState(0);
  const logout = () =>{
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
          <Tab label="Add Charging Station" {...a11yProps(0)} />
          <Tab label="View All Charging Stations" {...a11yProps(1)} />
          <Tab label="View And Add Charging Stations in Map" {...a11yProps(2)} />
          <Button variant='contained' color='error' sx={{marginLeft: "auto"}} onClick={logout}>Logout</Button>
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
          <h2 style={{ color: 'black' }}>Add Charging Station</h2>
          <Box
            label="Username"
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: "column",
              '& > :not(style)': { m: 1 },
            }}
          >
            <TextField
              sx={{ width: "400px" }}
              id="demo-helper-text-aligned"
              name="stationName"
              label="Charging Station Name"
              value={chargingStation.stationName}
              onChange={onChangeHandle}
            />
            <TextField
              name="location"
              sx={{ width: "400px" }}
              id="demo-helper-text-aligned-no-helper"
              label="Location"
              value={chargingStation.location}
              onChange={onChangeHandle}
            />
            <TextField
              name="pincode"
              sx={{ width: "400px" }}
              id="demo-helper-text-aligned-no-helper"
              label="Pincode"
              value={chargingStation.pincode}
              onChange={onChangeHandle}
            />
            <TextField
              name="taluka"
              sx={{ width: "400px" }}
              id="demo-helper-text-aligned-no-helper"
              label="Taluka"
              value={chargingStation.taluka}
              onChange={onChangeHandle}
            />
            <TextField
              name="district"
              sx={{ width: "400px" }}
              id="demo-helper-text-aligned-no-helper"
              label="Distrct"
              value={chargingStation.district}
              onChange={onChangeHandle}
            />
            <TextField
              name="slotsAvailable"
              sx={{ width: "400px" }}
              id="demo-helper-text-aligned-no-helper"
              label="Slots Available"
              value={chargingStation.slotsAvailable}
              onChange={onChangeHandle}
            />
             <TextField
              name="latitude"
              sx={{ width: "400px" }}
              id="demo-helper-text-aligned-no-helper"
              label="Latitude"
              value={chargingStation.latitude}
              onChange={onChangeHandle}
            />
             <TextField
              name="longitude"
              sx={{ width: "400px" }}
              id="demo-helper-text-aligned-no-helper"
              label="Longitude"
              value={chargingStation.longitude}
              onChange={onChangeHandle}
            />
            <Button style={{ padding: '10px', margin: '10px' }} onClick={onSubmit} variant="contained" color="success">
              Add
            </Button>
            
          </Box>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
      <div style={{
          backgroundColor: "white",
          display: 'flex',
          color:'black',
          borderRadius: '50px',
          flexDirection: "column",
          padding:"20px"
        }}>
          <h3>All Charging Stations</h3>
          <UserTable/>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
      <div style={{
          backgroundColor: "white",
          display: 'flex',
          color:'black',
          borderRadius: '50px',
          flexDirection: "column",
          padding:"20px"
        }}>
        
          <AdminMap/>
        </div>
      </CustomTabPanel>
    </Box>
  )
}

export default AdminDashBoard