import React, {useState} from 'react'
import { styles } from './styles'
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export default function Navbar() {

  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      <AppBar position="static"  sx={{backgroundColor:"white"}}>
      <Container maxWidth="xl">
        <Toolbar sx={{position:"relative"}}>
    
          <img style={styles.logo} onClick={()=>{navigate("/")}} src={require("../../assets/images/logo.png")} alt="" />
  
          <Box sx={styles.navBtns}>
            <Typography onClick={()=>{navigate("/services")}} sx={location.pathname === "/services" ? styles.active : styles.navBtn}>Services</Typography>
            <Typography onClick={()=>{navigate("/ourWork")}} sx={location.pathname === "/ourWork" ? styles.active : styles.navBtn}>Our Work</Typography>
            <Typography onClick={()=>{navigate("/careers")}} sx={location.pathname === "/careers" ? styles.active : styles.navBtn}>Careers</Typography>
            <Typography onClick={()=>{navigate("/contactUs")}} sx={location.pathname === "/contactUs" ? styles.active : styles.navBtn}>Contact us</Typography>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </>
  )
}
