import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement } from "chart.js";

import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';

ChartJS.register(ArcElement);

const StudentAttendance = () => {
    const [data, setData] = useState({
        labels: ["Present", "Absent"],
        datasets: [
            {
                data: [0, 0],
                backgroundColor: ['#36A2EB', '#FF6384'],
                hoverBackgroundColor: ['#36A2EB', '#FF6384'],
            }
        ]
    })

    useEffect(() => {
        const interval = setInterval(() => {
            const presentCount = Math.floor(Math.random() * 100);
            const absentCount = 100 - 15;

            setData({
                labels: ["Present", "Absent"],
                datasets: [
                    {
                        data: [presentCount, absentCount],
                        backgroundColor: ['#36A2EB', '#FF6384'],
                        hoverBackgroundColor: ['#36A2EB', '#FF6384'],
                    }
                ]
            })
        }, 1000)

        return () => clearInterval(interval);
    }, [])

    return (
        <Box>
            <Typography variant='h4' fontWeight={600}>Yearly Attendance Chart</Typography>
            <Box style={{ width: '300px', height: '300px' }}>
                {
                    <Pie
                        data={data}
                        style={{ width: '100%', height: '100%' }}
                    />
                }
            </Box>
        </Box>
    )
}

export default StudentAttendance;