import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from "axios";
import {request, setAuthHeader} from "../axios_helper.jsx";
import {format} from "date-fns";
const HistoryGrid = () => {

    const [user, setUser] = useState({
        userId: sessionStorage.getItem("userId"),
        password: '',
        role: 'user',
        firstName: '',
        lastName: '',
        address: '',
        pincode: '',
        typeOfVehicle: '',
        model: '',

    });

    const [bookings, setBookings] = useState([]);

    const columns = [
        { field: 'id', headerName: 'Id', flex: 1 },
        { field: 'amount', headerName: 'Amount', flex: 1 },
        { field: 'date', headerName: 'Date', flex: 1 },
        { field: 'transactionId', headerName: 'Transaction Id', flex: 1 },
        { field: 'stationName', headerName: 'Station Name', flex: 1 }
      
       
        // Add more columns as needed
    ];



    // Map the stations data to rows
    const rows = bookings.map((booking) => ({
        id: booking.id,
        amount:booking.amount,
        date:booking.bookingDate,
        transactionId: booking.transactionId,
        stationName:booking.stationName
        // Map other properties to columns as needed
    }));

    useEffect(() => {
        // Define the URL of your API endpoint
        const apiUrl = "http://localhost:8080/booking/findByUser"; // Replace with your actual endpoint

        // // Make a GET request to the API endpoint
        axios.get(apiUrl,{
                params:{
                    id:sessionStorage.getItem("userId")
                },
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${window.localStorage.getItem('auth_token')}`, // Add your auth key as a Bearer token
            }
            })
            .then((response) => {
                // Handle the successful response here
                setBookings(response.data); // Assuming the response data is an array of ChargingStation objects
            })
            .catch((error) => {
                // Handle any errors here
                console.error('Error fetching charging stations:', error);
            });

        // request(
        //     "GET",
        //     "/booking/findByUser",
        //     {id:user.userId}
        // ).then(
        //     (response) => {
        //         console.log(response.data);
        //
        //     }).catch(
        //     (e) => {
        //         console.log(sessionStorage.getItem("userId"))
        //         console.log(e)
        //     }
        // );

    }, []);
    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid sx={{ padding: "30px", borderRadius: "50px" }} rows={rows}
                columns={columns} slots={{ toolbar: GridToolbar }}></DataGrid>
        </div>
    )
}

export default HistoryGrid