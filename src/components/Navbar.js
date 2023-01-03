import { AppBar, Box, Button, Container, styled, Toolbar, Typography } from "@mui/material";

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

const ButtonStyled = styled(Button)(({ theme }) => ({
  color: theme.palette.common.black,
  fontWeight: 600
}));

// -------------------------------------------------------------------------

export default function Navbar() {
  return(
    <AppBarStyled position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          <Title
            variant="h6"
            noWrap
            component="a"
            href="/"
          >
            SAMUEL AGUILAR
          </Title>
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 1 }}>
            <ButtonStyled>
              Servicios
            </ButtonStyled>
            <ButtonStyled>
              Contactame
            </ButtonStyled>
          </Box>
        </Toolbar>
      </Container>
    </AppBarStyled>
  );
};
