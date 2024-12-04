import { Button, Box, TextField, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { request, setAuthHeader } from '../axios_helper';

const SignUp = () => {
    
    const [user, setUser] = useState({
        username: '',
        password: '',
        role: 'user',
        firstName: '',
        lastName: '',
        address: '',
        pincode: '',
        typeOfVehicle: '',
        model: '',

    });

    const onChangeHandle = (e) => {
        setUser((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    }

    const navigate = useNavigate();



    const onSubmit = () => {
        console.log(user);
        if (
            user.username === '' ||
            user.password === '' ||
            user.firstName === '' ||
            user.lastName === '' ||
            user.address === '' ||
            user.pincode === '' ||
            user.typeOfVehicle === '' ||
            user.model === ''
        ) {
            // At least one of the attributes is empty
            console.log('One or more attributes are empty.');
        } else {
            // All attributes have values
            request(
                "POST",
                "/register",
                user).then(
                (response) => {
                    setAuthHeader(response.data.token);
                    
                    navigate("/login"
                    )
                    alert("Account Created Successfully")
                }).catch(
                (error) => {
                    setAuthHeader(null);
                    
                }
            );
        }


    }
    return (
        <div>
            <form>
                <Box display="flex"
                    flexDirection={"column"}
                    width={420}
                    alignItems="center"
                    justifyContent={"center"}
                    margin="auto"
                    marginTop={12}
                    padding={5}
                    borderRadius={15}
                    backgroundColor="white"
                    boxShadow={'5px 5px 10px #ccc'}
                    sx={{
                        ":hover": {
                            boxShadow: "10px 10px 20px #ccc",
                        }
                    }}
                >
                    <Typography variant="h5" padding={3} textAlign={"center"} color={'black'}>
                        Sign Up Form
                    </Typography>
                    <TextField type={'text'}
                        onChange={onChangeHandle}
                        name="firstName"
                        value={user.firstName}
                        margin="normal"
                        variant="outlined"
                        placeholder='First Name'></TextField>
                    <TextField
                        onChange={onChangeHandle}
                        name="lastName"
                        value={user.lastName}
                        type={'text'}
                        margin="normal"
                        variant="outlined"
                        placeholder='Last Name'></TextField>
                    <TextField
                        onChange={onChangeHandle}
                        type={'email'}
                        value={user.username}
                        name="username"
                        margin="normal"
                        variant="outlined"
                        placeholder='Username'></TextField>
                    <TextField
                        onChange={onChangeHandle}
                        type={'password'}
                        value={user.password}
                        name="password"
                        margin="normal"
                        variant="outlined"
                        placeholder='Password'></TextField>

                    <TextField
                        onChange={onChangeHandle}
                        type={'text'}
                        value={user.address}
                        name="address"
                        margin="normal"
                        variant="outlined"
                        placeholder='Address'></TextField>
                    <TextField
                        onChange={onChangeHandle}
                        type={'text'}
                        value={user.pincode}
                        name="pincode"
                        margin="normal"
                        variant="outlined"
                        placeholder='Pincode'></TextField>
                    <TextField
                        onChange={onChangeHandle}
                        type={'text'}
                        value={user.typeOfVehicle}
                        name="typeOfVehicle"
                        margin="normal"
                        variant="outlined"
                        placeholder='Type Of Vehicle'></TextField>
                    <TextField
                        onChange={onChangeHandle}
                        type={'text'}
                        name="model"
                        value={user.model}
                        margin="normal"
                        variant="outlined"
                        placeholder='Model'></TextField>
                    <Button variant="contained" color="warning"
                        sx={{ marginTop: 3, borderRadius: 5 }}
                        onClick={onSubmit}
                    >Sign Up</Button>
                </Box>
            </form>
        </div>
    )
}

export default SignUp