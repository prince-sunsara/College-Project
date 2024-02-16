import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import Calendar from 'react-calendar';
import "../../assets/style/calendar.css";
import ListEvents from './ListEvents';
import Classes from './Classes';

const Attendance = () => {
    return (
        <Box className="pt-[64px] h-[100vh]">
            <Grid container>
                <Grid item lg={9} xl={9} md={8} sm={8} xs={12}>
                    <Calendar />
                    <Classes />
                </Grid>
                <Grid item lg={3} xl={3} md={4} sm={4} xs={12}>
                    <Box className="ml-2 px-2 py-1">
                        <Typography variant='h6' fontWeight={600}>Event List</Typography>
                        <Typography className='text-gray-400' fontSize={14}>Lorem ipsum dolor sit amet consectetur.</Typography>
                        <ListEvents />
                    </Box>
                </Grid>
            </Grid>
        </Box >
    )
}

export default Attendance;