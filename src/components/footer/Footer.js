import { Box, Container, Grid, styled } from "@mui/material";
// components
import Copyright from "./Copyright";
import FooterList from "./FooterList";
// icons
import ContactMailIcon from '@mui/icons-material/ContactMail';
import PhoneIcon from '@mui/icons-material/Phone';
import SocialNetworks from "./SocialNetworks";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

// -------------------------------------------------------------------------

const BoxStyled = styled(Box)(({ theme }) => ({
  background: theme.palette.grey[800],
  paddingTop: theme.spacing(5),
  paddingBottom: theme.spacing(5)
}));

// -------------------------------------------------------------------------

export default function Footer() {
  const ABOUT = [
    { text: `Somos una empresa que ofrece servicios contables profesionales 
      y confiables a sus clientes. Con un equipo de contadores altamente capacitados y experimentados, 
      Blackstock se dedica a brindar soluciones integrales de contabilidad adaptadas a las necesidades 
      individuales de cada cliente.`
    }
  ];

  const COMPANY = [
    { text: 'Servicios', action: () => {} }
  ];

  const CONTACT = [
    // { text: 'Jorge Isaac 688, Guadalajara, Jalisco.', icon: <BusinessIcon />, action: handleOpenLocation },
    { text: 'contacto@blackstock.com.mx', icon: <ContactMailIcon /> },
    { text: '33-1280-2544', icon: <PhoneIcon /> }
  ];

  const SNS = [
    { name: 'Facebook', icon: <FacebookIcon />, url: 'https://www.facebook.com/BlackStock-Tax-and-Legal-112262551906624' },
    { name: 'Instagram', icon: <InstagramIcon />, url: 'https://www.instagram.com/bstaxandlegal' },
    { name: 'Linkedin', icon: <LinkedInIcon /> }
  ];

  return (
    <>
      <BoxStyled>
        <Container maxWidth="xl">
          <Grid container>
            <Grid item xs={12} md={6}>
              <FooterList img={process.env.PUBLIC_URL + '/static/logo-white.png'} items={ABOUT} />
            </Grid>
            <Grid item xs={12} md={3}>
              <FooterList title="Compañia" items={COMPANY} />
            </Grid>
            <Grid item xs={12} md={3}>
              <FooterList title="Contacto" items={CONTACT} />
            </Grid>
          </Grid>
          <SocialNetworks items={SNS} />
        </Container>
      </BoxStyled>
      <Copyright />
    </>
  );
};
