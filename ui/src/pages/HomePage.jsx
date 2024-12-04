import React from 'react'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';


const HomePage = () => {
    const navigate = useNavigate();
    const divStyle = {
        marginTop: '25px',
        backgroundColor: '#1976d2', // Replace 'lightblue' with your desired color
        // You can add other CSS properties as needed
        padding: '10px',
        borderRadius: '5px',
        color: "white",
        display: 'flex'
    };
    return (
        <div style={divStyle}>
            <div style={{ margin: '10px', width: '150%', height: '100%', position: 'relative' }}>
                <img src="/src/assets/pexels-kindel-media-9800036.jpg" alt="Image Description" height='100%' width='60%'
                    style={{ width: '120%', height: '550px', objectFit: 'cover' }}
                />
            </div>
            <div style={{ marginLeft: '100px', padding: '20px' }}>
                <h2>Reserve Your EV Charging Slot</h2>
                <p>In today's fast-paced world, securing a spot to charge your electric vehicle is essential. With our straightforward reservation system, you can easily book a slot at your preferred charging station. Say goodbye to the hassle of waiting in line or worrying about finding an available charger. Reserve your EV charging slot now and ensure a hassle-free charging experience whenever you need it.</p>
                <p>The website offers an intuitive user interface that allows EV owners to search for nearby charging stations, view real-time availability, and make reservations with just a few clicks. Users can easily filter stations based on criteria such as location, charging speed, and accessibility features. Once a suitable station is found, users can check the availability of charging slots and book a specific time slot that fits their schedule. The platform also provides information about pricing, payment options, and station amenities, ensuring that users have all the necessary details to make an informed decision. With an emphasis on user experience, the website aims to make the transition to electric mobility as smooth as possible.</p>
                <p>Beyond its core reservation functionality, the website plays a pivotal role in promoting sustainability and environmental consciousness. By encouraging EV adoption and efficient use of charging infrastructure, it contributes to reduced greenhouse gas emissions and a cleaner environment. Furthermore, the website is designed to scale and adapt to the growing EV market, with features like user reviews and feedback mechanisms to enhance station quality and reliability. It also integrates with emerging technologies, such as smart grids and renewable energy sources, to support the transition to a greener future. As electric vehicle technology continues to advance, this reservation platform serves as a key enabler for a more sustainable and eco-friendly transportation ecosystem.</p>
                <Button style={{ padding: '10px', margin: '10px' }} onClick={() => navigate('/login')} variant="contained" color="success">
                    User Login
                </Button>
                <Button variant="contained" style={{ padding: '10px', margin: '10px' }} onClick={() => navigate('/signUp')}>
                    Sign Up
                </Button>
                <Button variant="contained" style={{ padding: '10px', margin: '10px' }} onClick={() => navigate('/adminSignUp')}>
                    Admin Sign Up
                </Button>
            </div>

        </div>
    )
}

export default HomePage