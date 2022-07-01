import React from 'react'
import { styles } from './styles'
import { useNavigate } from 'react-router-dom';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function Services() {

  const navigate = useNavigate();

  return (
    <>
      <Container maxWidth="xl">
        <Box sx={styles.center}>
          <Box>
            <Typography sx={styles.text3}>Software Development</Typography>
            <Typography sx={styles.bodyText}>Building an application from scratch takes skill and experience. We have both. We’ve developed more than 200 software applications, from in-house to full scale commercial across a wide range of industries. Hosted on premise or on in the cloud, we can build, change, or migrate custom applications with a focus on your business objectives. Plus, you own your IP.
            </Typography>
          </Box>
          <img style={styles.helpImg} src={require("../../assets/images/software.jpg")} alt="" />
        </Box>
      </Container>
      <Container maxWidth="xl">
        <Box sx={styles.center}>
        <img style={styles.helpImg} src={require("../../assets/images/webServices.jpg")} alt="" />
        <Box>
            <Typography sx={styles.text3}>Our Software Development Services</Typography>
            <Typography sx={styles.bodyText}>• Full stack software development (web, mobile and desktop)
            • Cloud native development • Enterprise development • Migration to Cloud and adoption
            of Cloud services • Software re-platforming and conversion • Team augmentation
            • Automated testing • UI/UX design services • DevOps and continuous deployment</Typography>
          </Box>
          
        </Box>
        <Box sx={styles.center}>
          <Box>
            <Typography sx={styles.text3}>We Work at Any Size or Scale</Typography>
            <Typography sx={styles.bodyText}>• Start-up and pre-revenue: Making an idea come to life so you can get investors and
            users	on	board	with	your	business.	You	do	not	need	to	be	fl	uent	in	techno-speak;
            you can focus on your business needs, and we’ll handle the rest.
            • Mid-size and enterprise: We work with your business and IT departments to
            build solutions that work with your existing systems, processes, infrastructure, and
            technology stack.
            • Global consumer-scale: We understand Cloud-native global-scale architecture and
            work in all the major Cloud platforms.
            </Typography>
          </Box>
          <img style={styles.helpImg} src={require("../../assets/images/webTeam.jpg")} alt="" />
        </Box>
        <Box sx={styles.center}>
        <img style={styles.helpImg} src={require("../../assets/images/technology.jpg")} alt="" />
        <Box>
            <Typography sx={styles.text3}>Technology Stack</Typography>
            <Typography sx={styles.bodyText}>• Our experienced team has worked with hundreds of technologies, and we’ll be comfortable
            in your technology platform, whatever it is. We have experience in mobile, desktop,
                embedded, on-premises, and the right approaches are not only justified but the best option
            for the business. We can guide and work with you through all these scenarios – we aren’t
                just web-based and mobile first
            • Our commonly used technologies include: React, Angular, Node.js, C#, .NET, Python,
            PostgreSQL, SQL Server, Microsoft Azure, and Amazon Web Services. See our website for
            a list and cross-reference to select projects we’ve completed.
            </Typography>
          </Box>
          </Box>
      </Container>
      <Box sx={styles.chatBg}>
        <Typography sx={styles.text3}>We would love to hear about your business and technology goals.</Typography>
        <Button onClick={()=>{navigate("/contactUs")}} sx={{mt:"20px"}} variant="contained">Let's Chat</Button>
      </Box>
    </>
  )
}
