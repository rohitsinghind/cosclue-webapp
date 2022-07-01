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
  return (
    <Toolbar sx={styles.toolbar}>
      <Container maxWidth="xl" sx={styles.innerBox}>
      <img style={styles.logo} src={require("../../assets/images/logo.png")} alt="" />
        <Typography
          sx={styles.footerTxt}
        >&copy;2022 Cosclue</Typography>
        <Box style={styles.box}>
          <LinkedInIcon sx={styles.icon}/>
          <TwitterIcon sx={styles.icon}/>
          <EmailIcon sx={styles.icon}/>
        </Box>
      </Container>
    </Toolbar>
  )
}
