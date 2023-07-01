import { AppBar, Box, Button, Container, styled, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import ServicesMenu from "./navbar/ServicesMenu";

// -------------------------------------------------------------------------

const AppBarStyled = styled(AppBar)(({ theme }) => ({
  background: theme.palette.common.white
}));

const Title = styled(Typography)(({ theme }) => ({
  marginRight: 2,
  display: { xs: 'none', md: 'flex' },
  fontFamily: 'monospace',
  fontWeight: 700,
  letterSpacing: '.3rem',
  color: theme.palette.common.black,
  textDecoration: 'none',
}));

const ButtonStyled = styled((props) => {
  return <Button size="large" {...props} />
})(({ theme }) => ({
  color: theme.palette.common.black,
  fontWeight: 600
}));

// -------------------------------------------------------------------------

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickContactMe = () => {
    const contactMe = document.getElementById('contact-me');
    contactMe.scrollIntoView({ behavior: 'smooth' });
  };

  return(
    <>
      <AppBarStyled position="sticky">
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
            <Box component="img" src={process.env.PUBLIC_URL + '/static/logo-sec.png'}  alt="logo" sx={{ width: 150 }} />
            <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 1 }}>
              <ButtonStyled onClick={handleClick}>
                Servicios
              </ButtonStyled>
              <ServicesMenu 
                open={open} 
                anchorEl={anchorEl} 
                setAnchorEl={setAnchorEl} 
                handleClose={handleClose} 
              />
              <ButtonStyled onClick={handleClickContactMe}>
                Contactame
              </ButtonStyled>
            </Box>
          </Toolbar>
        </Container>
      </AppBarStyled>
     
    </>
  );
};
