import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import NavigationIcon from '@mui/icons-material/Navigation';
import './NavButton.css';

export default function NavButton() {

  const handlerScrollUp = () => {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    }
  }

  return (
    <Box sx={{ mt: 5, ml: 130  }} >
      
      <Fab onClick={handlerScrollUp} color="info" id="navbtn" sx={{mr: 0}}>
        <NavigationIcon  sx={{ mr: 0 }} />
      </Fab>
      
    </Box>
  );
}