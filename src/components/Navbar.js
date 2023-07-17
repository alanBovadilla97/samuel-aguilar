import { AppBar, Box, Button, Container, styled, Toolbar } from "@mui/material";
import { useState } from "react";
import ServicesMenu from "./navbar/ServicesMenu";
import { useNavigate } from "react-router-dom";
import { PATH_PAGE } from "src/routes/path";

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

export default function Navbar() {
  const navigate = useNavigate();
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

  const handleNavigateToHome = () => {
    navigate(PATH_PAGE.home);
  };

  return(
    <>
      <AppBarStyled position="sticky">
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
            <Box 
              component="img" 
              src={process.env.PUBLIC_URL + '/static/logo-sec.png'}  
              alt="logo" 
              sx={{ width: 150, '&:hover': { cursor: 'pointer' } }}
              onClick={handleNavigateToHome}
            />
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
