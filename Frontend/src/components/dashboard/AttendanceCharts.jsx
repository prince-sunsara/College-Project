import { Box, Typography, styled } from '@mui/material';
import React from 'react';
import { Bar, BarChart, Legend, ResponsiveContainer, XAxis, YAxis } from "recharts";


const AttendanceCharts = () => {
    const data = [
        { month: "January", present: 25 },
        { month: "February", present: 9 },
        { month: "March", present: 13 },
        { month: "April", present: 11 },
        { month: "May", present: 15 },
        { month: "June", present: 11 },
        { month: "July", present: 10 },
        { month: "August", present: 21 },
        { month: "September", present: 19 },
        { month: "October", present: 23 },
        { month: "November", present: 5 },
        { month: "December", present: 20 },
    ]
    return (
        <Box>
            <Typography variant='h4' fontWeight={600}>Monthly Attendance Chart</Typography>
            <ResponsiveContainer width="100%" height={350}>
                <BarChart
                    data={data}
                    margin={{ top: 20, right: 30, left: 0, bottom: 0 }}

                    style={{
                        boxShadow: "0 0 8px 5px rgba(255,255,255, 0.2), 0 0 20px 20px rgba(255,255,255, 0.19)",
                        width: "95%",
                        margin: "20px auto",
                    }}
                >
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Legend />
                    <Bar type="linear" dataKey="present" stroke='#8884d8' fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer>
        </Box>
    )
}

export default AttendanceCharts;