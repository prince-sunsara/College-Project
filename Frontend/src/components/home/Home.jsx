import { Box } from '@mui/material';
import React from 'react';

const Home = () => {
    return (
        <Box className="flex flex-col h-[100vh] justify-center items-center">
            <Box className='text-center font-semibold'>
                <h2 className='text-4xl font-bold'>Welcome to the Online Attendance System</h2>
                <p className='mt-3'>
                    Our system provides a convenient way to track and manage attendance using
                    advanced face recognition technology.
                </p>
                <p className='mt-3'>
                    Log in to your account to access your personalized dashboard, mark your
                    attendance, and explore insightful reports.
                </p>
                <p className='mt-3'>
                    If you're new, get started by creating an account and experience the
                    efficiency of our online attendance solution.
                </p>
            </Box>
        </Box>
    );
};

export default Home;
