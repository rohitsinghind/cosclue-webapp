import React, {useState, useRef} from 'react'
import { styles } from './styles'
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import MenuIcon from '@mui/icons-material/Menu';


export default function Navbar() {

  const mediaQuery = window.matchMedia("(max-width: 550px)");
  const location = useLocation();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <>
      <AppBar position="static"  sx={{backgroundColor:"white"}}>
      <Container maxWidth="xl">
        <Toolbar sx={{position:"relative"}}>
    
          <img style={styles.logo} onClick={()=>{navigate("/")}} src={require("../../assets/images/logo.png")} alt="" />
  
          
            {mediaQuery.matches? <>
        <IconButton 
          sx={styles.navBtns}
          ref={anchorRef}
          id="composition-button"
          aria-controls={open ? 'composition-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          <MenuIcon/>
        </IconButton >
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom-start' ? 'left top' : 'left bottom',
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                  >
                    <MenuItem sx={location.pathname === "/services" ? styles.active : styles.navBtn} onClick={()=>{navigate("/services");setOpen(false);}}>Services</MenuItem>
                    <MenuItem sx={location.pathname === "/ourWork" ? styles.active : styles.navBtn} onClick={()=>{navigate("/ourWork");setOpen(false);}}>Our Work</MenuItem>
                    <MenuItem sx={location.pathname === "/careers" ? styles.active : styles.navBtn} onClick={()=>{navigate("/careers");setOpen(false);}}>Careers</MenuItem>
                    <MenuItem sx={location.pathname === "/contactUs" ? styles.active : styles.navBtn} onClick={()=>{navigate("/contactUs");setOpen(false);}}>Contact us</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
            </>:<Box sx={styles.navBtns}>
            <Typography onClick={()=>{navigate("/services")}} sx={location.pathname === "/services" ? styles.active : styles.navBtn}>Services</Typography>
            <Typography onClick={()=>{navigate("/ourWork")}} sx={location.pathname === "/ourWork" ? styles.active : styles.navBtn}>Our Work</Typography>
            <Typography onClick={()=>{navigate("/careers")}} sx={location.pathname === "/careers" ? styles.active : styles.navBtn}>Careers</Typography>
            <Typography onClick={()=>{navigate("/contactUs")}} sx={location.pathname === "/contactUs" ? styles.active : styles.navBtn}>Contact us</Typography>
            </Box>
            }
        </Toolbar>
      </Container>
    </AppBar>
    </>
  )
}
