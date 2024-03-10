import { Box, Button, Input, TextField, Typography, styled } from '@mui/material';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../../services/api';
import { ContextApi } from '../../context/ContextApi';

const Wrapper = styled(Box)`
    & > * {
        margin-bottom: 10px;
    };
    & > button {
        margin: 10px 0px;
        text-transform: none;
    }
`;

const SignupForm = () => {

    const navigate = useNavigate();
    const { userData, setUserData, error, setError, file, setFile } = useContext(ContextApi);


    /// user signup input changes
    const handleSignupInputChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };


    /// signin method
    const signupAuth = async (e) => {
        const form = new FormData(this);

        form.append('name', userData.name);
        form.append('email', userData.email);
        form.append('phone', userData.phone);
        form.append('password', userData.password);
        form.append('filename', file.name);
        form.append('file', file);

        try {
            const response = await createUser(form);
            const result = response.data;

            if (result.success) {
                localStorage.setItem('token', result.authtoken);
                setUserData({})
                setFile("")
                navigate('/dashboard')
            } else {
                setError(true);
            }
        } catch (error) {
            console.log('user creation error', error);
        }
    }

    return (
        <Wrapper className="pt-[64px] flex flex-col p-5 text-center">
            <Typography variant='h3'>Welcome!</Typography>
            <Typography variant='h6' className='text-[#878787]'>Signin to enjoy our services.</Typography>
            <TextField
                variant='standard'
                onChange={handleSignupInputChange}
                name='name'
                value={userData.name}
                label="Name"
            />
            <TextField
                variant='standard'
                onChange={handleSignupInputChange}
                name='email'
                value={userData.email}
                label="Email"
            />
            <TextField
                variant='standard'
                onChange={handleSignupInputChange}
                name='phone'
                type='number'
                inputProps={{ min: 10, max: 10 }}
                min={10}
                max={10}
                value={userData.phone}
                label="Phone"
            />
            <TextField
                variant='standard'
                onChange={handleSignupInputChange}
                name='password'
                value={userData.password}
                label="Password"
            />
            <Input
                type='file'
                onChange={(e) => setFile(e.target.files[0])}
                inputProps={{ accept: 'image/*' }}
                className='mt-3'
                name='file'
            />
            {error && <Typography>Please Enter valid credentials!</Typography>}
            <Button
                variant='contained'
                onClick={(e) => signupAuth(e)}
            >
                Signup
            </Button>
        </Wrapper>
    )
}

export default SignupForm;