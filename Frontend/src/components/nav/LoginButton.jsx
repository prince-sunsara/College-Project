import { Box, Button, Dialog, Input, TextField, Typography, styled } from '@mui/material';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { createUser, loginUser } from '../../services/api';

const Wrapper = styled(Box)`
    & > * {
        margin-bottom: 10px;
    };
    & > button {
        margin: 10px 0px;
        text-transform: none;
    }
`;


const ProfileButton = ({ setAccount, intialStatus }) => {
    const [open, setOpen] = useState(false);
    const [signup, setSignup] = useState(true);
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
    });
    const [file, setFile] = useState('');
    const [login, setLogin] = useState({
        email: '',
        password: '',
    });
    const [error, setError] = useState(false);

    /// dialog setup
    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
        setError(false);
    }

    /// user login or not
    const handleToggleAccount = () => {
        setSignup(!signup)
    }

    /// user signup input changes
    const handleSignupInputChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    /// user login input changes
    const onLoginInputChange = (e) => {
        const { name, value } = e.target;
        setLogin({ ...login, [name]: value });
    };

    /// signin method
    const signupAuth = async (e) => {
        e.preventDefault();

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
            // console.log(result)
            if (result.success) {
                localStorage.setItem('token', result.authtoken);
                setAccount(intialStatus.signup);
                handleClose();
                navigate('/dashboard')
            } else {
                setError(true);
            }
        } catch (error) {
            console.log('user creation error', error);
        }
    }

    /// login method
    const loginAuth = async () => {
        try {
            const response = await loginUser(login);
            // console.log(response.data);
            const result = response.data;

            if (result.success) {
                localStorage.setItem('token', result.authtoken);
                setAccount(intialStatus.signup);
                handleClose();
                navigate('/dashboard');
            } else {
                setError(true);
            }
        } catch (error) {
            console.log('user creation error', error);
        }
    }

    return (
        <>
            <Box onClick={handleOpen}>Login</Box>
            <Dialog
                open={open}
                onClose={handleClose}
            >
                {signup ?
                    <Wrapper className="flex flex-col p-5 text-center">
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
                        {error && <Typography>Please enter valid email or password!</Typography>}
                        <Button
                            variant='contained'
                            onClick={() => loginAuth()}
                        >
                            Login
                        </Button>
                        <Typography onClick={handleToggleAccount} className='text-blue-600 font-bold cursor-pointer'>Don't have account?</Typography>
                    </Wrapper>
                    :
                    <Wrapper className="flex flex-col p-5 text-center">
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
                        <Typography onClick={handleToggleAccount} className='text-blue-600 font-bold cursor-pointer'>Already have an account?</Typography>
                    </Wrapper>
                }
            </Dialog>
        </>
    )
}

export default ProfileButton;
