import { Box, Button, IconButton, InputAdornment, TextField, Typography, styled } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import React, { useState } from 'react'

const InputBox = styled(Box)`
    display: flex;
    flex-direction: column;
    & > label {
        font-weight: 600;
        margin: 10px 0;
    }
    & > button{
        margin: 10px auto 0;
        width: 210px;
    }
`;

const Details = ({ userData, setUserData }) => {
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    return (
        <Box className="mt-8 ml-5">
            <Typography variant='h3'>Profile Setting</Typography>
            <Typography>Here are all your personal information</Typography>
            <Box className="flex flex-col justify-between w-[60%]">
                <InputBox>
                    <label>Name </label>
                    <TextField size="small" value={userData.name} />
                </InputBox>
                <InputBox>
                    <label>Email </label>
                    <TextField size="small" value={userData.email} />
                </InputBox>
                <InputBox>
                    <label>Phone </label>
                    <TextField size="small" value={userData.phone} />
                </InputBox>
                <InputBox>
                    <label>Password </label>
                    <TextField
                        value={userData.password}
                        size='small'
                        type={showPassword ? 'text' : 'password'}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end" >
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}
                    />
                </InputBox>
                <InputBox>
                    <Button variant='contained'>Submit</Button>
                </InputBox>
            </Box>
        </Box >
    )
}

export default Details;