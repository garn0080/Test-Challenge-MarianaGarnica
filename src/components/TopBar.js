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
                    <h2 className="logo">Think</h2>
                    <SearchIcon/>
                </Toolbar>
            </AppBar>
        </Box>
    );

}

export default TopBar;

