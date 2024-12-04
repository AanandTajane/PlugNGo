import { Button, Box, TextField, Typography } from '@mui/material'
import React from 'react'
import {useState} from 'react'
import {useNavigate} from "react-router-dom"
import { request, setAuthHeader } from '../axios_helper';

const AdminSignUp = () => {
    const [user, setUser] = useState({
        firstName:'',
        lastName:'',
        username: '',
        password: '',
        role: 'admin',
             
    });
    const navigate = useNavigate();

    


    const onChangeHandle = (e) =>{
        setUser((prevState) =>({
            ...prevState,
            [e.target.name] : e.target.value
        }));
    }

    



    const onSubmit = () =>{
        // console.log(user);
        // axios.post("http://localhost:8080/user/save",user,{
        //     header:{
        //         "Content-Type":"application/json",
        //     },
        // }).then(() =>{
        //     alert("Account Created Successfully!!!")
        //     navigate("/login");

        // });

        if(user.firstName===''||
            user.lastName===''||
            user.username=== ''||
            user.password=== ''){
            alert("Please enter the data...")
        }

        request(
            "POST",
            "/register",
            {
                username: user.username,
                password: user.password,
                firstName: user.firstName,
                lastName: user.lastName,
                role: user.role
            }).then(
            (response) => {
                alert("Admin account created successfully...")
                navigate('/login')
            }).catch(
            (error) => {
                setAuthHeader(null);
               
            }
        );
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
                    <Button variant="contained" color="warning"
                        sx={{ marginTop: 3, borderRadius: 5 }}
                        onClick={onSubmit}
                    >Sign Up</Button>
                </Box>
            </form>
        </div>
    )
}

export default AdminSignUp