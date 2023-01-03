import { Box, Container, Grid, styled, Typography } from "@mui/material";
import ContactMeCard from "./ContactMeCard";
import ContactMeForm from "./ContactMeForm";

// -------------------------------------------------------------------------

const BoxStyled = styled(Box)(({ theme }) => ({
  background: theme.palette.info.dark,
}));

const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.info.contrastText,
  fontWeight: 600
}))

// -------------------------------------------------------------------------

export default function ContactMe() {
  return(
    <BoxStyled p={4}>
      <Container maxWidth="xl">
        <Title variant="h4">Contactame</Title>
        <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
          <Grid item xs={12} md={5} sx={{ display: 'flex', alignItems: 'center' }}>
            <ContactMeCard />
          </Grid>
          <Grid item xs={12} md={4}>
            <ContactMeForm />
          </Grid>
        </Grid>
      </Container>
    </BoxStyled>
  );
};