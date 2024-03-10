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
        <Box className="mt-[64px] pt-5 text-center">
            <Typography align='center' variant='h3'>Welcome!</Typography>
            <Typography align='center' variant='h6' className='text-[#878787]'>Please login to continue.</Typography>
            <Box className="flex flex-col w-1/2 my-5 mx-auto">
                <TextField
                    label="Enrolment Number"
                    variant='filled'
                    color='secondary'
                    name='prn'
                    type='number'
                    value={login.prn}
                    onChange={onLoginInputChange}
                    margin='dense'
                />
                <TextField
                    label="Password"
                    variant='filled'
                    color='secondary'
                    name='password'
                    value={login.password}
                    onChange={onLoginInputChange}
                    margin='dense'
                />
            </Box>
            {error && <Typography className='text-red-500 text-sm'>Please enter valid email or password!</Typography>}
            <Button
                variant='contained'
                onClick={(e) => loginAuth(e)}
                style={{ width: "25%", textTransform: 'none' }}
            >
                Login
            </Button>
        </Box>
    )
}

export default LoginForm;