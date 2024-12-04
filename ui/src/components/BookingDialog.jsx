


import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import { useState } from 'react';
import Booking from './Booking';
const BookingDialog = ({ open, handleClose }) => {

    const [bookingDetails, setBookingDetails] = useState({
        userId: sessionStorage.getItem("userId"),
        stationId: '',
        time: '',
        date: '',
        lastName: '',
        address: '',
        pincode: '',
        typeOfVehicle: '',
        model: '',

    });


    return (
        <div >
            <Dialog  open={open} onClose={handleClose}>
                <DialogTitle>Book Slot</DialogTitle>
                <DialogContent sx={{width:"500px", height:"500px"}}>
                    <Booking />
                </DialogContent>
               
            </Dialog>
        </div>
    )
}

export default BookingDialog