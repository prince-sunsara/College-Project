import { Box, Button, Grid, Input, TextField, Typography, styled } from '@mui/material';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../../services/api';
import { ContextApi } from '../../context/ContextApi';

const FormBox = styled(Grid)`
    display: flex;
    flex-direction: column;
    padding: 8px 14px;
    & > * {
        margin: 5px 0;
    }
    &>h6{
        text-transform: uppercase;
        font-weight: 600;
    }
`;

const SignupForm = () => {
    const navigate = useNavigate();
    const { userData, setUserData, error, setError, file, setFile } = useContext(ContextApi);
    const current = new Date().toISOString().split("T")[0];


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
        <Box className="mt-[64px] pt-5 text-center">
            <Typography variant='h3'>Welcome!</Typography>
            <Typography variant='h6' className='text-[#878787]'>Signin to enjoy our services.</Typography>

            <Grid container>

                {/* personal info */}
                <FormBox item xl={6} lg={6}>
                    <Typography variant='h6'>Personal Information:</Typography>
                    <Box className="flex justify-between">
                        <TextField
                            variant='filled'
                            color='secondary'
                            onChange={handleSignupInputChange}
                            name='fname'
                            value={userData.fname}
                            label="First Name"
                            className='w-[48%]'
                            size='small'
                        />
                        <TextField
                            variant='filled'
                            color='secondary'
                            onChange={handleSignupInputChange}
                            name='lname'
                            value={userData.lname}
                            label="Last Name"
                            className='w-[48%]'
                            size='small'
                        />
                    </Box>

                    <TextField
                        variant='filled'
                        color='secondary'
                        onChange={handleSignupInputChange}
                        name='gender'
                        value={userData.gender}
                        label="Gender"
                        size='small'
                    />
                    <Input
                        type='date'
                        value={userData.birthdate}
                        onChange={handleSignupInputChange}
                        name='birthdate'
                        max={current}
                        style={{ color: "#616161", background: "#f0f0f0", padding: "10px 4px" }}
                    />
                    <TextField
                        variant='filled'
                        color='secondary'
                        onChange={handleSignupInputChange}
                        name='nationality'
                        value={userData.nationality}
                        label="Nationality"
                        size='small'
                    />
                </FormBox>

                {/* contact info */}
                <FormBox item xl={6} lg={6}>
                    <Typography variant='h6'>Contact Information:</Typography>
                    <Input
                        type='file'
                        onChange={(e) => setFile(e.target.files[0])}
                        inputProps={{ accept: 'image/*' }}
                        className='mt-3'
                        name='file'
                        color='secondary'
                        size='small'
                        style={{ color: "#616161", background: "#f0f0f0", padding: "10px 4px" }}
                    />
                    <TextField
                        variant='filled'
                        color='secondary'
                        onChange={handleSignupInputChange}
                        name='email'
                        value={userData.email}
                        label="Email"
                        size='small'
                    />
                    <TextField
                        variant='filled'
                        color='secondary'
                        onChange={handleSignupInputChange}
                        name='phone'
                        type='number'
                        inputProps={{ min: 10, max: 10 }}
                        min={10}
                        max={10}
                        value={userData.phone}
                        label="Phone"
                        size='small'
                    />
                    <TextField
                        variant='filled'
                        color='secondary'
                        onChange={handleSignupInputChange}
                        name='address'
                        value={userData.address}
                        label="Address"
                        size='small'
                    />
                </FormBox>

                {/* academic info */}
                <FormBox item xl={6} lg={6}>
                    <Typography variant='h6'>Academic Information:</Typography>
                    <TextField
                        variant='filled'
                        color='secondary'
                        onChange={handleSignupInputChange}
                        name='email'
                        value={userData.email}
                        label="College/University Name"
                        size='small'
                    />
                    <TextField
                        variant='filled'
                        color='secondary'
                        onChange={handleSignupInputChange}
                        name='email'
                        value={userData.email}
                        label="Program/Department"
                        size='small'
                    />
                    <TextField
                        variant='filled'
                        color='secondary'
                        onChange={handleSignupInputChange}
                        name='prn'
                        type='number'
                        value={userData.prn}
                        label="Enrolment Number"
                        size='small'
                    />
                </FormBox>

                {/* additional info */}
                <FormBox item xl={6} lg={6}>
                    <Typography variant='h6'>Additional Information:</Typography>
                    <TextField
                        variant='filled'
                        color='secondary'
                        onChange={handleSignupInputChange}
                        name='username'
                        value={userData.username}
                        label="Username"
                        size='small'
                    />
                    <TextField
                        variant='filled'
                        color='secondary'
                        onChange={handleSignupInputChange}
                        name='password'
                        value={userData.password}
                        label="Password"
                        size='small'
                    />
                    <TextField
                        variant='filled'
                        color='secondary'
                        onChange={handleSignupInputChange}
                        name='password'
                        value={userData.password}
                        label="Confirm Password"
                        size='small'
                    />
                </FormBox>
            </Grid>

            {error && <Typography className='mt-3'>Please Enter valid credentials!</Typography>}

            <Button
                variant='contained'
                onClick={(e) => signupAuth(e)}
                style={{ width: "25%", textTransform: 'none' }}
            >
                Signup
            </Button>
        </Box>
    )
}

export default SignupForm;