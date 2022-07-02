import React from 'react'
import { styles } from './styles'

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function Careers() {

  const mediaQuery = window.matchMedia("(max-width: 550px)");

  return (
    <>  
      <Container maxWidth="xl">
        <Box sx={styles.center2}>
            
            <Typography sx={styles.text1}>What's it like to work at Cosclue?</Typography>
            <img style={mediaQuery.matches? styles.helpImg2:styles.helpImg} src={require("../../assets/images/careers.jpg")} alt="" />
            <Typography sx={styles.bodyText}>We know that our people are essential both to our value and our achievements.  Our business is based on mutual trust, honest interactions, and a passion for technology. Ultimately, this allows us to both grow and leverage our collective talent to find the best solutions for our clients.</Typography>
            <Typography sx={styles.bodyText}>We believe that work should be an enjoyable experience, and that the best “aha” moments come through team learning and continuous motivation. We know the key to success is collaboration, and that you can’t put a value on accountable, transparent and authentic interactions. We strive to deliver exceptional service, while creating lasting, authentic relationships with our employees, our contractors, our students, our clients and our community.</Typography>
        </Box>
      </Container>
      <Box sx={styles.chatBg}>
      {mediaQuery.matches?
      <img style={styles.helpImg2} src="https://images.unsplash.com/photo-1513258496099-48168024aec0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q" alt="" />:""}
        <Box sx={styles.center}>
        {mediaQuery.matches?"":
        <img style={styles.sideImg} src="https://images.unsplash.com/photo-1513258496099-48168024aec0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q" alt="" />}
        <Box>
          <Typography sx={styles.text3}>Cosclueians:</Typography>
          <Typography sx={styles.bodyText}>
            <ul>
              <li>Are passionate about technology</li>
              <li>Are driven to succeed</li>
              <li>Believe in the importance of teamwork</li>
              <li>Are community-minded</li>
              <li>Are expert problem solversy</li>
              <li>Thrive on challenge</li>
              <li>Are motivated by exceptional results</li>
              <li>Care about their clients</li>
            </ul>
          </Typography>
          <Typography sx={styles.bodyText}>
          But don't just take our word for it, see for yourselves.
          </Typography>
        </Box>
        </Box>
      </Box>
      <Container maxWidth="xl">
        <Box sx={styles.center2}>
            
            <Typography sx={styles.text1}>Students</Typography>
            <Typography sx={styles.bodyText}>The Arcurve student intern program is one of the best in Canada. Our students engage and collaborate on real technology projects and work with experienced software professionals and strategists. An internship allows our students to gain hands-on experience on a wide range of projects, learning in a talented team environment and making valuable connections. Our main goal is to inspire and assist our students along their way to a successful future in the technology and software industry.</Typography>
            <Button variant="contained">Apply now</Button>
        </Box>
      </Container>
    </>
  )
}
