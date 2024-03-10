import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../services/api';
import { ContextApi } from '../../context/ContextApi';


const LoginForm = () => {

    const navigate = useNavigate();
    const { setUserData, error, setError, setFile, login, setLogin } = useContext(ContextApi);


    /// user login input changes
    const onLoginInputChange = (e) => {
        const { name, value } = e.target;
        setLogin({ ...login, [name]: value });
    };

    /// login method
    const loginAuth = async (e) => {
        try {
            const response = await loginUser(login);
            const result = response.data;

            if (result.success) {
                localStorage.setItem('token', result.authtoken);
                setUserData({});
                setFile("");
                navigate('/dashboard');
            } else {
                setError(true);
            }
        } catch (error) {
            console.log('user creation error', error);
        }
    }

    return (
        <Box className="pt-[64px]">
            <Typography variant='h3'>Welcome!</Typography>
            <Typography variant='h6' className='text-[#878787]'>Please login to continue.</Typography>
            <TextField
                variant='standard'
                label="Email"
                name='email'
                value={login.email}
                onChange={onLoginInputChange}
            />
            <TextField
                variant='standard'
                label="Password"
                name='password'
                value={login.password}
                onChange={onLoginInputChange}
            />
            {error && <Typography className='text-red-500 text-sm'>Please enter valid email or password!</Typography>}
            <Button
                variant='contained'
                onClick={(e) => loginAuth(e)}
            >
                Login
            </Button>
        </Box>
    )
}

export default LoginForm;