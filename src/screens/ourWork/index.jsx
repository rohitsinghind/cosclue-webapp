import React from 'react'
import { styles } from './styles'
import { useNavigate } from 'react-router-dom';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function OurWork() {

  const navigate = useNavigate();
  const mediaQuery = window.matchMedia("(max-width: 550px)");

  return (
    <>
      <Container maxWidth="xl">
        <Box sx={styles.center}>
          <Box>
            <Typography sx={styles.text1}>The Cosclue Way</Typography>
            {mediaQuery.matches?
          <img style={styles.helpImg2} src={require("../../assets/images/work.jpg")} alt="" />:""}
            <Typography sx={styles.bodyText}>At Arcurve, we solve real problems for our clients by following the Arcurve Way at each stage of an engagement.</Typography>
          </Box>
          {mediaQuery.matches?"":
          <img style={styles.helpImg} src={require("../../assets/images/work.jpg")} alt="" />}
        </Box>
      </Container>
      <Box sx={styles.chatBg}>
      <Container maxWidth="xl">
        <Box sx={styles.center}>
            <Typography sx={styles.text2}>Identify The Problem And Make A Plan</Typography>
            <Typography sx={styles.bodyText2}>We narrow down your key deliverables, identify high priority items and provide a detailed scope of work for you to develop the roadmap to optimize your business processes and create efficiencies in your operations.</Typography>
        </Box>
        </Container>
        </Box>

        <Container maxWidth="xl">
        <Box sx={styles.center}>
            <Typography sx={styles.text2}>Analyze The Risks</Typography>
            <Typography sx={styles.bodyText2}>We know every project has risks. We help you identify them early on and bring them to the forefront so that you can make informed decisions that make sense for your business.</Typography>
        </Box>
        </Container>

        <Box sx={styles.chatBg}>
        <Container maxWidth="xl">
        <Box sx={styles.center}>
            <Typography sx={styles.text2}>Choose The Right Solution</Typography>
            <Typography sx={styles.bodyText2}>We can help you assess, qualify and select the right technology, partners and in some cases, business solutions such as process improvements, organizational structural changes. We have the knowledge and hands-on experience (on more than 800 projects!) to recommend the right technology, tools and practices for the best project outcome.</Typography>
        </Box>
        </Container>
        </Box>

        <Container maxWidth="xl">
        <Box sx={styles.center}>
            <Typography sx={styles.text2}>Iterative Execution</Typography>
            <Typography sx={styles.bodyText2}>We believe in taking measured steps and soliciting feedback along the way to keep the project aligned with your business needs. Our approach allows your project to be completed in logical steps, addressing high-risk areas up-front, with more frequent review and testing to highlight issues faster allowing you to adjust your priorities and respond to changes in your business.</Typography>
        </Box>
        </Container>

        <Box sx={styles.chatBg}>
        <Container maxWidth="xl">
        <Box sx={styles.center}>
            <Typography sx={styles.text2}>Testing</Typography>
            <Typography sx={styles.bodyText2}>We develop a unique test strategy for your project, with the goal of risk reduction. This strategy strikes a pragmatic balance across unit, functional, integration, usability, compatibility, security, and performance testing. Some strategies are automated and run continuously and concurrently with the development process, while others are scheduled at key points in the project to ensure user groups have time to test the product and provide feedback.</Typography>
        </Box>
        </Container>
        </Box>

        <Container maxWidth="xl">
        <Box sx={styles.center}>
            <Typography sx={styles.text2}>Deployment and Configuration</Typography>
            <Typography sx={styles.bodyText2}>A project is only complete once it’s deployed and configured for your needs. You can be confident in knowing how to deploy your finished product and troubleshoot any issues that may arise.</Typography>
        </Box>
        </Container>

        <Box sx={styles.chatBg}>
        <Container maxWidth="xl">
        <Box sx={styles.center}>
            <Typography sx={styles.text2}>Documentation and Artefacts</Typography>
            <Typography sx={styles.bodyText2}>Your project belongs to you. We leave you with the as-built documentation to help with future analysis or developments, whether they happen in-house or are outsourced. All artefacts we generate, including requirements, test plans and deployment scripts are yours to keep so you won’t have to go looking for them.</Typography>
        </Box>
        </Container>
        </Box>

        <Box sx={styles.center2}>
        <Typography sx={styles.text3}>We would love to hear about your business and technology goals.</Typography>
        <Button onClick={()=>{navigate("/contactUs")}} sx={{mt:"20px"}} variant="contained">Let's Chat</Button>
      </Box>
    </>
  )
}
