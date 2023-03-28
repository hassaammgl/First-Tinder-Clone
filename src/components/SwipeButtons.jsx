import '../styles/SwipeButtons.css'
import React from "react";
import ReplayRoundedIcon from '@mui/icons-material/ReplayRounded';
import CloseIcon from '@mui/icons-material/Close';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import FlashOnRoundedIcon from '@mui/icons-material/FlashOnRounded';
import { IconButton } from '@mui/material';




const SwipeButtons = () => {
    return <div className='swipeButtons'>
        <IconButton className='swipeButtons_repeat' >
            <ReplayRoundedIcon fontSize='large' />
        </IconButton>      
        <IconButton className='swipeButtons_left' >
            <CloseIcon fontSize='large' />
        </IconButton>      
        <IconButton className='swipeButtons_star' >
            <StarRoundedIcon fontSize='large' />
        </IconButton>      
        <IconButton className='swipeButtons_right' >
            <FavoriteRoundedIcon fontSize='large' />
        </IconButton>      
        <IconButton className='swipeButtons_lightning' >
            <FlashOnRoundedIcon fontSize='large' />
        </IconButton>      
  </div>;
};

export default SwipeButtons;
