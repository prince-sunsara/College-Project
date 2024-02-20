import { Apartment, Groups, School } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'
import React from 'react'

const BasicDetails = () => {
    return (
        <Box className="m-5">
            <Box className="flex justify-between *:flex *:w-1/3 *:text-black *:bg-slate-300 *:m-2 *:py-3 *:px-5">
                <Box className="rounded-lg justify-center">
                    <School fontSize='large' />
                    <Box className="ml-2">
                        <Typography
                            variant='h6'
                            fontWeight={600}
                        >
                            12,546
                        </Typography>
                        <Typography
                            fontSize={14}
                            fontWeight={600}
                            className='text-gray-500'
                        >
                            Total Students
                        </Typography>
                    </Box>
                </Box>
                <Box className="rounded-lg justify-center">
                    <Groups fontSize='large' />
                    <Box className="ml-2">
                        <Typography
                            variant='h6'
                            fontWeight={600}
                        >
                            2,546
                        </Typography>
                        <Typography
                            fontSize={14}
                            fontWeight={600}
                            className='text-gray-500'
                        >
                            Total Teachers
                        </Typography>
                    </Box>
                </Box>
                <Box className="rounded-lg justify-center">
                    <Apartment fontSize='large' />
                    <Box className="ml-2">
                        <Typography
                            variant='h6'
                            fontWeight={600}
                        >
                            12,546
                        </Typography>
                        <Typography
                            fontSize={14}
                            fontWeight={600}
                            className='text-gray-500'
                        >
                            Total Apartments
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default BasicDetails