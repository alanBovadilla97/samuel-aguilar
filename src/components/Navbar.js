import { AppBar, Box, Button, Container, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, styled, Toolbar } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import ServicesMenu from "./navbar/ServicesMenu";
import { useNavigate } from "react-router-dom";
import { PATH_PAGE } from "src/routes/path";
import { makeStyles } from "@mui/styles";

// -------------------------------------------------------------------------

const AppBarStyled = styled(AppBar)(({ theme }) => ({
  background: theme.palette.common.white
}));

const ButtonStyled = styled((props) => {
  return <Button size="large" {...props} />
})(({ theme }) => ({
  color: theme.palette.common.black,
  fontWeight: 600
}));

// -------------------------------------------------------------------------

const useStyles = makeStyles((theme) => ({
  toolbar: {
    justifyContent: 'space-between'
  },
  logo: {
    width: 150, 
    '&:hover': { 
      cursor: 'pointer' 
    }
  },
  optionsContainer: {
    gap: 1
  },
  drawer: {
    '& .MuiDrawer-paper': { 
      boxSizing: 'border-box', 
      width: '100%' 
    }
  }
}));

// -------------------------------------------------------------------------

export default function Navbar() {
  const classes = useStyles();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleSetMobileOpen = () => {
    setMobileOpen(pv => !pv);
  };

  const handleOpenServices = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleCloseServices = () => {
    setAnchorEl(null);
  };

  const handleClickContactMe = () => {
    const contactMe = document.getElementById('contact-me');
    contactMe.scrollIntoView({ behavior: 'smooth' });

    setTimeout(() => {
      setMobileOpen(false);
    }, 750);
  };

  const handleNavigateToHome = () => {
    navigate(PATH_PAGE.home);
  };

  return(
    <>
      <AppBarStyled position="sticky">
        <Container maxWidth="xl">
          <Toolbar disableGutters className={classes.toolbar}>
            <Box 
              component="img" 
              src="/static/logo-sec.png"  
              alt="logo" 
              onClick={handleNavigateToHome}
              className={classes.logo}
            />
            <Box className={classes.optionsContainer} sx={{ display: { xs: 'none', sm: 'flex' }}}>
              <ButtonStyled onClick={handleOpenServices}>
                Servicios
              </ButtonStyled>
              <ServicesMenu 
                open={open} 
                anchorEl={anchorEl} 
                setAnchorEl={setAnchorEl} 
                handleClose={handleCloseServices} 
                setMobileOpen={setMobileOpen}
              />
              <ButtonStyled onClick={handleClickContactMe}>
                Contactame
              </ButtonStyled>
            </Box>
            <Box sx={{ display: { xs: 'block', sm: 'none' }}}>
              <IconButton onClick={handleSetMobileOpen}>
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBarStyled>
      <Drawer
        anchor="top"
        open={mobileOpen}
        onClose={handleSetMobileOpen}
        ModalProps={{ keepMounted: true }}
        className={classes.drawer}
      >
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={handleOpenServices}>
              <ListItemText primary="Servicios" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={handleClickContactMe}>
              <ListItemText primary="Contactame" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};
