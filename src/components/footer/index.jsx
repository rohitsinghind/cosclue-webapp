import React from 'react'

import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';

import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import { styles } from './styles';


export default function Footer() {

  const mediaQuery = window.matchMedia("(max-width: 550px)");

  return (
    <Toolbar sx={styles.toolbar}>
      <Container maxWidth="xl" sx={styles.innerBox}>
      <img style={mediaQuery.matches? styles.logo2:styles.logo} src={require("../../assets/images/logo.png")} alt="" />
        <Typography
          sx={styles.footerTxt}
        >&copy;2022 Cosclue</Typography>
        <Box style={mediaQuery.matches? styles.box2:styles.box}>
          <LinkedInIcon sx={styles.icon}/>
          <TwitterIcon sx={styles.icon}/>
          <EmailIcon sx={styles.icon}/>
        </Box>
      </Container>
    </Toolbar>
  )
}
