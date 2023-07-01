import { Box, Container, Grid, styled, Typography } from "@mui/material";
import ContactMeCard from "./ContactMeCard";
import ContactMeForm from "./ContactMeForm";

// -------------------------------------------------------------------------

const BoxStyled = styled(Box)(({ theme }) => ({
  background: theme.palette.common.white,
}));

const ContainerStyled = styled(Container)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(4)
}))

const Title = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  textAlign: 'center'
}))

// -------------------------------------------------------------------------

export default function ContactMe() {
  return(
    <BoxStyled px={4} py={6} id="contact-me">
      <ContainerStyled maxWidth="xl">
        <Title variant="h3">Contactame</Title>
        <Grid container spacing={5} sx={{ justifyContent: 'center' }}>
          <Grid item xs={6}>
            <ContactMeCard />
          </Grid>
          <Grid item xs={12} md={6}>
            <ContactMeForm />
          </Grid>
        </Grid>
      </ContainerStyled>
    </BoxStyled>
  );
};