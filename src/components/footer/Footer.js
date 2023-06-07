import { Box, Container, Grid, styled } from "@mui/material";
// components
import Copyright from "./Copyright";
import FooterList from "./FooterList";
// icons
import BusinessIcon from '@mui/icons-material/Business';
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

  const handleOpenLocation = () => {
    window.open('https://goo.gl/maps/vHV9DKbtZoyADdKr5', '_blank', 'noreferrer')
  };

  const ABOUT = [
    { text: `Licenciado egresado de la Universidad de Guadalajara altamente capacitado 
    y con una amplia experiencia en el campo de la contabilidad. Con un sólido conocimiento de los 
    principios contables y las normativas fiscales, ofreciendo soluciones financieras precisas y estratégicas 
    para satisfacer las necesidades de su empresa.`
    }
  ];

  const COMPANY = [
    { text: 'Servicios', action: () => {} }
  ];

  const CONTACT = [
    { text: 'Jorge Isaac 688, Guadalajara, Jalisco.', icon: <BusinessIcon />, action: handleOpenLocation },
    { text: 'samuel.aguilar.lcp@gmail.com', icon: <ContactMailIcon /> },
    { text: '33-1280-2544', icon: <PhoneIcon /> }
  ];

  const SNS = [
    { name: 'Facebook', icon: <FacebookIcon /> },
    { name: 'Instagram', icon: <InstagramIcon /> },
    { name: 'Linkedin', icon: <LinkedInIcon /> }
  ];


  return (
    <>
      <BoxStyled>
        <Container maxWidth="xl">
          <Grid container>
            <Grid item xs={6}>
              <FooterList title="Samuel Aguilar" items={ABOUT} />
            </Grid>
            <Grid item xs={3}>
              <FooterList title="Compañia" items={COMPANY} />
            </Grid>
            <Grid item xs={3}>
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
