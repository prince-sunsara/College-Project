import { Box, Typography } from '@mui/material';
import React from 'react'
import { classList } from '../../constants/constant';

const Classes = () => {
    return (
        <Box className="mt-5">
            <Typography align='center' variant='h4' fontWeight={600}>Classes for today</Typography>
            <Box className="flex flex-wrap justify-center mt-5">
                {classList &&
                    classList.map(item => (
                        <Box className="p-2 border border-gray-500 w-[30%] m-1">
                            <Typography variant='h6' className='text-yellow-500'>{item.classSubject}</Typography>
                            <Typography>{item.classTitle}</Typography>
                            <Typography fontSize={15} className='text-slate-500'>{item.classTime}</Typography>
                            <Typography fontSize={14}>{item.classProfessor}</Typography>
                        </Box>
                    ))
                }
            </Box>
        </Box>
    )
}

export default Classes;