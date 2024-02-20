import React from 'react'
import { Box } from '@mui/material';
import BasicDetails from './BasicDetails';
import AttendanceCharts from './AttendanceCharts';

const Dashboard = () => {
    return (
        <Box className="pt-[64px] h-[100vh]">
            <BasicDetails />
            <AttendanceCharts />
            <Box>
                section 3
            </Box>
        </Box>
    )
}

export default Dashboard;