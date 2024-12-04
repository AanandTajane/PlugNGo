import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

const TableComponent = () => {
  
    const requestSearch = () => {

    }

    const cancelSearch = () => { }

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));
    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));
    const [stations, setStation] = useState([]);
    useEffect(() => {
        // Define the URL of your API endpoint
        const apiUrl = "http://localhost:8080/stations/findAll"; // Replace with your actual endpoint

        // Make a GET request to the API endpoint
        axios
            .get(apiUrl)
            .then((response) => {
                // Handle the successful response here
                setStation(response.data); // Assuming the response data is an array of ChargingStation objects
            })
            .catch((error) => {
                // Handle any errors here
                console.error('Error fetching charging stations:', error);
            });
    }, []);


    return (
        <div>
            
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Station Name</StyledTableCell>
                            <StyledTableCell align="right">Location</StyledTableCell>
                            <StyledTableCell align="right">Taluka</StyledTableCell>
                            <StyledTableCell align="right">District</StyledTableCell>
                            <StyledTableCell align="right">Pincode</StyledTableCell>
                            <StyledTableCell align="right">Slots Available</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {stations.map((station) => (
                            <StyledTableRow key={station.stationName}>
                                <StyledTableCell component="th" scope="row">
                                    {station.stationName}
                                </StyledTableCell>
                                <StyledTableCell align="right">{station.location}</StyledTableCell>
                                <StyledTableCell align="right">{station.taluka}</StyledTableCell>
                                <StyledTableCell align="right">{station.district}</StyledTableCell>
                                <StyledTableCell align="right">{station.pincode}</StyledTableCell>
                                <StyledTableCell align="right">{station.slotsAvailable}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );

}

export default TableComponent

