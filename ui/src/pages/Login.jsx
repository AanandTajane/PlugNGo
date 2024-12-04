import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { request, setAuthHeader } from '../axios_helper';
import userTable from "../components/UserTable.jsx";

const Login = () => {
   
      

    const navigate = useNavigate();
    const divStyle = {
        marginTop: '25px',
        backgroundColor: '#1976d2', // Replace 'lightblue' with your desired color
        // You can add other CSS properties as needed
        padding: '10px',
        borderRadius: '5px',
        display: 'flex'
    };
    const [loginData, setLoginData] = useState({
        username: "",
        password: "",
    });

    const onChangeHandle = (e) => {
        setLoginData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    }
    const validateEmail = (email) => {
        // Regular expression for email validation
        const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        return regex.test(email);
    };

    

    const login = () => {
        this.setState({componentToShow: "login"})
    };

    const logout = () => {
        this.setState({componentToShow: "welcome"})
        setAuthHeader(null);
    };

    const onLogin = (e) => {
        console.log(loginData.username)
        e.preventDefault();
        if(loginData.username === '' || loginData.password ===''){
            alert("Please enter your username and password");
        }
        request(
            "POST",
            "/login",
            {
                username: loginData.username,
                password: loginData.password
            }).then(
            (response) => {
                sessionStorage.setItem("userId",response.data.id);

                setAuthHeader(response.data.token);
                console.log(sessionStorage.getItem("userId"));
                if(response.data.role === 'admin'){
                    navigate('/adminDashboard')
                }
                else{
                    navigate('/userDashboard')
                }
               
            }).catch(
            (error) => {
                setAuthHeader(null);
                alert("Invalid username and password")
            }
        );
    };

  
    return (
        <div>
        
            <div style={{
                height: "100%",
                width:'100%',
                display: 'inline-flex',
                justifyContent:'center',
                marginTop: '10px',
                padding: '50px',
                border:"2px solid black",
                borderRadius: '5px',
                flexDirection:'row'
            }}>
                <Box>
                <img src="/src/assets/pexels-kindel-media-9800009.jpg" alt="Not Found" margin={0} height={550} width={550} />
                </Box>

                <Box
                    label="Username"
                    sx={{
                        backgroundColor: "white",
                        display: 'flex',
                        alignItems: 'center',
                        padding: '20px',
                        flexDirection:'column',
                        '& > :not(style)': { m: 1 },
                    }}
                    
                >
                
                    <h2 style={{ color: 'black' }}>Login</h2>
                    <TextField
                        sx={{ width: "400px" }}
                        id="demo-helper-text-aligned"
                        name="username"
                        label="Username"
                        value={loginData.email}
                        onChange={onChangeHandle}
                    />
                    <TextField
                        name="password"
                        type="password"
                        sx={{ width: "400px" }}
                        id="demo-helper-text-aligned-no-helper"
                        label="Password"
                        value={loginData.password}
                        onChange={onChangeHandle}
                    />
                    <Button style={{ padding: '10px', margin: '10px' }} onClick={onLogin} variant="contained" color="success">
                        Login
                    </Button>
                </Box>
            </div>
        </div>
    )

};






export default Login;