import { Box, Button} from '@mui/material'

import { useState } from 'react'
import DateTimePicker from 'react-datetime-picker';
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';
import { request, setAuthHeader } from '../axios_helper';

const Booking = () => {

    const options = {
        key: "rzp_test_6IjRFAh4CERhl0",
        amount: '25000',
        currency: "INR",
        name: "PlugNGo",
        description: "Payment for slot booking",
        image: "/src/assets/PlugNGo-logos_white.png",
        order_id: '',
        // callback_url: "http://localhost:8080/api/paymentverification",
        prefill: {
            name: sessionStorage.getItem("firstName") + sessionStorage.getItem("lastName"),
            email: sessionStorage.getItem("username"),
            contact: "9999999999"
        },
        notes: {
            "address": "Razorpay Corporate Office"
        },
        theme: {
            "color": "#121212"
        }
    };

    const [dateTime, setDateTime] = useState();

    const [bookingDetails, setBookingDetails] = useState({
        userId: sessionStorage.getItem("userId"),
        username: sessionStorage.getItem("username"),
        stationId: sessionStorage.getItem("stationId"),
        transactionId: '',
        dateTime: dateTime,

    });
    const openRazorPay = () => {
        const razor = new window.Razorpay(options);
        razor.open();
        
        console.log(bookingDetails)
        // axios.post("http://localhost:8080/booking/save", bookingDetails, {
        //     header: {
        //         "Content-Type": "application/json",
        //     },
        // }).then(() => {
            
        // });/

        request(
            "POST",
            "/booking/save",
            {
                userId : bookingDetails.userId,
                stationId : bookingDetails.stationId,
                transactionId : "0",
                dateTime : bookingDetails.dateTime
            }).then(
            (response) => {
                console.log(bookingDetails);
            }).catch(
            (error) => {
                setAuthHeader(null);
                console.log(bookingDetails);
            }
        );
    }

    const onChangeHandle = (newDateTime) => {
        console.log(newDateTime)
        setDateTime(newDateTime);
        // You can also update the bookingDetails object when dateTime changes
        setBookingDetails((prevState) => ({
          ...prevState,
          dateTime: newDateTime,
        }));
      };
    



    return (
        <div>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: "column",
                    '& > :not(style)': { m: 1 },
                }}>
                Pick A Date and Time
                <DateTimePicker value={dateTime} name='dateTime' onChange={onChangeHandle}></DateTimePicker>
                <Button onClick={openRazorPay} >Pay</Button>
            </Box>
        </div>
    )
}

export default Booking