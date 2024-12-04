
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import BookingDialog from './BookingDialog';
import {request} from "../axios_helper.jsx";


const UserTable = () => {

    const [stations, setStation] = useState([]);
    const [open, setOpen] = useState(false);

    const handleOpenDialog = (rowData) => {
        sessionStorage.setItem("stationId", rowData.id)
        setOpen(true);
    };

    

    const handleCloseDialog = () => {
        setOpen(false);
    };



    const onSave = (station) => {

        // axios.post("http://localhost:8080/stations/save", station, {
        //     header: {
        //         "Content-Type": "application/json",
        //     },
        // }).then(() => {
        //     alert("Data Saved Successfully")
        // });

        request(
            "POST",
            "/stations/save",
            station
            ).then(
            (response) => {
                console.log(response)
                alert("Data edited successfully")
            }).catch(
            (error) => {
                console.log(error)
            }
        );
    }


    const columns = [
        ...(sessionStorage.getItem("role") === 'user' ? [
            { field: 'id', headerName: 'Id', flex: 1},
            { field: 'stationName', headerName: 'Station name', flex: 1 },
            { field: 'location', headerName: 'Location', flex: 1 },
            { field: 'taluka', headerName: 'Taluka', flex: 1 },
            { field: 'district', headerName: 'District', flex: 1 },
            { field: 'pincode', headerName: 'Pincode', flex: 1 },
            { field: 'slotsAvailable', headerName: 'Slots Available', flex: 1 },

            {
                field: 'action', // Define a field for the action column
                headerName: 'Action',
                flex: 1,
                renderCell: (params) => (
                    // Render a button in each cell of the action column
                    <div>
                        <Button variant="outlined" onClick={() => handleOpenDialog(params.row)}>
                            Book a Slot
                        </Button>
                        <BookingDialog open={open} handleClose={handleCloseDialog} />
                    </div>
                ),
            },
        ] : [
            { field: 'id', headerName: 'Id', flex: 1, editable: true },
            { field: 'stationName', headerName: 'Station name', flex: 1, editable: true },
            { field: 'location', headerName: 'Location', flex: 1, editable: true },
            { field: 'taluka', headerName: 'Taluka', flex: 1, editable: true },
            { field: 'district', headerName: 'District', flex: 1, editable: true },
            { field: 'pincode', headerName: 'Pincode', flex: 1, editable: true },
            { field: 'slotsAvailable', headerName: 'Slots Available', flex: 1, editable: true }
        ])

        // Add more columns as needed
    ];

    // Map the stations data to rows
    const rows = stations.map((station) => ({
        id: station.id,
        stationName: station.stationName,
        longitude: station.longitude,
        latitude: station.latitude,
        location: station.location,
        taluka: station.taluka,
        district: station.district,
        pincode: station.pincode,
        slotsAvailable: station.slotsAvailable,
        // Map other properties to columns as needed
    }));

    useEffect(() => {
        // Define the URL of your API endpoint
        const apiUrl = "http://localhost:8080/stations/findAll"; // Replace with your actual endpoint

        // Make a GET request to the API endpoint
        axios
            .get(apiUrl)
            .then((response) => {
                // Handle the successful response here
                setStation(response.data); // Assuming the response data is an array of ChargingStation objects
                console.log(stations);
            })
            .catch((error) => {
                // Handle any errors here
                console.error('Error fetching charging stations:', error);
            });

        // request(
        //     "GET",
        //     "/stations/findAll",
        //     ).then(
        //     (response) => {
        //         sessionStorage.setItem("userId",response.data.id);
        //
        //         setAuthHeader(response.data.token);
        //
        //     }).catch(
        //     (error) => {
        //         setAuthHeader(null);
        //         console.log(error)
        //     }
        // );
    }, []);



    return (
        <div style={{ height: "100%", width: '100%' }}>
            <DataGrid sx={{ padding: "30px", borderRadius: "50px" }} rows={rows}
                columns={columns} slots={{ toolbar: GridToolbar }}
                processRowUpdate={(updatedRow) => onSave(updatedRow)}
            />
        
        </div>
    )
}

export default UserTable;
