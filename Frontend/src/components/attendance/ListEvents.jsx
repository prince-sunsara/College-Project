import { List, ListItem, Typography } from '@mui/material'
import React from 'react';
import { collegeEvent } from '../../constants/constant';

const ListEvents = () => {
    return (
        <List className='overflow-x-auto max-h-[calc(100vh-125px)]'>
            {collegeEvent &&
                collegeEvent.map(item => (
                    <ListItem className='my-1 border *:p-1'>
                        <Typography fontSize={10} className='text-yellow-500'>{item.date}</Typography>
                        <Typography fontSize={14}>{item.title}</Typography>
                        <Typography fontSize={10}>{item.place}</Typography>
                        <Typography fontSize={10}>{item.breakTime}</Typography>
                        <Typography fontSize={10}>{item.time}</Typography>
                    </ListItem>
                ))
            }
        </List>
    )
}

export default ListEvents