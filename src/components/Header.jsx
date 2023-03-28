import React from "react";
import '../styles/Header.css'
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import ForumRoundedIcon from '@mui/icons-material/ForumRounded';
import { IconButton } from "@mui/material";
import logo from '../assets/logo.png'

const Header = () => {
    return <div className="header">
        <IconButton>
            <PersonRoundedIcon fontSize="large" className="header_icon" />
        </IconButton>

        <img className="header_logo" src={logo} alt="Logo" />
        <IconButton>
            <ForumRoundedIcon fontSize="large" className="header_icon" />
        </IconButton>
    </div>;
};

export default Header;
