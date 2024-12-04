import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import axios from 'axios';
import React from 'react'

const AddStationDialog = ({ open, handleClose }) => {

    const [chargingStation, setChargingStation] = React.useState({
        stationName:'',
        location:'',
        pincode:'',
        taluka:'',
        longtitude:'',
        latitude:'',
        district:'',
        slotsAvailable:''
      });

      const onSubmit = (e) =>{
        if (
          station.stationName === '' ||
          station.location === '' ||
          station.pincode === '' ||
          station.taluka === '' ||
          station.district === '' ||
          station.slotsAvailable === ''
        ) {
          console.log('One or more attributes are empty.');
        } else {
          console.log(chargingStation);
            axios.post("http://localhost:8080/stations/save", chargingStation, {
                header: {
                    "Content-Type": "application/json",
                },
            }).then(() => {
                alert("Data Saved Successfully.")
            });
        }
       
      } 


    return (
        <div >
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Book Slot</DialogTitle>
                <DialogContent sx={{ width: "500px", height: "500px" }}>
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
                            <Button style={{ padding: '10px', margin: '10px' }} onClick={onSubmit} variant="contained" color="success">
                                Add
                            </Button>

                        </Box>
                    </div>
                </DialogContent>

            </Dialog>
        </div>
    )
}

export default AddStationDialog
