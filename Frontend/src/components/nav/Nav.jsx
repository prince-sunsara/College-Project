import { AppBar, Box, Drawer, List, ListItem, Toolbar, styled } from "@mui/material"
import { Link } from 'react-router-dom';
import LoginButton from './LoginButton';
import { useContext, useState } from "react";
import { AccountCircle } from "@mui/icons-material";
import { ContextApi } from "../../context/ContextApi";

const Header = styled(AppBar)`
    background: #000;
`;


const Nav = () => {
    const [open, setOpen] = useState(false);
    const { isAuth } = useContext(ContextApi);
    const { setUserData, setFile } = useContext(ContextApi);

    /// drawer open close methods 
    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }

    /// logout user
    const logoutAuth = (e) => {
        localStorage.removeItem('token');
        setUserData({});
        setFile("");
        handleClose();
    }



    return (
        <Header className="flex text-white justify-between h-[64px]">
            <Toolbar>
                <ListItem>
                    <Link to="/" className='font-bold text-3xl'>OATS</Link>
                </ListItem>
                <List className="flex font-semibold text-lg">
                    <ListItem>
                        <Link to="/">Home</Link>
                    </ListItem>
                    {
                        isAuth ?
                            <>
                                <ListItem>
                                    <Link to="/dashboard">Dashboard</Link>
                                </ListItem>
                                <ListItem>
                                    <Link to="/attendance">Attendance</Link>
                                </ListItem>
                                <ListItem>
                                    <Link to="/reports">Reports</Link>
                                </ListItem>
                                <ListItem onClick={handleOpen} className='cursor-pointer'><AccountCircle /></ListItem>
                                <Drawer anchor='right' open={open} onClose={handleClose}>
                                    <Box className="bg-black flex flex-col text-white h-full">
                                        <Link onClick={handleClose} className='py-2 px-6 text-right font-bold'>X</Link>
                                        <Link to='/profile' onClick={handleClose} className='py-2 px-6 hover:bg-white hover:text-black'>Profile</Link>
                                        <Link to='/' onClick={() => logoutAuth()} className='py-2 px-6 hover:bg-white hover:text-black'>Logout</Link>
                                    </Box>
                                </Drawer>
                            </>
                            :
                            <ListItem className="cursor-pointer">
                                <LoginButton />
                            </ListItem>

                    }
                </List>
            </Toolbar>
        </Header >
    )
};

export default Nav;
