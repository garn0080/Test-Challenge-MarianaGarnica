import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import SearchIcon from '@mui/icons-material/Search';
import './TopBar.css'

function TopBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar className="topBar">
                    <h1 className="logo">Quote.u </h1>
                    <SearchIcon/>
                </Toolbar>
            </AppBar>
        </Box>
    );

}

export default TopBar;

