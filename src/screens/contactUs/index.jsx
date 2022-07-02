import React, {useState} from 'react'
import { styles } from './styles'

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default function ContactUs() {

  const mediaQuery = window.matchMedia("(max-width: 550px)");

  const [creds, setCreds] = useState({name:'', company: '', phoneNumber: '', email:'', anythingElse:'' });

  const handleChange = (key) => {
    key.preventDefault();
    setCreds({ ...creds, [key.target.id]: key.target.value });
  };

  const submitHandler = () => {
    
  }

  return (
    <>
      <Container maxWidth="xl">
        <Box sx={styles.center}>
          <Typography sx={styles.text1}>Contact us</Typography>
          <img style={styles.helpImg} src={require("../../assets/images/contactUs.jpg")} alt="" />
        </Box>
      </Container>
      <Box sx={styles.chatBg}>
      {mediaQuery.matches?"":
        <img style={styles.contactimg} src="https://images.unsplash.com/photo-1560264280-88b68371db39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />}
        <Box sx={styles.center2}>
          <TextField
            sx={styles.textfield}
            required
            id="name"
            label="Name"
            onChange={handleChange}
            value={creds.name || ''}
          />
          <TextField 
            sx={styles.textfield}
            id="company" 
            label="Company" 
            onChange={handleChange}
            value={creds.company || ''}
          />
          <TextField 
            sx={styles.textfield}
            type="number"
            id="phoneNumber" 
            label="Phone Number" 
            onChange={handleChange}
            value={creds.phoneNumber || ''}
          />
          <TextField
            sx={styles.textfield}
            required
            id="email"
            label="Email"
            onChange={handleChange}
            value={creds.email || ''}
          />
          <TextField
            sx={styles.textfield}
            required
            id="anythingElse"
            maxRows={4}
            label="Anything else"
            onChange={handleChange}
            value={creds.anythingElse || ''}
          />
          <Button sx={{mt:"20px"}} onClick={submitHandler} variant="contained">Submit</Button>
        </Box> 
      </Box>
    </>
  )
}
