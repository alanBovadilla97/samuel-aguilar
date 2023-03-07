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
    { text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel congue tellus. 
        Pellentesque congue lacinia elit id condimentum. In hac habitasse platea dictumst. 
        Aliquam accumsan, ante placerat aliquam lacinia, velit nunc tincidunt massa, i
        d euismod augue dui quis ex. Duis elementum ac lorem vitae tincidunt. Praesent velit magna, 
        viverra et orci eu, sollicitudin aliquet sapien. Cras sit amet rhoncus lectus. Ut eu euismod ex, 
        vitae ultrices neque. Proin auctor sem ut ipsum sodales, eget congue mauris vestibulum.`
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
