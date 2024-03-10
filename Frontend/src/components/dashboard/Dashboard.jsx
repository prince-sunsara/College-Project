import React from 'react'
import { Box } from '@mui/material';
import BasicDetails from './BasicDetails';
import AttendanceCharts from './AttendanceCharts';
import StudentAttendance from './StudentAttendance';

const Dashboard = () => {
    return (
        <Box className="pt-[64px] h-[100vh]">
            <BasicDetails />
            <AttendanceCharts />
            <StudentAttendance />
        </Box>
    )
}

export default Dashboard;