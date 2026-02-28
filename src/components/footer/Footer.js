import { Box, Container, Grid, styled } from "@mui/material";
import { useNavigate } from "react-router-dom";
// components
import Copyright from "./Copyright";
import { PATH_SERVICES } from "src/routes/path";
import FooterList from "./FooterList";
// icons
import ContactMailIcon from '@mui/icons-material/ContactMail';
import SocialNetworks from "./SocialNetworks";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

// -------------------------------------------------------------------------

const BoxStyled = styled(Box)(({ theme }) => ({
  background: theme.palette.grey[800],
  paddingTop: theme.spacing(10),
  paddingBottom: theme.spacing(8),
}));

// -------------------------------------------------------------------------

export default function Footer() {
  const navigate = useNavigate();

  const ABOUT = [
    { text: `Somos una empresa que ofrece servicios contables profesionales 
      y confiables a sus clientes. Con un equipo de contadores altamente capacitados y experimentados, 
      Blackstock se dedica a brindar soluciones integrales de contabilidad adaptadas a las necesidades 
      individuales de cada cliente.`
    }
  ];

  const SERVICES = [
    { text: 'Contabilidad', action: () => navigate(PATH_SERVICES.accounting) },
    { text: 'Auditorias', action: () => navigate(PATH_SERVICES.index) },
  ];

  const CONTACT = [
    { text: 'contacto@blackstock.com.mx', icon: <ContactMailIcon /> },
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
              <FooterList title="Servicios" items={SERVICES} />
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
